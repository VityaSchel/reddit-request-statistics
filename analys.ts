import fs from 'fs/promises'
import path from 'path'
import type { CommentSaved } from './scrape'

const commentsRaw = await fs.readFile(path.join(__dirname, 'comments.json'), 'utf-8')
const comments = JSON.parse(commentsRaw) as (CommentSaved & { postId: string })[]

const groupFilter = (text: string | string[]) => {
  let filtered
  if(Array.isArray(text)) {
    filtered = requestBotComments.filter(r => text.some(t => r.body.includes(t)))
  } else {
    filtered = requestBotComments.filter(r => r.body.includes(text))
  }
  const ids = filtered.map(r => r.id)
  return { comments: filtered, ids }
}

const requestBotComments = comments.filter(c => c.author === 'request_bot').map(c => {
  const postId = c.permalink.match(/^\/r\/redditrequest\/comments\/([a-z0-9]+)\//)![1]
  if (postId.length === 0) {
    throw new Error('Invalid post id at comment ' + c.id)
  }
  return {
    ...c,
    postId
  }
})
const autoreply = groupFilter('To complete your request')
const granted = groupFilter(['has been granted!', 'Your request has been granted. You are now a moderator of '])
const rejectedCommunityRecentlyBanned = groupFilter('at this time as it was only recently banned')
const rejectedUserNotVerifiedEmail = groupFilter('you need to have a verified email on your account')
const rejectedByAdmin = groupFilter('we have decided not to approve')
const rejectedNotEligible = groupFilter(['is not eligible for request.', 'is not eligible for request at this time.', 'If you are already the moderator of a subreddit that was banned due to lack of moderation and would like to appeal'])
const rejectedActiveMods = groupFilter(['not all moderator activity is visible', 'Not all moderator activity will be publicly visible.', 'That mod is still active on the site.', 'Hey! There\'s a new mod team over there.'])
const rejectedSubViolatedRedditPolicies = groupFilter('this subreddit is ineligible for Reddit Request for violating Reddit policies')
const rejectedByUserCriteria = groupFilter(['Your account does not meet the minimum age or karma', 'restricted so you\'re unable to request a subreddit at this time', 'looks like your account is currently\nrestricted.'])
const rejectedNoAutoreply = groupFilter('denied due to a failure to reply')
const rejectedRepeatRequest = groupFilter('Users may only make one request every 15 days')
const topModRemovalGranted = groupFilter('Your request to remove the top mod of')
const topModRemovalAutoreply = groupFilter(['thanks for submitting a Top Mod Removal request', 'Thanks for submitting a Top Mod Removal request'])
const rejectedTooManyRequestsForSub = groupFilter('already multiple requests for this')
const topModRemovedRejectedAlreadyTopMod = groupFilter(['It looks like you are already the current\ntop mod of', 'It looks like you\nare already current top mod of'])
const rejectedInvalidLink = groupFilter(['Your request does not link to a valid', 'It looks like this subreddit either doesn\'t exist or has been recently purged'])
const rejectedBannedInSub = groupFilter('you\'re currently banned from')
const rejectedNotASub = groupFilter('is a user profile. User')

const knownIds = new Set([
  ...autoreply.ids,
  ...granted.ids,
  ...rejectedCommunityRecentlyBanned.ids,
  ...rejectedUserNotVerifiedEmail.ids,
  ...rejectedByAdmin.ids,
  ...rejectedNotEligible.ids,
  ...rejectedActiveMods.ids,
  ...rejectedSubViolatedRedditPolicies.ids,
  ...rejectedByUserCriteria.ids,
  ...rejectedNoAutoreply.ids,
  ...rejectedRepeatRequest.ids,
  ...topModRemovalGranted.ids,
  ...topModRemovalAutoreply.ids,
  ...rejectedTooManyRequestsForSub.ids,
  ...topModRemovedRejectedAlreadyTopMod.ids,
  ...rejectedInvalidLink.ids,
  ...rejectedBannedInSub.ids,
  ...rejectedNotASub.ids,
])
const unknown = requestBotComments.filter(c => {
  return !knownIds.has(c.id)
})
if (unknown.length > 0) {
  console.log('Unknown comments:', unknown.length)
  console.log(unknown.map(c => c.body))
}

const grantedPostIds = new Set<string>()
const timeBetweenRequestAndGrant = granted.comments.map(grantedComment => {
  if(grantedPostIds.has(grantedComment.postId)) {
    console.error('Multiple grants for post', grantedComment.postId)
  }
  grantedPostIds.add(grantedComment.postId)
  const autorepliesToPost = autoreply.comments.filter(c => c.postId === grantedComment.postId)
  if (autorepliesToPost.length === 0) {
    console.error('No autoreply for granted post', grantedComment.postId)
    return null
  } else if(autorepliesToPost.length > 1) {
    console.error('Multiple autoreplies for granted post', grantedComment.postId)
    return null
  }
  const autoreplyToPost = autorepliesToPost[0]
  const time = grantedComment.created - autoreplyToPost.created
  return time
}).filter(t => t !== null)

const timeBetweenRequestAndGrantWithoutInsta = timeBetweenRequestAndGrant.filter(t => t > 10000)
const timeBetweenRequestAndGrantMedWithoutInsta = timeBetweenRequestAndGrantWithoutInsta.sort((a, b) => a - b)[Math.floor(timeBetweenRequestAndGrantWithoutInsta.length / 2)]
const timeBetweenRequestAndGrantAvgWithoutInsta = timeBetweenRequestAndGrantWithoutInsta.reduce((a, b) => a + b, 0) / timeBetweenRequestAndGrantWithoutInsta.length

const adminRejectedPostIds = new Set<string>()
const timeBetweenRequestAndReject = rejectedByAdmin.comments.map(rejectedComment => {
  if (adminRejectedPostIds.has(rejectedComment.postId)) {
    console.error('Multiple rejects for post', rejectedComment.postId)
  }
  adminRejectedPostIds.add(rejectedComment.postId)
  const autorepliesToPost = autoreply.comments.filter(c => c.postId === rejectedComment.postId)
  if (autorepliesToPost.length === 0) {
    console.error('No autoreply for rejected post', rejectedComment.postId)
    return null
  } else if (autorepliesToPost.length > 1) {
    console.error('Multiple autoreplies for rejected post', rejectedComment.postId)
    return null
  }
  const autoreplyToPost = autorepliesToPost[0]
  const time = rejectedComment.created - autoreplyToPost.created
  return time
}).filter(t => t !== null)
const timeBetweenRequestAndAdminRejectAvg = timeBetweenRequestAndReject.reduce((a, b) => a + b, 0) / timeBetweenRequestAndReject.length

const timeBetweenRequestAndAdminDecision = [...rejectedByAdmin.comments, ...granted.comments].map(decisionComment => {
  const autorepliesToPost = autoreply.comments.filter(c => c.postId === decisionComment.postId)
  if (autorepliesToPost.length === 0) {
    return null
  } else if (autorepliesToPost.length > 1) {
    return null
  }
  const autoreplyToPost = autorepliesToPost[0]
  const time = decisionComment.created - autoreplyToPost.created
  return time
}).filter(t => t !== null).filter(t => t > 10000)
const timeBetweenRequestAndAdminDecisionAvg = timeBetweenRequestAndAdminDecision.reduce((a, b) => a + b, 0) / timeBetweenRequestAndAdminDecision.length

console.log(Object.entries({
  requestBotComments: requestBotComments.length,
  autoreply: autoreply.ids.length,
  granted: granted.ids.length,
  rejectedCommunityRecentlyBanned: rejectedCommunityRecentlyBanned.ids.length,
  rejectedUserNotVerifiedEmail: rejectedUserNotVerifiedEmail.ids.length,
  rejectedByAdmin: rejectedByAdmin.ids.length,
  rejectedNotEligible: rejectedNotEligible.ids.length,
  rejectedActiveMods: rejectedActiveMods.ids.length,
  rejectedSubViolatedRedditPolicies: rejectedSubViolatedRedditPolicies.ids.length,
  rejectedByUserCriteria: rejectedByUserCriteria.ids.length,
  rejectedNoAutoreply: rejectedNoAutoreply.ids.length,
  rejectedRepeatRequest: rejectedRepeatRequest.ids.length,
  rejectedTooManyRequestsForSub: rejectedTooManyRequestsForSub.ids.length,
  rejectedInvalidLink: rejectedInvalidLink.ids.length,
  rejectedBannedInSub: rejectedBannedInSub.ids.length,
  topModRemovalAutoreply: topModRemovalAutoreply.ids.length,
  topModRemovalGranted: topModRemovalGranted.ids.length,
  topModRemovedRejectedAlreadyTopMod: topModRemovedRejectedAlreadyTopMod.ids.length,
  timeBetweenRequestAndAdminDecisionAvg: Math.floor(timeBetweenRequestAndAdminDecisionAvg),
  timeBetweenRequestAndGrantMedWithoutInsta: Math.floor(timeBetweenRequestAndGrantMedWithoutInsta),
  timeBetweenRequestAndGrantAvgWithoutInsta: Math.floor(timeBetweenRequestAndGrantAvgWithoutInsta),
  timeBetweenRequestAndAdminRejectAvg: Math.floor(timeBetweenRequestAndAdminRejectAvg),
  instagranted: timeBetweenRequestAndGrant.filter(t => t < 10000).length,
}).map(([k, v]) => v).join('\n'))
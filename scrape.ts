import fs from 'fs/promises'
import path from 'path'

export type Comment = {
  "subreddit_id": string,
  "approved_at_utc": null | number, // idk
  "author_is_blocked": boolean
  "comment_type": null, // idk
  "edited": false | number,
  "mod_reason_by": null | string,
  "banned_by": null // idk
  "ups": 1, // idk
  "num_reports": null, // idk
  "author_flair_type": "text", // idk
  "total_awards_received": number
  "subreddit": "redditrequest",
  "author_flair_template_id": null, // idk
  "likes": null, // idk
  "replies": "", // idk
  "user_reports": [], // idk
  "saved": false, // idk
  "id": string,
  "banned_at_utc": null | number,
  "mod_reason_title": null,  // idk
  "gilded": 0, // idk
  "archived": false,
  "collapsed_reason_code": null, // idk
  "no_follow": true, // idk
  "author": string, // author username without leading u/
  "can_mod_post": false,
  "send_replies": true,
  "parent_id": string,
  "score": 1,
  "author_fullname": string, // do not use
  "report_reasons": null, // idk
  "removal_reason": null, // idk
  "approved_by": null, // idk
  "all_awardings": [], // idk
  "body": string,
  "awarders": [], // idk
  "top_awarded_type": null, // idk
  "downs": 0,
  "author_flair_css_class": null, // idk
  "author_patreon_flair": false, // idk
  "collapsed": false, // idk
  "author_flair_richtext": [], // idk
  "is_submitter": true, // idk
  "body_html": string,
  "gildings": {},  // idk
  "collapsed_reason": null, // idk
  "associated_award": null, // idk
  "stickied": false,
  "author_premium": false,
  "can_gild": false,
  "link_id": string,
  "unrepliable_reason": null, // idk
  "author_flair_text_color": null, // idk
  "score_hidden": false,
  "permalink": string, // like this : `\/r\/redditrequest\/comments\/1hv2w2e\/requesting_ricinidok_due_to_mod_inactivity\/m5pwtp6\/`
  "subreddit_type": "public", // idk
  "locked": false,
  "name": string,
  "created": number, // unix seconds
  "author_flair_text": null, // idk
  "treatment_tags": [],
  "created_utc": 1736181805.0, // unix seconds
  "subreddit_name_prefixed": "r\/redditrequest",
  "controversiality": 0,
  "author_flair_background_color": null, // idk
  "collapsed_because_crowd_control": null, // idk
  "mod_reports": [], // idk
  "mod_note": null, // idk
  "distinguished": null // idk
}

export type CommentSaved = Pick<Comment, 'id' | 'author' | 'score' | 'body' | 'created' | 'permalink'>

let comments: CommentSaved[] = []

async function scrape(since: Date, beforeDate?: Date) {
  let lastFetched = 0
  let sinceSec = Math.floor(since.getTime() / 1000)
  let before = Math.floor((beforeDate?.getTime() ?? Date.now()) / 1000)
  do {
    console.log('Scraping since ' + Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'full' }).format(since), 'until', Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'full' }).format(new Date(before * 1000)), 'that is', before)
    const req = await fetch('https://api.pullpush.io/reddit/comment/search?' + new URLSearchParams({
      html_decode: 'False',
      subreddit: 'redditrequest',
      since: String(sinceSec),
      until: String(before),
      size: '100'
    }))
    if(!req.ok) {
      throw new Error('Failed to fetch comments. Stopped at ' + before + ' ' + await req.text())
    }
    const res = await req.json() as { data: Comment[], error: string, metadata: { total: number } }
    if (res.error) {
      throw new Error('Failed to fetch comments. Stopped at ' + before)
    }
    comments.push(...res.data.map(c => ({
      id: c.id,
      author: c.author,
      score: c.score,
      body: c.body,
      created: c.created,
      permalink: c.permalink
    })))
    before = res.data[res.data.length - 1].created_utc
    lastFetched = res.data.length
    console.log('Fetched', lastFetched, 'comments. Total (?):', res.metadata?.total)
    await fs.writeFile(path.join(__dirname, 'comments.json'), JSON.stringify(comments, null, 2))
  } while(lastFetched > 0)
}

try {
  await scrape(new Date(1704052800000), new Date(1717120957000))
} catch(e) {
  console.error(e)
}
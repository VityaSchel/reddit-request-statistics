# r/redditrequest statistics

Approval, rejection and decision time statistics for Adopt a subreddit program by Reddit.

- [r/redditrequest statistics](#rredditrequest-statistics)
- [Charts](#charts)
  - [26.12.24 - 06.01.25](#261224---060125)
  - [22.11.24 - 26.12.24](#221124---261224)
  - [22.10.24 - 22.11.24](#221024---221124)
  - [01.10.24 - 22.10.24](#011024---221024)
  - [09/24](#0924)
  - [08/24](#0824)
  - [07/24](#0724)
  - [06/24](#0624)
- [How to run](#how-to-run)
- [License](#license)

This repository includes:
- Scraper script that uses pullpush API for getting data from r/redditrequest
- Analys script that counts comments from u/request_bot
- That script counts the following:
  - Instant moderation request grants by bot
  - Moderation rejections by bot for the following reasons:
    - Requester is banned in the requesting community
    - Invalid link in post
    - Community is already in the queue
    - Request was already posted by the same requester less than 15 days ago
    - Requester didn't reply to bot
    - Requester has not met criteria
    - Community violated Reddit's policies
    - Community was recently banned
    - Community has active mods
    - Community is not eligible for moderation requests
    - Requester has not verified email
  - Manual request rejections by admins (for whatever reason they have in mind)
- Along with a formatted spreadsheet with data from 01.06.2024 to 06.01.2025. [File](./r_redditrequest_statistics_06.24-01.25.xlsx). [Uploaded to Google Spreadsheets](https://docs.google.com/spreadsheets/d/1uYuCc7a_gfap_bEi7dKUnseGXi9lhdF6tKu1XiscaHs/edit?usp=sharing). I recommend opening it with Google Spreadsheets, not Microsoft Excel.
- Scraper was tested on comments from 01.06.2024 and to 06.01.2025, may require adjustments in text matching for other ranges

# Charts

[Google Spreadsheets](https://docs.google.com/spreadsheets/d/1uYuCc7a_gfap_bEi7dKUnseGXi9lhdF6tKu1XiscaHs/edit?usp=sharing)

## 26.12.24 - 06.01.25

## 22.11.24 - 26.12.24

## 22.10.24 - 22.11.24

## 01.10.24 - 22.10.24

## 09/24

## 08/24

## 07/24

## 06/24

# How to run

1. Clone repository
2. Adjust values in **scrape.ts** file: on line 116 adjust dates: after and before. Script will parse starting from before and sorted in descending order to older posts, so you need to change second argument (before) each time you restart script.
3. Run scrape.ts with [Bun](https://bun.sh): `bun scrape.ts`
4. After that, comments.json will be generated, use `bun analys.ts` and you will get list of values needed to be inserted into spreadsheets starting from the very first row. Just copy and paste them into B1 cell and they will populate needed rows. Do not change order of output in analys.ts or it will mess up data in spreadsheets. You might get errors like `No autoreply for`. You can ignore them, as there will be data cutoffs where you scraped result of request, but not initial posting of it.

# License

[MIT](./LICENSE.md)
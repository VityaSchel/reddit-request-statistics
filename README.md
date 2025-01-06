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

<img width="782" alt="изображение" src="https://github.com/user-attachments/assets/e33e602f-fb56-43a6-adb2-fc16d6a83667" />

<img width="782" alt="изображение" src="https://github.com/user-attachments/assets/d9138f86-3842-4274-8370-4a898a02343b" />

<img width="639" alt="изображение" src="https://github.com/user-attachments/assets/6154d32e-0434-41f5-8baf-e8b5151f5113" />

|||
| --- | --- |
| Granted | 298 |
| Community was recently banned | 33 |
| User has not verified email | 23 |
| Admin decision | 173 |
| Not eligible community | 25 |
| Community has active mods | 142 |
| Community violated Reddit policies | 7 |
| User has not met criteria | 118 |
| User didn't reply to bot | 37 |
| Repeated request | 114 |
| Community already in queue | 11 |
| Invalid link in post | 16 |
| User is banned in the requested sub | 3 |
| Top mod requests during period | 56 |
| Top mod removal granted | 10 |
| User is already top mod | 22 |
| Time between request and admin decision | 404 058 |
| Time between request and granted median without instagrants | 390 794 |
| Time between request and granted average without instagrants | 399 406 |
| Time between request and admin reject | 337 762 |
| Instantly granted | 167 |
| Not instantly granted | 131 |


## 22.11.24 - 26.12.24

<img width="781" alt="изображение" src="https://github.com/user-attachments/assets/93c9d255-2856-4e00-86c1-ba4cf8a7945e" />

<img width="776" alt="изображение" src="https://github.com/user-attachments/assets/6de71291-b04c-4d0b-a303-8a565db861ff" />

<img width="638" alt="изображение" src="https://github.com/user-attachments/assets/dab54bd9-46c7-4abb-be01-694543c16bfe" />

|||
| --- | --- |
| Requests made during period | 3 429 |
| Granted | 778 |
| Community was recently banned | 109 |
| User has not verified email | 86 |
| Admin decision | 697 |
| Not eligible community | 13 |
| Community has active mods | 376 |
| Community violated Reddit policies | 33 |
| User has not met criteria | 380 |
| User didn't reply to bot | 101 |
| Repeated request | 387 |
| Community already in queue | 78 |
| Invalid link in post | 53 |
| User is banned in the requested sub | 9 |
| Top mod requests during period | 222 |
| Top mod removal granted | 28 |
| User is already top mod | 81 |
| Time between request and admin decision | 448 508 |
| Time between request and granted median without instagrants | 440 843 |
| Time between request and granted average without instagrants | 456 569 |
| Time between request and admin reject | 384 977 |
| Instantly granted | 519 |
| Not instantly granted | 259 |

## 22.10.24 - 22.11.24

<img width="776" alt="изображение" src="https://github.com/user-attachments/assets/113e1096-9d86-4254-81c5-8fc6ee94d440" />

<img width="775" alt="изображение" src="https://github.com/user-attachments/assets/d7e76506-f403-4d41-aee1-dd366319bc81" />

<img width="636" alt="изображение" src="https://github.com/user-attachments/assets/90010c3b-ec60-40c8-8a1c-f3f46c20f0a5" />

|||
| --- | --- |
|Requests made during period|3 096|
| Granted | 556 |
| Community was recently banned | 85 |
| User has not verified email | 61 |
| Admin decision | 568 |
| Not eligible community | 19 |
| Community has active mods | 391 |
| Community violated Reddit policies | 14 |
| User has not met criteria | 367 |
| User didn't reply to bot | 91 |
| Repeated request | 356 |
| Community already in queue | 5 |
| Invalid link in post | 51 |
| User is banned in the requested sub | 10 |
| Top mod requests during period | 233 |
| Top mod removal granted | 18 |
| User is already top mod | 83 |
| Time between request and admin decision | 471 832 |
| Time between request and granted median without instagrants | 479 542 |
| Time between request and granted average without instagrants | 496 114 |
| Time between request and admin reject | 370 649 |
| Instantly granted | 474 |
| Not instantly granted | 82 |

## 01.10.24 - 22.10.24

<img width="781" alt="изображение" src="https://github.com/user-attachments/assets/7f16db48-0179-474a-ab37-816a65a1cd67" />

<img width="780" alt="изображение" src="https://github.com/user-attachments/assets/9ec989fb-deaa-4f4f-a4ff-cdf42d366214" />

<img width="639" alt="изображение" src="https://github.com/user-attachments/assets/7877e6af-eccd-49ce-a213-3d49d13e2f2f" />

|||
| --- | --- |
|Requests made during period|2 644|
| Granted | 416 |
| Community was recently banned | 67 |
| User has not verified email | 77 |
| Admin decision | 449 |
| Not eligible community | 22 |
| Community has active mods | 336 |
| Community violated Reddit policies | 21 |
| User has not met criteria | 319 |
| User didn't reply to bot | 72 |
| Repeated request | 335 |
| Community already in queue | 23 |
| Invalid link in post | 34 |
| User is banned in the requested sub | 3 |
| Top mod requests during period | 175 |
| Top mod removal granted | 40 |
| User is already top mod | 68 |
| Time between request and admin decision | 443 412 |
| Time between request and admin reject | 330 483 |
| Instantly granted | 415 |
| Not instantly granted | 1 |

## 09/24

<img width="778" alt="изображение" src="https://github.com/user-attachments/assets/b83fc1f2-5b61-4e98-a35f-e7abc8ab30e0" />

<img width="775" alt="изображение" src="https://github.com/user-attachments/assets/c770f1d9-5770-4bb2-818b-916859df2a9c" />

<img width="637" alt="изображение" src="https://github.com/user-attachments/assets/e495b296-ba8b-475c-93d9-06223ce3674c" />

|||
| --- | --- |
|Requests made during period|4 406|
| Granted | 854 |
| Community was recently banned | 107 |
| User has not verified email | 114 |
| Admin decision | 564 |
| Not eligible community | 39 |
| Community has active mods | 579 |
| Community violated Reddit policies | 34 |
| User has not met criteria | 627 |
| User didn't reply to bot | 103 |
| Repeated request | 532 |
| Community already in queue | 27 |
| Invalid link in post | 81 |
| User is banned in the requested sub | 5 |
| Top mod requests during period | 515 |
| Top mod removal granted | 20 |
| User is already top mod | 349 |
| Time between request and admin decision | 468 396 |
| Time between request and granted median without instagrants | 582 734 |
| Time between request and granted average without instagrants | 589 440 |
| Time between request and admin reject | 359 313 |
| Instantly granted | 845 |
| Not instantly granted | 9 |

## 08/24

<img width="780" alt="изображение" src="https://github.com/user-attachments/assets/eacbc994-90a9-4e39-bdbf-bbaa2b0e6f84" />

<img width="778" alt="изображение" src="https://github.com/user-attachments/assets/07334ead-460f-466e-bf01-f992dfc8cdae" />

<img width="638" alt="изображение" src="https://github.com/user-attachments/assets/de1b0f32-fd95-45d8-9868-43c9198ac108" />

| | |
|-|-|
|Requests made during period|4 841|
|Granted|849|
|Community was recently banned|112|
|User has not verified email|140|
|Admin decision|588|
|Not eligible community|72|
|Community has active mods|610|
|Community violated Reddit policies|22|
|User has not met criteria|774|
|User didn't reply to bot|123|
|Repeated request|622|
|Community already in queue|32|
|Invalid link in post|69|
|User is banned in the requested sub|12|
|Top mod requests during period|610|
|Top mod removal granted|26|
|User is already top mod|409|
|Time between request and admin decision|471 086|
|Time between request and granted median without instagrants|420 589|
|Time between request and granted average without instagrants|436 530|
|Time between request and admin reject|388 362|
|Instantly granted|826|
|Not instantly granted|23|

## 07/24

<img width="779" alt="изображение" src="https://github.com/user-attachments/assets/87608596-2d64-40ae-9c86-d3a7cf360ef9" />

<img width="778" alt="изображение" src="https://github.com/user-attachments/assets/bb0416a4-25e9-4528-a2a6-a6675803c2e3" />

<img width="637" alt="изображение" src="https://github.com/user-attachments/assets/a32d3422-abe6-4d44-a802-0e68921e227d" />

| | |
|-|-|
|Requests made during period|3 415|
|Granted|676|
|Community was recently banned|72|
|User has not verified email|105|
|Admin decision|437|
|Not eligible community|18|
|Community has active mods|473|
|Community violated Reddit policies|30|
|User has not met criteria|510|
|User didn't reply to bot|102|
|Repeated request|400|
|Community already in queue|3|
|Invalid link in post|51|
|User is banned in the requested sub|4|
|Top mod requests during period|462|
|Top mod removal granted|30|
|User is already top mod|283|
|Time between request and admin decision|445 201|
|Time between request and granted median without instagrants|340 524|
|Time between request and granted average without instagrants|340 524|
|Time between request and admin reject|368 996|
|Instantly granted|673|
|Not instantly granted|3|

## 06/24

<img width="780" alt="изображение" src="https://github.com/user-attachments/assets/7c7d603d-a43c-4508-bb4d-865ca4d2087a" />

<img width="778" alt="изображение" src="https://github.com/user-attachments/assets/af3e3052-4475-4315-a2e5-bb7c14775be7" />

<img width="637" alt="изображение" src="https://github.com/user-attachments/assets/f0ad417e-8339-4404-9393-fd6842ddf5cb" />

| | |
|-|-|
|Requests made during period|3 752|
|Granted|629|
|Community was recently banned|108|
|User has not verified email|129|
|Admin decision|339|
|Not eligible community|52|
|Community has active mods|515|
|Community violated Reddit policies|32|
|User has not met criteria|615|
|User didn't reply to bot|94|
|Repeated request|444|
|Community already in queue|4|
|Invalid link in post|68|
|User is banned in the requested sub|9|
|Top mod requests during period|558|
|Top mod removal granted|31|
|User is already top mod|326|
|Time between request and admin decision|462 080|
|Time between request and granted median without instagrants|575 075|
|Time between request and granted average without instagrants|453 430|
|Time between request and admin reject|316 511|
|Instantly granted|626|
|Not instantly granted|3|

# How to run

1. Clone repository
2. Adjust values in **scrape.ts** file: on line 116 adjust dates: after and before. Script will parse starting from before and sorted in descending order to older posts, so you need to change second argument (before) each time you restart script.
3. Run scrape.ts with [Bun](https://bun.sh): `bun scrape.ts`
4. After that, comments.json will be generated, use `bun analys.ts` and you will get list of values needed to be inserted into spreadsheets starting from the very first row. Just copy and paste them into B1 cell and they will populate needed rows. Do not change order of output in analys.ts or it will mess up data in spreadsheets. You might get errors like `No autoreply for`. You can ignore them, as there will be data cutoffs where you scraped result of request, but not initial posting of it.

# License

[MIT](./LICENSE.md)

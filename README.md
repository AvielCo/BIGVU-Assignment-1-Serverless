# BIGVU-Assignment-1

## Description

> Using AWS offline serverless to capture the screen of a given website and record it for 10 seconds.

### Installation

> In root folder:
>
> - `npm install` (that should take 2 or 3 minutes of installation)

### Requirements

> [postman](https://www.postman.com/) to send request to the server

### Execute

> 1. in root folder write in `terminal`: `serverless offline` or `sls offline` and wait for it to start (should take few seconds).
> 2. inside `postman` send a `POST` request to `localhost:3000/dev/capture` with the body: `{ "url": "https://site.com" }`

### Output

> Output will be the url of the video: `{ "file": "path/to/video.mp4" }`

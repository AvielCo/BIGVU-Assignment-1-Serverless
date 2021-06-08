# BIGVU-Assignment-1

#### for Assignment 2 [click here](https://github.com/AvielCo/BIGVU-Assignment-2)

## Description

> Using AWS offline serverless to capture the screen of a given website and record it for 10 seconds.

### Installation

> In root folder:
>
> - `npm install` (that should take few minutes to install).  
>   packages that will be installed:
>   1. [express](https://www.npmjs.com/package/express)
>   2. [serverless-http](https://www.npmjs.com/package/serverless-http)
>   3. [@ffmpeg-installer/ffmpeg](https://www.npmjs.com/package/@ffmpeg-installer/ffmpeg)
>   4. [@ffprobe-installer/ffprobe](https://www.npmjs.com/package/@ffprobe-installer/ffprobe)
>   5. [fluent-ffmpeg](https://www.npmjs.com/package/fluent-ffmpeg)
>   6. [puppeteer](https://www.npmjs.com/package/puppeteer)
>   7. [videoshow](https://www.npmjs.com/package/videoshow)
>   8. [serverless](https://www.npmjs.com/package/serverless)
>   9. [serverless-offline](https://www.npmjs.com/package/serverless-offline)

### Requirements

> [postman](https://www.postman.com/) to send request to the server

### Execute

> 1. in root folder write in `terminal`: `npm start` and wait for it to start (should take few seconds).
> 2. inside `postman` send a `POST` request to `localhost:3000/dev/capture` with the body: `{ "url": "https://site.com" }`;  
> please make sure that you include the header: `Content-Type` with the value `application/json`  

>Body example:  
![image](https://user-images.githubusercontent.com/38301471/120820288-13d09800-c55d-11eb-9d0f-de4fb775bf3a.png)

>Headers example:  
![image](https://user-images.githubusercontent.com/38301471/120820420-306cd000-c55d-11eb-930c-952b6b29e6df.png)

### Output

> Output will be the url of the video: `{ "file": "path/to/video.mp4" }`  
![image](https://user-images.githubusercontent.com/38301471/120795816-a57edc00-c542-11eb-8333-cb9a4984fa81.png)


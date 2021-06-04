const serverless = require("serverless-http");
const express = require("express");
const captureScreenShot = require("./capture_screen_video/screenshot");
const captureVideo = require("./capture_screen_video/video");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/capture", (req, res, next) => {
  try {
    const { url } = req.body;
    console.log("Taking screenshot... ");
    console.time(`screenshot`); // init timer
    captureScreenShot(url)
      .then(() => {
        console.timeEnd(`screenshot`); // end timer
        console.log("Took screenshot successfully.");

        console.log("Creating video...");
        console.time(`video`); // init timer
        captureVideo()
          .then((output) => {
            console.timeEnd(`video`); // end timer
            console.log("Video created successfully.");
            res.status(200).send(output);
          })
          .catch(() => next(err));
      })
      .catch((err) => next(err));
  } catch (err) {
    console.timeEnd(`screenshot`);
    console.timeEnd(`video`);
    next(err);
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);

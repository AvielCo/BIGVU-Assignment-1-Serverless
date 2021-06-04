const fs = require("fs");
const path = require("path");
const videoshow = require("videoshow"); // making a slideshow of images
const ffmpeg = require("fluent-ffmpeg"); // required for videoshow to work
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path; // take the path of the ffmpeg
const ffprobePath = require("@ffprobe-installer/ffprobe").path; // take the path of the ffprobe

ffmpeg.setFfmpegPath(ffmpegPath); // set path of ffmpeg
ffmpeg.setFfprobePath(ffprobePath); // set path of ffprobe

videoshow.ffmpeg.setFfmpegPath(ffmpegPath); // set path of ffmpeg

const VIDEO_OPTIONS = {
  fps: 10, // frames per seconds
  loop: 10, // amount of time to present the image
  transition: false, // transition at the start and ending of the video
  videoBitrate: 1024,
  videoCodec: "libx264",
  size: "1920x?", // size of the video
  format: "mp4", // format to save
};

module.exports = () =>
  new Promise((resolve, reject) => {
    try {
      videoshow([`screenshot.jpg`], VIDEO_OPTIONS) // https://ffmpeg.org/download.html
        .save(`video.mp4`) // name of the video file; will be saved in the same dir as `server.js`
        .on("error", (err, stdout, stderr) => {
          // enter here when error occures.
          console.error("Error:", err);
          console.error("ffmpeg stderr:", stderr);

          reject(err); // send a rejection
        })
        .on("end", (videoFileName) => {
          // enter here when theres no error
          const absoluteFilePath = path.resolve(videoFileName); // take the absolute path of the video file
          const output = JSON.stringify({ file: absoluteFilePath }); // convert to JSON file
          fs.writeFileSync("output.json", output); // save as JSON file

          resolve(output); // send a resolve
        });
    } catch (err) {
      reject(err);
      console.log(err);
    }
  });

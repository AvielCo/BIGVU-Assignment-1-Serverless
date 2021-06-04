const puppeteer = require("puppeteer"); // using this to capture screenshot of specific website

// function that uses url to capture screenshot of the url.
module.exports = async (url) => {
  try {
    const browser = await puppeteer.launch(); // init browser
    const page = await browser.newPage(); // init page
    await page.goto(url); // redirect page to url
    await page.screenshot({ path: `screenshot.jpg`, fullPage: true }); // take screenshot; will be saved in the same dir as `server.js` named: `screenshot.jpg`
    browser.close(); // close browser
  } catch (err) {
    console.log(err);
  }
};

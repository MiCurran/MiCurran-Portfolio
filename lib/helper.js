const chromium = require('chrome-aws-lambda');

export const getImageBase64 = async (url) => {
    let browser = await chromium.puppeteer.launch();
    let page = await browser.newPage();
    await page.goto(url);
    let image = await page.screenshot({ encoding: "base64" });
    await browser.close();
    return image;
  };
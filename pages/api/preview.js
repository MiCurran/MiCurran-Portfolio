import chromium from 'chrome-aws-lambda';

export default async function handler(req, res) {
  try {
    let { url } = req.query;

    let image = await getImageBase64(url);

    res.status(200).json({
      image,
    });
  } catch (error) {
    console.log(JSON.stringify(error))
    res.status(200).json({
      error: JSON.stringify(error),
    });
  }
}

let getImageBase64 = async (url) => {
  let image = null;
  let browser = null;

  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });

    let page = await browser.newPage();

    await page.goto(url || 'https://example.com');
    image = await page.screenshot({ encoding: "base64" });
    await browser.close();
  } catch (error) {
    return callback(error);
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }

  return image;
  //let browser = await puppeteer.launch();
/*   let page = await browser.newPage();
  await page.goto(url);
  await browser.close();
  return image; */
};

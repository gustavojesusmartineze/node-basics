const puppeteer = require('puppeteer');

// Auto executable function.
(async () => {
  console.log('launching browser');
  // const browser = await puppeteer.launch({ headless: false });
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  var title1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    // this is logged on browser.
    console.log(h1.innerHTML);
    return h1.innerHTML;
  });
  console.log(title1);

  console.log('Closing browser');
  await browser.close();
})();
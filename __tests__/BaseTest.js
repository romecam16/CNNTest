const puppeteer = require('puppeteer');

beforeEach(() => {
    puppeteer.launch({headless: false}).then(async browser => {
        const page = await browser.newPage();
        await page.goto('http://www.cnn.com');
    });
  });

  afterEach(() => {
    await browser.close();
  });
  

  
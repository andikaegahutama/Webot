const puppeteer = require("puppeteer");
const config = require("../../config/config");
const { performLogin } = require("../authentication/login");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [`--window-size=1920,1080`],
    devtools: true,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 700 });

  await performLogin(page);

  await page.waitForSelector(config.shippingPage.menuShipping);
  await page.click(config.shippingPage.menuShipping);

  await page.waitForSelector(config.shippingPage.edxShipping);
  await page.click(config.shippingPage.edxShipping);

  await page.waitForSelector(config.shippingPage.locationInput);
  await page.click(config.shippingPage.locationInput);

  await page.type(config.shippingPage.locationInput, "Cilacap");

  await page.waitForSelector(config.shippingPage.locationEnter);
  await page.click(config.shippingPage.locationEnter);

  await page.waitForSelector(config.shippingPage.locationInput);
  await page.click(config.shippingPage.locationInput);

  await page.waitForSelector(config.shippingPage.locationSelect);
  await page.click(config.shippingPage.locationSelect);

  await page.waitForSelector(config.shippingPage.addProduct);
  await page.click(config.shippingPage.addProduct);

  await page.waitForSelector(config.shippingPage.productList);
  await page.click(config.shippingPage.productList);

  await page.waitForSelector(config.shippingPage.productSelect);
  await page.click(config.shippingPage.productSelect);

  await page.waitForSelector(config.shippingPage.quantityList);
  await page.click(config.shippingPage.quantityList);
  await page.type(config.shippingPage.quantityList, "1");

  await page.waitForSelector(config.shippingPage.addProductModal);
  await page.click(config.shippingPage.addProductModal);

  await page.waitForSelector(config.shippingPage.submitButton);
  await page.click(config.shippingPage.submitButton);
})();

const puppeteer = require("puppeteer");
const config = require("../../config/config");
const { login } = require("../../utils/loginUtils");

(async () => {
  const browser = await puppeteer.launch(config.browserConfig);
  const page = await browser.newPage();

  await page.setViewport(config.viewport);

  await login(page, "cs");

  await page.waitForSelector(config.shippingPage.menuShipping);
  await page.click(config.shippingPage.menuShipping);

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

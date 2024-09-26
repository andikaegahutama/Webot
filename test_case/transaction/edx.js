const puppeteer = require("puppeteer");
const config = require("../../config/config");
const {
  createTemplateEDX,
  createTemplateEDXKodeUnik,
} = require("../../utils/utils");
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

  await page.waitForSelector(config.transactionPage.menuTransaction);
  await page.click(config.transactionPage.menuTransaction);

  await page.waitForSelector(config.transactionPage.tabEDX);
  await page.click(config.transactionPage.tabEDX);

  const textAreaTemplate = await page.waitForSelector(
    config.transactionPage.textAreaTemplate
  );
  await page.focus(config.transactionPage.textAreaTemplate);
  await page.keyboard.down("Control");
  await page.keyboard.press("A");
  await page.keyboard.up("Control");
  await page.keyboard.press("Backspace");
  await textAreaTemplate.type(createTemplateEDXKodeUnik());

  await page.waitForSelector(config.transactionPage.submitTemplate);
  await page.click(config.transactionPage.submitTemplate);

  setTimeout(async () => {
    await page.waitForSelector(config.transactionPage.popupInsertDatabase);
    await page.click(config.transactionPage.popupInsertDatabase);
  }, 4000);
  setTimeout(async () => {
    await page.waitForSelector(config.transactionPage.popupInsertDatabase);
    await page.click(config.transactionPage.popupInsertDatabase);
  }, 5000);

  setTimeout(async () => {
    await page.waitForSelector(config.transactionPage.kodeUnikBank);
    await page.click(config.transactionPage.kodeUnikBank);
  }, 6000);
  setTimeout(async () => {
    await page.waitForSelector(config.transactionPage.warehouseList);
    await page.click(config.transactionPage.warehouseList);
    await page.waitForSelector(config.transactionPage.warehouseSelect);
    await page.click(config.transactionPage.warehouseSelect);
  }, 7000);
  setTimeout(async () => {
    await page.waitForSelector(config.transactionPage.courirList);
    await page.click(config.transactionPage.courirList);
    await page.waitForSelector(config.transactionPage.courirSelect);
    await page.click(config.transactionPage.courirSelect);
  }, 8000);
  setTimeout(async () => {
    await page.waitForSelector(config.transactionPage.courirList);
    await page.click(config.transactionPage.courirList);
    await page.waitForSelector(config.transactionPage.courirSelect);
    await page.click(config.transactionPage.courirSelect);
  }, 9000);
  setTimeout(async () => {
    await page.waitForSelector(config.transactionPage.reviewButton);
    await page.click(config.transactionPage.reviewButton);
  }, 29000);
  setTimeout(async () => {
    await page.waitForSelector(config.transactionPage.submitButton);
    await page.click(config.transactionPage.submitButton);
  }, 30000);
  setTimeout(async () => {
    await browser.close();
  }, 45000);
})();

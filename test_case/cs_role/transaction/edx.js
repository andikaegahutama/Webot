const puppeteer = require("puppeteer");
const config = require("../../../config/config");
const { createTemplate, createTemplateEDM } = require("../../../utils/utils");
const { error } = require("selenium-webdriver");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [`--window-size=1920,1080`],
    devtools: true,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 700 });
  await page.goto(`${config.baseUrl}/login`);
  await page.waitForSelector(config.loginPage.emailField);
  await page.type(config.loginPage.emailField, config.credentialCs.email);
  await page.waitForSelector(config.loginPage.passwordField);
  await page.type(config.loginPage.passwordField, config.credentialCs.password);
  await page.waitForSelector(config.loginPage.eyeButton);
  await page.click(config.loginPage.eyeButton);
  await page.click(config.loginPage.loginButton);
  await page.waitForNavigation();

  await page.waitForSelector(config.transactionPage.menuTransaction);
  await page.click(config.transactionPage.menuTransaction);

  const textAreaTemplate = await page.waitForSelector(
    config.transactionPage.textAreaTemplate
  );
  await page.focus(config.transactionPage.textAreaTemplate);
  await page.keyboard.down("Control");
  await page.keyboard.press("A");
  await page.keyboard.up("Control");
  await page.keyboard.press("Backspace");
  await textAreaTemplate.type(createTemplateEDM());

  await page.waitForSelector(config.transactionPage.submitTemplate);
  await page.click(config.transactionPage.submitTemplate);

  await page.waitForSelector(config.transactionPage.popupInsertDatabase);
  await page.click(config.transactionPage.popupInsertDatabase);

  await page.waitForSelector(config.transactionPage.popupInsertDatabase);
  await page.click(config.transactionPage.popupInsertDatabase);

  await page.waitForSelector(config.transactionPage.warehouseList);
  await page.click(config.transactionPage.warehouseList);
  await page.waitForSelector(config.transactionPage.warehouseSelect);
  await page.click(config.transactionPage.warehouseSelect);
  await page.waitForSelector(config.transactionPage.courirList);
  await page.click(config.transactionPage.courirList);
  await page.waitForSelector(config.transactionPage.courirSelect);
  await page.click(config.transactionPage.courirSelect);
})();

const puppeteer = require("puppeteer");
const config = require("../../../config/config");

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

  await page.waitForSelector(config.transactionPage.tabEDX);
  await page.click(config.transactionPage.tabEDX);

  const templateEdx = await page.waitForSelector(
    config.transactionPage.textAreaTemplate
  );
  await templateEdx.click();
  await page.keyboard.down("ControlLeft");
  await page.keyboard.press("A");
  await page.keyboard.press("Backspace");
  const fillTemplate = await page.waitForSelector(
    config.transactionPage.textAreaTemplate
  );
  await fillTemplate.click();
  await page.type(config.transactionPage.templateEDX);
})();

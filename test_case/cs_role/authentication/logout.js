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
  await page.click(config.loginPage.loginButton);
  await page.waitForNavigation();
  await page.waitForSelector(config.profilePage.menuProfile);
  await page.click(config.profilePage.menuProfile);
  await page.waitForSelector(config.profilePage.logoutButton);
  await page.click(config.profilePage.logoutButton);
  await page.waitForSelector(config.profilePage.logoutYesButton);
  await page.click(config.profilePage.logoutYesButton);
})();

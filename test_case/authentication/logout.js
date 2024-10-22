const puppeteer = require("puppeteer");
const { login } = require("../../utils/loginUtils");
const config = require("../../config/config");

(async () => {
  const browser = await puppeteer.launch(config.browserConfig);
  const page = await browser.newPage();

  await page.setViewport(config.viewport);

  await login(page, "cs");

  await page.waitForSelector(config.profilePage.menuProfile);
  await page.click(config.profilePage.menuProfile);

  await page.waitForSelector(config.profilePage.logoutButton);
  await page.click(config.profilePage.logoutButton);

  await page.waitForSelector(config.profilePage.logoutYesButton);
  await page.click(config.profilePage.logoutYesButton);
})();

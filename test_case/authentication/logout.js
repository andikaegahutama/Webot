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

  await page.waitForSelector(config.profilePage.menuProfile);
  await page.click(config.profilePage.menuProfile);

  await page.waitForSelector(config.profilePage.logoutButton);
  await page.click(config.profilePage.logoutButton);

  await page.waitForSelector(config.profilePage.logoutYesButton);
  await page.click(config.profilePage.logoutYesButton);
})();

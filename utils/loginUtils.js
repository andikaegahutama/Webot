const config = require("../config/config");

async function login(page, role = "cs") {
  const credentials = config[role];

  await page.goto(`${config.baseUrl}/login`);

  await page.waitForSelector(config.loginPage.emailField);
  await page.type(config.loginPage.emailField, credentials.email);

  await page.waitForSelector(config.loginPage.passwordField);
  await page.type(config.loginPage.passwordField, credentials.password);

  await page.waitForSelector(config.loginPage.eyeButton);
  await page.click(config.loginPage.eyeButton);

  await page.click(config.loginPage.loginButton);

  await page.waitForNavigation();
}

module.exports = { login };

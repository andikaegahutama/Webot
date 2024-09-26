const config = require("../../config/config");

async function performLogin(page) {
  await page.goto(`${config.baseUrl}/login`);

  await page.waitForSelector(config.loginPage.emailField);
  await page.type(config.loginPage.emailField, config.credentialCs.email);
  // await page.type(config.loginPage.emailField, config.credentialCrm.email);
  // await page.type(config.loginPage.emailField, config.credentialAdv.email);

  await page.waitForSelector(config.loginPage.passwordField);
  await page.type(config.loginPage.passwordField, config.credentialCs.password);
  // await page.type(config.loginPage.passwordField, config.credentialCrm.password);
  // await page.type(config.loginPage.passwordField, config.credentialAdv.password);

  await page.waitForSelector(config.loginPage.eyeButton);
  await page.click(config.loginPage.eyeButton);

  await page.click(config.loginPage.loginButton);

  await page.waitForNavigation();
}

module.exports = { performLogin };

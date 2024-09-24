module.exports = {
  baseUrl: "https://webot-dev.vitastore.id/v2",
  credentialAdv: {
    email: "adv.abdul@erdigma.id",
    password: "4067ef3f",
  },
  credentialCrm: {
    email: "crm.laras@erdigma.id",
    password: "0befb5bc276d",
  },
  credentialCs: {
    email: "cs.dien@erdigma.id",
    password: "lOg2vxVX",
  },
  loginPage: {
    emailField: "#auth_email",
    passwordField: "#auth_password",
    eyeButton:
      "xpath//html/body/div/div/div[1]/div[1]/div[3]/div[2]/div/button",
    forgotPassword: "xpath//html/body/div[2]/div/div[1]/div[1]/div[3]/div[3]/a",
    loginButton: "#auth_login",
  },
  transactionPage: {
    menuTransaction: "xpath//html/body/div/div/div[1]/div[9]/div[3]/div",
    tabEDX:
      "xpath//html/body/div/div/div[1]/div[6]/div/div/div/div/div[2]/div[2]/label",
    textAreaTemplate: "#weborderCreateExtractInput",
  },
  profilePage: {
    menuProfile: "xpath//html/body/div/div/div[1]/div[9]/div[5]/div",
    menuPesanan: "/html/body/div/div/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]",
    editProfile:
      "/html/body/div/div/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div",
    changePassword:
      "/html/body/div/div/div[1]/div[1]/div[1]/div[2]/div[3]/div[4]/div",
    logoutButton: "xpath//html/body/div/div/div[1]/div[1]/div[2]/button",
    logoutNoButton:
      "xpath//html/body/div/div/div[1]/div[1]/div[3]/div/div/div/div/div[2]/button[1]",
    logoutYesButton:
      "xpath//html/body/div/div/div[1]/div[1]/div[3]/div/div/div/div/div[2]/button[2]",
  },
};

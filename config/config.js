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
    submitTemplate:
      "xpath//html/body/div/div/div[1]/div[6]/div/div/div/div/div[4]/button[2]",
    popupInsertDatabase:
      "xpath//html/body/div/div/div[1]/div[5]/div/div/div/div/div/div[2]/button",
    warehouseList: "#react-select-6-input",
    warehouseSelect: "#react-select-6-option-0",
    courirList: "#react-select-7-input",
    courirSelect: "#react-select-7-option-0",
    reviewButton:
      "xpath//html/body/div/div/div[1]/div[3]/div/div[2]/div/button[2]",
    submitButton:
      "xpath//html/body/div/div/div[1]/div[3]/div/div[2]/div/button[2]",
    kodeUnikBank:
      "xpath//html/body/div/div/div[1]/div[1]/div/div[2]/div[7]/fieldset/div[1]",
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

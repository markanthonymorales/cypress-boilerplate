import config from '../elements/config';

class LoginPage {
  elements = {
    usernameInput: () => cy.get(config.email),
    passwordInput: () => cy.get(config.password),
    loginBtn: () => cy.get(config.loginBtn),
    errorMessage: () => cy.get(config.alert),
  };

  typeUsername(username) {
    return this.elements.usernameInput().clear({ force: true }).type(username).wait(1000);
  }

  typePassword(password) {
    return this.elements.passwordInput().clear({ force: true }).type(password).wait(1000);
  }

  clickLogin() {
    return this.elements.loginBtn().click({ force: true }).wait(1000).then(()=>{
      cy.screenshot();
    });
  }

  submitLogin(username,password){
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
  }
}

export const loginPage = new LoginPage();

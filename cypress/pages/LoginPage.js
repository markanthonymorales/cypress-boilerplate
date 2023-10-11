import config from '../elements/config';

class LoginPage {
  elements = {
    usernameInput: () => cy.get(config.email),
    passwordInput: () => cy.get(config.password),
    loginBtn: () => cy.get(config.loginBtn),
    errorMessage: () => cy.get(config.alert),
  };

  typeUsername(username) {
    return this.elements.usernameInput().clear({ force: true }).type(username).wait(config.minimumTimeout);
  }

  typePassword(password) {
    return this.elements.passwordInput().clear({ force: true }).type(password).wait(config.minimumTimeout);
  }

  clickLogin() {
    return this.elements.loginBtn().click({ force: true }).wait(config.maximumTimeout).then(()=>{
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

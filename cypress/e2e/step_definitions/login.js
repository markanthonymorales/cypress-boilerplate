import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage';
import data from '../../fixtures/data.json';
const { faker } = require('@faker-js/faker');

Given("A web browser is at the GED login page", () => {
    cy.visit("/").wait(1000).then(() => cy.screenshot());
});

When("A user enters the username, password, and clicks on the login button", () => {
    loginPage.submitLogin(data.email, data.password);
});

When("A user provides incorrect credentials, and clicks on the login button", () => {
  for(let i = 0; i < data.totalTests; i++) {
    const username = faker.internet.email();
    const password = faker.internet.password();
    cy.log(username);
    cy.log(password);
    loginPage.submitLogin(username, password);
  }
});

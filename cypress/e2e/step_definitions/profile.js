import {
  Given,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage'

Given("A web browser is at the profile settings page", () => {
  cy.visit("/ged/admin/profile-settings");
});

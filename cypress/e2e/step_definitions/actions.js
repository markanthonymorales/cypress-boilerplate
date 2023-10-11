import {Given, Then} from "@badeball/cypress-cucumber-preprocessor";
import config from '../../elements/config';

Given("A user enter the {string} {string}", (input, value) => {
    cy.get(input).should('be.visible').last().scrollIntoView().type(value).wait(1000).then(() => {
        cy.screenshot();
    });
});

Then("Click on the button with have a text {string}", (button) => {
    cy.contains(button).should('be.visible').last().scrollIntoView().click({force: true}).wait(1000).then(() => {
        cy.screenshot();
    });
});

Then("Click on the submit button", () => {
    cy.get(config.submitBtn).should('be.visible').first().scrollIntoView().click({force: true}).wait(1000).then(() => {
        cy.screenshot();
    });
});

Then("Click on the cancel button", () => {
    cy.get(config.cancelBtn).should('be.visible').first().scrollIntoView().click({force: true}).wait(1000).then(() => {
        cy.screenshot();
    });
});

Then("Click on the {string} button", (button) => {
    cy.get(button).should('be.visible').first().scrollIntoView().click({force: true}).wait(1000).then(() => {
        cy.screenshot();
    });
});

Then('I see {string} in the title', (title) => {
    cy.title().should('include', title).wait(1000).then(() => {
        cy.screenshot();
    });
});

Then('I see this sentence {string} in the page', (sentence) => {
    cy.contains(sentence).scrollIntoView().should('be.visible').wait(1000).then(() => {
        cy.screenshot();
    });
});

Then("The url will contains the {string} subdirectory", (subpath) => {
    cy.url().should("contains", subpath).wait(1000).then(() => {
        cy.screenshot();
    });
});

Then("The url will not contains the {string} subdirectory", (subpath) => {
    cy.url().should("not.contain", subpath).wait(1000).then(() => {
        cy.screenshot();
    });
});

Then("The alert message {string} is displayed", (errorMessage) => {
    cy.get(config.alert).last().should("have.text", errorMessage).wait(1000).then(() => {
        cy.screenshot();
    });
});

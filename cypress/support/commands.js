// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import selectors from "./selector";
import data from "./data";

/**
 * Adding task on todo list app.
 */
Cypress.Commands.add("addTask", (task) => {
    cy.get(selectors.inputField).type(task);
    cy.get(selectors.add).click();
});

/**
 * Deleting task on todo list app.
 */
Cypress.Commands.add("deleteTask", (task) => {
    cy.xpath(`//label[contains(string(), '${task}')]`).click();
});

/**
 * Veryfing tasks and number of them.
 */
Cypress.Commands.add("verifyTasks", (task, number) => {
    cy.get(`//label[contains(string(), '${task}')]`).its(length).should("equal", number);
});

/**
 * Veryfing page of todo list app.
 * Checking header, input, button.
 * Comparing span with number of tasks to checkboxes.
 */
Cypress.Commands.add("verifyPage", () => {
    cy.get(selectors.header).contains(data.headerText);
	cy.get(selectors.inputField).should('exist');
	cy.get(selectors.add).should('exist').should("have.text", data.addButtonText);
    const numberOfCheckboxes = cy.get(selectors.checkbox).its("length");
    cy.get(selectors.numberOfTasks).should("have.text", numberOfCheckboxes);
});

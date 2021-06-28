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

import support from "./support";

/**
 * Adding task on todo list app.
 */
Cypress.Commands.add("addTask", (task) => {
    cy.get(support.inputField).type(task);
    cy.contains("Add").click();
});

/**
 * Deleting task on todo list app.
 */
 Cypress.Commands.add("deleteTask", (task) => {
    cy.xpath(`//label[contains(string(), '${task}')]`).click();
});

/**
 * Veryfing page of todo list app.
 */
 Cypress.Commands.add("verifyPage", (task) => {
    cy.get(support.header).should('have.text', support.headerText);
});

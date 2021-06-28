/// <reference types="cypress" />

describe("Adding items to list", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080/");
    });

    it("Add task", () => {
        cy.verifyPage();
        cy.addTask("Added task");
    });

    it("Add 2 task, one after another", () => {
        const tasksName = "Added 2 tasks";
        cy.verifyPage();
        cy.addTask(tasksName);
        cy.addTask(tasksName);
        cy.verifyTasks(tasksName, 2);
    });

    it("Add task and remove it", () => {
        const taskName = "remove me"
		cy.verifyPage();
        cy.addTask(taskName);
		cy.deleteTask(taskName)
    });

    it("Add task, refresh page, remove task", () => {
		const refreshedTask = "Added task - refresh"
		cy.verifyPage();
        cy.addTask(refreshedTask);
		cy.reload();
		cy.verifyPage();
		cy.deleteTask(refreshedTask);
	});
});

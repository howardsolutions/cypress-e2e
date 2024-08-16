/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Create a New Item', () => {
    beforeEach(() => {
        cy.visit('/jetsetter');
    });

    it("should have a form", () => {
        cy.get('form').should('exist');
    });

    it("should have a word Add Items", () => {
        cy.contains('Add Item')
    });
    it("should put stuff in an input field", () => {
        cy.get('[ data-test="new-item-input"]').type("Good")
    });
});
 
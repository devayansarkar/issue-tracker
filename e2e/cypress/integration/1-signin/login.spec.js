/// <reference types="cypress" />

describe('Validate log in feature works', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('HOST'))
    })

    it('Log in works with correct username and password', () => {
        cy.get('[data-cy=email-input]').type(Cypress.env('EMAIL'))
        cy.get('[data-cy=password-input]').type(Cypress.env('PASSWORD'))
        cy.get('[data-cy=login-button]').first().click()
        cy.wait(500)
        cy.get('[data-cy=home-title]').contains('Welcome to your personal issue tracker')
    })

    it('Log in fails with incorrect username and password', () => {
        cy.get('[data-cy=email-input]').type('my@email.com')
        cy.get('[data-cy=password-input]').type('unknownpassword')
        cy.get('[data-cy=login-button]').first().click()
        cy.wait(500)
        cy.get('[data-cy=login-message]').contains('Cannot find email/password combination')
    })
})
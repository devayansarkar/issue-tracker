/// <reference types="cypress" />

describe('Validate log in feature works', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('HOST'))
    })

    it('Make sure log in works with correct username and password', () => {
        cy.get('[data-cy=email]').type(Cypress.env('EMAIL'))
        cy.get('[data-cy=password]').type(Cypress.env('PASSWORD'))
        cy.get('[data-cy=login]').first().click()
        cy.wait(1000)
        cy.get('[data-cy=home-title]').contains('Welcome to your personal issue tracker')
    })

    it('Make sure log in fails with incorrect username and password', () => {
        cy.get('[data-cy=email]').type('my@email.com')
        cy.get('[data-cy=password]').type('unknownpassword')
        cy.get('[data-cy=login]').first().click()
        cy.wait(1000)
        cy.get('[data-cy=login-message]').contains('Cannot find email/password combination')
    })
})
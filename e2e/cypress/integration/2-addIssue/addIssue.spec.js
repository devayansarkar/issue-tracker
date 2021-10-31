/// <reference types="cypress" />

describe('Validate adding an issue freature works', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('HOST'))
    })

    it('Able to add issue by navigating from sidenav', () => {
        const today = new Date();
        const todayDateString = today.toUTCString();
        const dateInFuture = new Date();
        dateInFuture.setDate(today.getDate() + 15);
        const dateInput = `${dateInFuture.getUTCFullYear()}-${dateInFuture.getMonth()+1}-${dateInFuture.getDate()}`
        cy.get('[data-cy=email-input]').type(Cypress.env('EMAIL'))
        cy.get('[data-cy=password-input]').type(Cypress.env('PASSWORD'))
        cy.get('[data-cy=login-button]').first().click()
        cy.wait(1000)
        cy.get('[data-cy=add-issue-navigation-button]').click()
        cy.get('[data-cy=title-input]').type(`This is the title - ${todayDateString}`)
        cy.get('[data-cy=description-input]').type(`This is the description - ${todayDateString}`)
        cy.get('[data-cy=lane-input]').select('DONE')
        cy.get('[data-cy=category-input]').type('CI-TEST')
        cy.get('[data-cy=date-input]').type(dateInput)
        cy.get('[data-cy=add-issue-button]').click()
        cy.get('[data-cy=issue-info-message]').contains('Issue is added successfully.')
        cy.get('[data-cy=all-issues-navigation-button]').click()
        // So that issue is added to the board, without refresh
        cy.contains(`This is the title - ${todayDateString}`)
        cy.reload()
        // So that issue is returned from the back and is still present after refresh
        cy.contains(`This is the title - ${todayDateString}`)
    })

    it('Able to add issue by navigating from sidenav by filling only mandatory fields', () => {
        const today = new Date();
        const todayDateString = today.toUTCString();
        cy.get('[data-cy=email-input]').type(Cypress.env('EMAIL'))
        cy.get('[data-cy=password-input]').type(Cypress.env('PASSWORD'))
        cy.get('[data-cy=login-button]').first().click()
        cy.wait(1000)
        cy.get('[data-cy=add-issue-navigation-button]').click()
        cy.get('[data-cy=title-input]').type(`This is the title - ${todayDateString}`)
        cy.get('[data-cy=description-input]').type(`This is the description - ${todayDateString}`)
        cy.get('[data-cy=add-issue-button]').click()
        cy.get('[data-cy=issue-info-message]').contains('Issue is added successfully.')
        cy.get('[data-cy=all-issues-navigation-button]').click()
        // So that issue is added to the board, without refresh
        cy.contains(`This is the title - ${todayDateString}`)
        cy.reload()
        // So that issue is returned from the back and is still present after refresh
        cy.contains(`This is the title - ${todayDateString}`)
    })

    it('Button is disabled if mandatory fields are not filled', () => {
        cy.get('[data-cy=email-input]').type(Cypress.env('EMAIL'))
        cy.get('[data-cy=password-input]').type(Cypress.env('PASSWORD'))
        cy.get('[data-cy=login-button]').first().click()
        cy.wait(1000)
        cy.get('[data-cy=add-issue-navigation-button]').click()
        cy.get('[data-cy=add-issue-button]').should('be.disabled')
    })
})
/// <reference types="cypress" />

describe('Validate viewing and updating an issue works', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('HOST'))
    })

    it('Able to view and edit the issue', () => {
        const today = new Date()
        const todayDateString = today.toUTCString()
        const dateInFuture = new Date()
        dateInFuture.setDate(today.getDate() + 15)
        let day = dateInFuture.getDate()
        let month = dateInFuture.getMonth() + 1
        if (day < 10) {
            day = `0${day}`
        }

        if (month < 10) {
            month = `0${month}`
        }
        const dateInput = `${dateInFuture.getUTCFullYear()}-${month}-${day}`
        cy.get('[data-cy=email-input]').type(Cypress.env('EMAIL'))
        cy.get('[data-cy=password-input]').type(Cypress.env('PASSWORD'))
        cy.get('[data-cy=login-button]').first().click()
        cy.wait(500)
        cy.visit(`${Cypress.env('HOST')}/view-issue/5`)
        cy.get('[data-cy=title-input]').click().clear().type(`This is the title - ${todayDateString}`)
        cy.get('[data-cy=description-input]').clear().type(`This is the description - ${todayDateString}`)
        cy.get('[data-cy=lane-input]').select('INPROGRESS')
        cy.get('[data-cy=category-input]').clear().type('CI-TEST-UPDATE')
        cy.get('[data-cy=date-input]').type(dateInput)
        cy.get('[data-cy=add-issue-button]').click()
        cy.get('[data-cy=issue-info-message]').contains('Issue is updated successfully.')
        cy.reload()
        cy.get('[data-cy=title-input]').should('have.value', `This is the title - ${todayDateString}`)
        cy.get('[data-cy=description-input]').should('have.value', `This is the description - ${todayDateString}`)
        cy.get('[data-cy=lane-input]').should('have.value', 'INPROGRESS')
        cy.get('[data-cy=category-input]').should('have.value', 'CI-TEST-UPDATE')
        cy.get('[data-cy=date-input]').should('have.value', dateInput)
        cy.get('[data-cy=all-issues-navigation-button]').click()
        // So that issue is added to the board, without refresh
        cy.contains(`This is the title - ${todayDateString}`)
        cy.reload()
        // So that issue is returned from the back and is still present after refresh
        cy.contains(`This is the title - ${todayDateString}`)
    })
})
/// <reference types="cypress" />

describe('Validate visibilty of comments section is correctly maintained', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('HOST'))
    })

    it('Comment section is not available when issue is being added', () => {
        cy.get('[data-cy=email-input]').type(Cypress.env('EMAIL'))
        cy.get('[data-cy=password-input]').type(Cypress.env('PASSWORD'))
        cy.get('[data-cy=login-button]').first().click()
        cy.wait(500)
        cy.get('[data-cy=add-issue-navigation-button]').click()
        cy.get('[data-cy=comment-section]').should('not.exist')
    })

    it('Able to view comments section when viewing the issue', () => {
        cy.get('[data-cy=email-input]').type(Cypress.env('EMAIL'))
        cy.get('[data-cy=password-input]').type(Cypress.env('PASSWORD'))
        cy.get('[data-cy=login-button]').first().click()
        cy.wait(500)
        cy.visit(`${Cypress.env('HOST')}/view-issue/5`)
        cy.get('[data-cy=comment-section]').should('exist')
    })

    it('Comment section is not available when issue is updated', () => {
        cy.get('[data-cy=email-input]').type(Cypress.env('EMAIL'))
        cy.get('[data-cy=password-input]').type(Cypress.env('PASSWORD'))
        cy.get('[data-cy=login-button]').first().click()
        cy.wait(500)
        cy.visit(`${Cypress.env('HOST')}/view-issue/5`)
        cy.get('[data-cy=title-input]').click()
        cy.get('[data-cy=comment-section]').should('not.exist')
    })
})


describe('Validate behaviour of comments', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('HOST'))
    })

    it('Able add comments and close the section and clean the input', () => {
        const today = new Date()
        const todayDateString = today.toUTCString()
        cy.get('[data-cy=email-input]').type(Cypress.env('EMAIL'))
        cy.get('[data-cy=password-input]').type(Cypress.env('PASSWORD'))
        cy.get('[data-cy=login-button]').first().click()
        cy.wait(500)
        cy.visit(`${Cypress.env('HOST')}/view-issue/5`)
        cy.get('[data-cy=view-add-comment-input]').click()
        cy.get('[data-cy=comment-input]').should('exist')
        cy.get('[data-cy=comment-input]').type(`This is a comment ${todayDateString}`)
        cy.get('[data-cy=comment-close]').click()
        cy.get('[data-cy=comment-input]').should('not.exist')
        cy.get('[data-cy=view-add-comment-input]').click()
        cy.get('[data-cy=comment-input]').should('have.value', '');
    })

    it('Able add comments and save', () => {
        const today = new Date()
        const todayDateString = today.toUTCString()
        cy.get('[data-cy=email-input]').type(Cypress.env('EMAIL'))
        cy.get('[data-cy=password-input]').type(Cypress.env('PASSWORD'))
        cy.get('[data-cy=login-button]').first().click()
        cy.wait(500)
        cy.visit(`${Cypress.env('HOST')}/view-issue/2`)
        cy.get('[data-cy=view-add-comment-input]').click()
        cy.get('[data-cy=comment-input]').should('exist')
        cy.get('[data-cy=comment-input]').type(`This is a comment ${todayDateString}`)
        cy.get('[data-cy=comment-save]').click()
        cy.get('[data-cy=comment-container]').contains(`This is a comment ${todayDateString}`)
        cy.reload()
        cy.get('[data-cy=comment-container]').contains(`This is a comment ${todayDateString}`)

    })

    it('Able to delete comments', () => {
        const today = new Date()
        const todayDateString = today.toUTCString()
        cy.get('[data-cy=email-input]').type(Cypress.env('EMAIL'))
        cy.get('[data-cy=password-input]').type(Cypress.env('PASSWORD'))
        cy.get('[data-cy=login-button]').first().click()
        cy.wait(500)
        cy.visit(`${Cypress.env('HOST')}/view-issue/2`)
        cy.get('[data-cy=view-add-comment-input]').click()
        cy.get('[data-cy=comment-input]').should('exist')
        cy.get('[data-cy=comment-input]').type(`This is a comment ${todayDateString}`)
        cy.get('[data-cy=comment-save]').click()
        cy.get('[data-cy=comment-container]').contains(`This is a comment ${todayDateString}`)
        cy.reload()
        cy.get('[data-cy=comment-container]').contains(`This is a comment ${todayDateString}`)
        cy.get('[data-cy=comment-delete]').first().click()
        cy.get('[data-cy=comment-container]').should('not.contain', `This is a comment ${todayDateString}`)
        cy.reload()
        cy.get('[data-cy=comment-container]').should('not.contain', `This is a comment ${todayDateString}`)
    })
})
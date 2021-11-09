/// <reference types="cypress" />

describe('Validate dragging and dropping issues update the status and order', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('HOST'))
    })

    it('Able to drag and drop to target column to update the status of the issue', () => {
        cy.get('[data-cy=email-input]').type(Cypress.env('EMAIL'))
        cy.get('[data-cy=password-input]').type(Cypress.env('PASSWORD'))
        cy.get('[data-cy=login-button]').first().click()
        cy.get('[data-cy=all-issues-navigation-button]').click()
        cy.get('[data-cy=issue-card-todo]').first()
            // .trigger('pointerover')
            // .trigger('pointerenter')
            // .trigger('mouseover')
            // .trigger('mousedown')
            // .trigger('pointermove')
            // .trigger('mousemove', { clientX: 188, clientY: 261 })
            //.trigger('mouseup', { force: true });
            .move({ deltaX: 1000, deltaY: 10 })
    })

    // it('Able to drag and drop to target position to update the ordering of the issue', () => {

    // })

    // it('Able to drag and drop to target position and target column to update the ordering and the status of the issue', () => {

    // })
})
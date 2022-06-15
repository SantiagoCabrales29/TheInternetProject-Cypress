/// <reference types="Cypress"/>

it('Checkboxes', () => {

    cy
       .visit('/checkboxes')

    cy
       .get('input')
       .eq(0)
       .as('input0')
       .click()

    cy
       .get('@input0')
       .should('be.checked')

    cy
       .get('input')
       .eq(1)
       .as('input1')
       .uncheck()

    cy
       .get('@input1')
       .should('not.be.checked')
})
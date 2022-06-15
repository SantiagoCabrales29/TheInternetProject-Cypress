/// <reference types="Cypress"/>

it('Add/Remove Elements', ()=> {
    cy
      .visit('/add_remove_elements/')

    cy
      .contains('button','Add Element')
      .click()

    cy
      .get('button.added-manually')
      .should('be.visible')
      .click()

    cy
      .get('button.added-manually')
      .should('not.exist')
})
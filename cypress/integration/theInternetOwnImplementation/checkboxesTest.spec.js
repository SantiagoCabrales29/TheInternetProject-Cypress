/// <reference types="Cypress"/>

describe("Tests cases for Ad/Remove Elements page",()=>{

    beforeEach(()=>{
        cy.navigate('Checkboxes')

    })

    it('Check the checkboxes of the page', ()=>{
        cy.get('input').eq(0).check()
        cy.get('input').eq(0).should('be.checked');
    })

    it('Uncheck the checkboxes of the page', ()=>{
        cy.get('input').eq(1).uncheck()
        cy.get('input').eq(1).should('not.be.checked');
    })



})
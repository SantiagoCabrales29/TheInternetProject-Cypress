/// <reference types="Cypress" />

describe('Tests for Context Menu page',() =>{

    beforeEach(()=>{
        cy.navigate('Context Menu')
    })

    it('Interacting successfully with the context menu', () => {
         
        cy.get('#hot-spot').trigger('contextmenu')
        cy.on('window:alert',(message)=>{
            expect(message).to.equal('You selected a context menu')
        })

    })
})
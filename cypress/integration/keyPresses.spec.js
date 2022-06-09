/// <reference types="Cypress"/>

describe('Key Presses Page Tests', ()=>{
    beforeEach(() => {
        cy.navigate('Key Presses')
    })

    it('Pressing multiple keys', ()=> {
        cy.get('#target').type('{backspace}')
        cy.get('#result').should('contain.text','BACK_SPACE')

        cy.get('#target').type('{del}')
        cy.get('#result').should('contain.text','DELETE')
        

        cy.get('#target').type('{esc}')
        cy.get('#result').should('contain.text','ESCAPE')

        cy.get('#target').type('{downArrow}')
        cy.get('#result').should('contain.text','DOWN')

        cy.get('#target').type('{leftArrow}')
        cy.get('#result').should('contain.text','LEFT')

        cy.get('#target').type('{rightArrow}')
        cy.get('#result').should('contain.text','RIGHT')

        cy.get('#target').type('{upArrow}')
        cy.get('#result').should('contain.text','UP')

        cy.get('#target').type('{ctrl}')
        cy.get('#result').should('contain.text','CONTROL')
    })
})
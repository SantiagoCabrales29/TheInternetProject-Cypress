/// <reference types="Cypress"/>

describe("Tests cases for Ad/Remove Elements page",()=>{

    beforeEach(()=>{
        cy.navigate('Add/Remove')

    })

    it("Add elements to page",() => {

        let value2 = Math.random() * 20;
        for(var i=0; i<value2; i++){
            cy.get('button[onclick="addElement()"]').click()
        }
        
        cy.get('button.added-manually[onclick="deleteElement()"]').should('have.length.greaterThan',0)
    })

    it("Delete elements from page",() => {

        let value2 = Math.random() * 20;
        for(var i=0; i<value2; i++){
            cy.get('button[onclick="addElement()"]').click()
        }
        
        cy.get('button.added-manually[onclick="deleteElement()"]').each((
            $el,index,$list) =>{
                cy.wrap($el).click()

            }    
        )
        cy.get('button.added-manually[onclick="deleteElement()"]').should('have.length',0)
    })
})
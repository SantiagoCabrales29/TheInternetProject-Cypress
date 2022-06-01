/// <reference types="Cypress"/>

describe("Tests cases for Ad/Remove Elements page",()=>{

    it("Add elements to page",() => {
        cy.visit("")
        cy.contains('Add/Remove').click()

        let value2 = Math.random() * 20;
        for(var i=0; i<value2; i++){
            cy.get('button[onclick="addElement()"]').click()
        }
    })

    it("Delete elements from page",() => {
        cy.visit("")
        cy.contains('Add/Remove').click()

        let value2 = Math.random() * 20;
        for(var i=0; i<value2; i++){
            cy.get('button[onclick="addElement()"]').click()
        }
        
        cy.get('button.added-manually[onclick="deleteElement()"]').each((
            $el,index,$list) =>{
                cy.wrap($el).click()

            }
        )
    })
})
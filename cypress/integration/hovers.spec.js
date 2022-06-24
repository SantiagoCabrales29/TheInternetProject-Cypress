/// <reference types="Cypress" />
describe("Hovers Test Page", () =>{

    beforeEach(()=>{
        cy.navigate("Hovers")
    })
    it("Hover over random profile", () => {
        let value2 = Math.floor(Math.random() * 3);
        cy.log(value2)
        cy.get('.figcaption').eq(value2).invoke("show")
        cy.get('.figcaption[style="display: block;"]').should('have.length',1)
        cy.get('.figcaption').eq(value2).should('be.visible')
        cy.get('.figcaption[style="display: block;"]').find('h5').then((displayedElement) => {
            cy.log(displayedElement.text())
            expect(displayedElement.text()).eq(`name: user${value2+1}`)
        })
    })

    it.only("Hover over random profile 2", () => {
        let value2 = Math.floor(Math.random() * 3);
        cy.log(value2)
        cy.get('.figcaption').eq(value2).invoke("show")
        cy.get('.figcaption').each(            
            ($el,index,$list) => {
               if($el.is(':visible')){
                    cy.get($el).find('h5').then((displayedElement) => {
                        cy.log(displayedElement.text())
                        expect(displayedElement.text()).eq(`name: user${value2+1}`)
                    })
               } 
        })
    })
})
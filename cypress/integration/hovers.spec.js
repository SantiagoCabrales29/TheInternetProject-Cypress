/// <reference types="Cypress" />
describe("Hovers Test Page", () =>{

    beforeEach(()=>{
        cy.navigate("Hovers")
    })
    it("Hover over random profile", () => {
        let value2 = Math.random() * 3;
        cy.get('.figcaption').eq(0).invoke("show")
        cy.get('.figcaption').find("h5").then(function(label){
            //let value3 = label
            cy.log(label.eq(0).text())
        })
        //cy.contains('Top').click()
        cy.get('.figcaption').find("h5").each(            
            ($el,index,$list) => {
        
        }).then(($el) =>{
            cy.log($el.text())
        })
        
    
            //let value3 = label
      //  cy.log(label.eq(0).text()),
         
    })
})
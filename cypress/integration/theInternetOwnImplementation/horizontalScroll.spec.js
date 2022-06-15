/// reference types="Cypress" />

describe('Horizontal Slide Page Tests', ()=>{

    beforeEach(()=>{
        cy.navigate('Horizontal Slide')
    })

    it('Move the Horizontal Slide to the Right extracting value from max atribute and using random value',()=>{
        /*
        The invoke method allows us to call a JQuery function. In this case we use the prop() function to extract
        the value of an attribute (in this case max attribute). With this number we are generating a random value
        To interact with a range input (slider), we need to set its value and then trigger the appropriate event to signal it has changed.
        Below we invoke jQuery's val() method to set the value, then trigger the change event.
        https://docs.cypress.io/api/commands/trigger#Mouse-Events
        */
        cy.get("input[type='range']").invoke('prop', 'max').then(maximum => {
            let value1 = Math.floor(Math.random() * maximum + 1);
            cy.get('#range').then(()=>{
                cy.get("input[type='range']").invoke('val', value1).trigger('change')
            })
        cy.get('#range').should('have.text',value1)
        })

    })
    /*
    This is a second implementation trying to use the right arrow but apparently Cypress doesn't support this interaction
    with sliders.
    
    it('Move the Horizontal Slide to the Right',()=>{
        let value1 = Math.floor(Math.random() * 5);
        cy.get('#range').then((numberRange)=>{
        cy.log("This is the random value " + value1)
        cy.log(numberRange.text())
          while(numberRange.text()!=value1){
            cy.get("input[type='range']").click().type('{rightArrow}')
          }
        })
        cy.get("input[type='range']").click()
    })
    */

})
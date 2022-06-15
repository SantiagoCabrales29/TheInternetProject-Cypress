/// <reference types="Cypress" />

describe('Dropdown page Test', ()=>{

    beforeEach(()=>{
        cy.navigate('Dropdown')
    })

    it('Interacting successfuly with a Dropdown element',()=> {
        cy.get('#dropdown').select('Option 2').
        should('have.value', '2')
        cy.get('option[selected]').should('have.text','Option 2')
    })

    /*
        With this solution we cover the case where new options are added to the dropdown.
        We are using the removeAttr JQuery function to remove the value of the first option of 
        the dropdown that contained the value Please select an option. With this we get the number
        of options that could be selected by the user. We use a random generator to get a different
        option each time.
    */
    it('Dynamically select a value of the dropdown',()=>{
        cy.get('#dropdown').find('option').eq(0).invoke('removeAttr','value').then(()=>{
             cy.get('option[value]').each(($el,index,$list) =>{
                let value2 = Math.floor(Math.random() * $list.length) + 1;
                cy.get('#dropdown').select(value2)
                cy.get('option[selected]').should('have.text',`Option ${value2}`)
            })
        })   
    })
})
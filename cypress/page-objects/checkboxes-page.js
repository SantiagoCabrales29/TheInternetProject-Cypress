///<reference types="Cypress"/>

export class CheckboxesPage{
    getCheckbox1(){
        return cy.get('input').eq(0)
    }

    getCheckbox2(){
        return cy.get('input').eq(1)
    }
}
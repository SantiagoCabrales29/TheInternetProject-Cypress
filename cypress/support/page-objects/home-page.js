///<reference types="Cypress"/>

export class HomePage{
    navigate(){
        cy.visit('')
    }

    goToPage(pageName){
        cy.contains(pageName).click()
    }
}
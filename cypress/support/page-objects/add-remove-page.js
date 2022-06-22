///<reference types="Cypress"/>

export class AddRemovePage{
    getAddElementButton(){
        return cy.get('button[onclick="addElement()"]')
    }

    getListOfAddedElements(){
        return cy.get('button.added-manually[onclick="deleteElement()"]')
    }
}
///<reference types="Cypress"/>

import { AddRemovePage } from '../../page-objects/add-remove-page'
import {HomePage} from '../../page-objects/home-page'

describe('Add Remove ', ()=> {
    const homePage = new HomePage()
    const addRemovePage = new AddRemovePage()

    beforeEach(()=>{
        homePage.navigate()
        homePage.goToPage('Add/Remove')
    })

    it('Add Elements to Page',()=>{
        addRemovePage.getAddElementButton().click()
    })

    it('Add multiple Elements to the Page', () => {
        let value2 = Math.random() * 20;
        for(var i=0; i<value2; i++){
            addRemovePage.getAddElementButton().click()
        }
        addRemovePage.getListOfAddedElements().should('have.length.greaterThan',1)
    })

    it('Delete all the Elements to the Page', () => {
        let value2 = Math.random() * 20;
        for(var i=0; i<value2; i++){
            addRemovePage.getAddElementButton().click()
        }
        addRemovePage.getListOfAddedElements().each((
            $el,index,$list) =>{
                cy.wrap($el).click()
            }    
        )
        addRemovePage.getListOfAddedElements().should('have.length',0)
        cy.get('button.added-manually[onclick="deleteElement()"]').should('not.exist')
    })

})
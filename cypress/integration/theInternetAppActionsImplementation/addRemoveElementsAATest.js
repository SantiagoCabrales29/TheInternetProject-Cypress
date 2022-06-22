///<reference types="Cypress"/>

import { AddRemovePage } from '../../support/page-objects/add-remove-page'

/*
These tests are a first approach to app actions using the internet page.
We are calling the addElement() and deleteElement() functions from the
application.  To use these function we are using the window() method to 
get the window object and then we could use the methods of the application.
Using app actions we are skipping the interactions with the UI and just 
creating or deleting the elements as the application would do it. 
The first tests are using the addElement() function to add the elements.
The test: Delete all the Elements to the Page using app actions for adding elements 
is using the addElement app action to create elements and the page object to click
the delete button of each element.
The last test is using app actions to create and delete the elements.
Comparing the execution of the tests cases here, the ones using page objects and the
ones using only the UI it is clear the benefits from using app actions. The execution
of the test that only uses app action is the fastest from all the tests. It takes 
around 1 second.
Using page objects is slower (around 3/4 seconds) almost the same time than using
only UI.

When you run the test that uses page objects you will see that it is extremely
fast compared to the other ones.
*/

describe('Add Remove ', ()=> {
    const addRemovePage = new AddRemovePage()

    beforeEach(()=>{
        cy.visit('/add_remove_elements/')
    })

    it('Add Elements to Page using App Actions',()=>{
        cy.window().then(({window}) =>{
            window.addElement();
        })
    })

    it('Add multiple Elements to the Page using App Actions', () => {
        let value2 = Math.random() * 20;
        for(var i=0; i<value2; i++){
            cy.window().then(({window}) =>{
                window.addElement();
            })
        }
        addRemovePage.getListOfAddedElements().should('have.length.greaterThan',0)
    })

    it('Delete all the Elements to the Page using app actions for adding elements', () => {
        let value2 = Math.random() * 20;
        for(var i=0; i<value2; i++){
            cy.window().then(({window}) =>{
                window.addElement();
            })
        }
        addRemovePage.getListOfAddedElements().should('have.length.greaterThan',0)
        addRemovePage.getListOfAddedElements().each((
            $el,index,$list) =>{
                cy.wrap($el).click()
            }    
        )
        addRemovePage.getListOfAddedElements().should('have.length',0)
        cy.get('button.added-manually[onclick="deleteElement()"]').should('not.exist')
    })

    it('Delete all the Elements to the Page using app actions for adding elements', () => {
        let value2 = Math.random() * 20;
        for(var i=0; i<value2; i++){
            cy.window().then(({window}) =>{
                window.addElement();
            })
        }
        addRemovePage.getListOfAddedElements().should('have.length.greaterThan',0)
        addRemovePage.getListOfAddedElements().each((
            $el,index,$list) =>{
                cy.window().then(({window}) =>{
                    window.deleteElement()
                })
            }    
        )
        addRemovePage.getListOfAddedElements().should('have.length',0)
        cy.get('button.added-manually[onclick="deleteElement()"]').should('not.exist')
    })

})
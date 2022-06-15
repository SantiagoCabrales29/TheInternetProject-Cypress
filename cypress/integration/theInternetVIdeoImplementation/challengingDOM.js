/// <reference types="Cypress"/>

/*
In this test case we are obtaining the three buttons of the page.
For filtering we can use the .not() method which receives one or
more locators. In this case we use , to concatenate the locators.
Here we are saying: Obtain all the elements with .button that don't 
match .alert or .success locators.
We can also use filter method which gets the DOM elements that match 
a specific selector. In this case get all elements that match .button
but filter those that have .alert or .success
*/

it('Challenging DOM Test',() => {

    cy
       .visit('/challenging_dom')

    //This is a selector that return us all the buttons of that page.
    //* is for contains
    //cy.get("a[class*='button']")

    cy
       .get('.button')
       .not('.alert,.success')

    cy
       .get('.button')
       .filter('.alert')
    
    cy
       .get('.button')
       .filter('.success')

    cy
       .get('tbody tr')
       .eq(6)
       .contains('edit')

    cy
       .get('tbody tr')
       .eq(7)
       .contains('delete')

    cy
       .get('#canvas')
})
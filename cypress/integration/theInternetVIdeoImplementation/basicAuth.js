/// <reference types="Cypress" />

/*
For this test we are using the basic auth page which has a popup that request the user
and the password. To interact with the pop up we can set the auth argument which
Adds Basic Authorization headers.
At the beginning we used the argument failOnStatusCode set to false. This argument set to 
true allow us to Whether to fail on response codes other than 2xx and 3xx. In this case
we setted it to false because we didn't want the test to fail.
https://docs.cypress.io/api/commands/visit#Arguments

In this test we also use location method which gets the global window.location object 
of the page that is currently active. This returns the info of the current page like
the pathname
https://docs.cypress.io/api/commands/location#Yields
*/

it('Basic Auth' ,() => {
    cy.visit('/basic_auth', {
        //failOnStatusCode: false
        auth: {
            username: 'admin',
            password: 'admin'
        }
    })
    cy
       .location('pathname')
       .should('eq','/basic_auth')

    cy
       .contains('h3','Basic Auth')
       .should('be.visible')


    cy
       .contains('p', 'Congratulations! You must have the proper credentials.')
       .should('be.visible')
})
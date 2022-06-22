/// <reference types="Cypress" />

/*
For this test case we are asserting that some of the images are broken and some other are not.
For this we are using the intercept method with the help of the network tab of the chrome dev
tools. If you go to that tab you will see that the get calls for the broken images end up with
a 404. 
We use intercept method an aliases to intercept each of the api call on each of the images.
Then we use wait with the alias @ to verify that the response of the broken images is 404 and
not 404 to the correct image.
*/

it('Broken Images', () => {
    cy
       .intercept('GET','/img/avatar-blank.jpg')
       .as('avatar')

    cy
       .intercept('GET', '/hjkl.jpg')
       .as('hjkl')

    cy
       .intercept('GET', '/asdf.jpg')
       .as('asdf')


    cy
       .visit('/broken_images')


    cy
       .wait('@hjkl')
       .its('response.statusCode')
       .should('eq',404)
    cy
       .wait('@asdf')
       .its('response.statusCode')
       .should('eq',404)

    cy
       .wait('@avatar')
       .its('response.statusCode')
       .should('not.eq',404)

})
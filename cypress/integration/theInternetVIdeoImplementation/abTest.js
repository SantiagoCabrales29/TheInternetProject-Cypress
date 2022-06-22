/// <reference types="Cypress"/>

/*
These are two tests for the A/B Test Page. Something important that we have to understand
is that the render of the page depends on some cookies. A/B Test Control is going to be shown 
depending on the cookies of the page. Same for A?B Test Variation 1.
For that we are using setCookie method that receives the name of the cookie and the value that we
want to set.
For obtaining the value of those cookies we used the Application tab of the Chrome Dev Tools. This tab
help us to determine if there's some storage or not when we visit the page
*/

it('A/B Test - variation A', () => {
    cy
       .setCookie('optimizelyBuckets', '%7B%22298349752%22%3A%22298291000%22%7D')
       .setCookie('optimizelyEndUserId', 'oeu1654042360641r0.18273501901511247')
       .setCookie('optimizelySegments', '%7B%7D')

    cy
       .visit('/abtest')

    cy
      .contains('h3', 'A/B Test Control')
      .should('be.visible')
})

it('A/B Test - variation B', () => {
    cy
       .setCookie('optimizelyBuckets', '%7B%22298349752%22%3A%22298343790%22%7D')
       .setCookie('optimizelyEndUserId', 'oeu1655164461433r0.627409280157617')
       .setCookie('optimizelySegments', '%7B%7D')

    cy
       .visit('/abtest')

    cy
       .contains('h3', 'A/B Test Variation 1')
       .should('be.visible')
})
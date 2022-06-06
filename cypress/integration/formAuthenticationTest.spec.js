/// <reference types="Cypress" />

describe('', ()=>{

    beforeEach(()=>{
       cy.navigate('Form Authentication')
    })

    it('Successful Authentication with credentials in env file', ()=>{
        cy.get('#username').type(Cypress.env('usernameFormAuthentication'))
        cy.get('#password').type(Cypress.env('passwordFormAuthentication'))
        cy.get('.fa.fa-2x.fa-sign-in').click()

        cy.get('#flash').should('contain.text','You logged into a secure area!')
        cy.get('h2').should('contain.text', 'Secure Area')
    })

    it('Successful logout', ()=>{
        cy.get('#username').type(Cypress.env('usernameFormAuthentication'))
        cy.get('#password').type(Cypress.env('passwordFormAuthentication'))
        cy.get('.fa.fa-2x.fa-sign-in').click()

        cy.get('#flash').should('contain.text','You logged into a secure area!')
        cy.get('.button.secondary.radius').click()
        cy.get('#flash').should('contain.text','You logged out of the secure area!')
        cy.get('h2').should('contain.text', 'Login Page')
    })

    /*
    For this test case I used regular expressions to get the username and the password from
    the form authentication page. I used this page: https://regex101.com/ to test the regex
    expression. I use the match method to get all the groups that match the regular expression
    and use the index 1 to get the specific text we are looking for.
    */
    it.only('Successful Authentication getting credentials from text using REGEX Expressions', ()=>{
        var myArray, username, password
        cy.get('.subheader').then((message) =>{
            var userNameRegex = /Enter (.+?) /
            var passwordRegex = /and (.+?) for/
            myArray = message.text().match(userNameRegex)
            username = myArray[1]
            myArray = message.text().match(passwordRegex)
            password = myArray[1]
            cy.get('#username').type(username)
            cy.get('#password').type(password)
        })

        cy.get('.fa.fa-2x.fa-sign-in').click()

        cy.get('#flash').should('contain.text','You logged into a secure area!')
        cy.get('h2').should('contain.text', 'Secure Area')
    })
})
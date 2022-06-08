/// <reference types="Cypress"/>

describe('JavaScript Alerts Page Tests', () => {

    beforeEach(()=>{
        cy.navigate('JavaScript Alerts')
    })

    it('Click for JS Alerts', () => {
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert',(alertMessage) => {
            expect(alertMessage).to.be.equal('I am a JS Alert')
        })
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    it('Click for JS Confirm, Clicking Ok button', () => {
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm',(alertMessage) => {
            expect(alertMessage).to.be.equal('I am a JS Confirm')
        })
        cy.get('#result').should('have.text','You clicked: Ok')
    })

    it('Click for JS Confirm, Clicking Cancel button', () => {
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm',(alertMessage) => {
            expect(alertMessage).to.be.equal('I am a JS Confirm')
        })
        cy.on('window:confirm',()=> false)
        cy.get('#result').should('have.text','You clicked: Cancel')
    })

    /*
    For the interaction with a window prompt we have to use the window() method which allow us to
    change the context to the window prompt that was oppened when clicking the button. We have to 
    use then() to resolve the promise and then we use the stub method to replace a function, 
    record its usage and control its behavior. In this case we use prompt and specify the return with
    returns() method.
    Basically we are adapting the implementation to interact with prompts that you can find here:
    https://docs.cypress.io/api/commands/stub#Method 
    Another great article for testing this page is: https://testersdock.com/cypress-javascript-alert-confirm-prompt/
    */
    it('Click for JS Prompt - Input text in prompt, Click OK and Validate Input Text', () => {
        cy.window().then(($window) => {
          cy.stub($window, 'prompt').returns('Hello this is a test text')
          cy.contains('Click for JS Prompt').click()
        })
        cy.window().its('prompt').should('be.called')
        cy.get('#result').should('have.text', 'You entered: Hello this is a test text')
      })

})
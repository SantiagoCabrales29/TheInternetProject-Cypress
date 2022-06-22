/// <reference types="Cypress" />

import 'cypress-iframe';
import { faker } from '@faker-js/faker';

describe('Iframe Page Tests', ()=>{


    beforeEach(()=>{
        cy.navigate('Frames')
    })

    it('Interacting successfully with the IFrame',()=>{
        cy.contains('iFrame').click()
        cy.frameLoaded('#mce_0_ifr')
        /* 
        Lines 21 and 36 are used to fix the flakiness when trying to get the length of the default message
        If I tried to interact with the default message without this line I wasn't able to get the length
        of the message. I realized that if we interact with the iframe first then I'm able to get the right length
        */
        cy.iframe().type(' ')
        cy.iframe().then((message)=>{
            for(let i=0; i<message.text().length; i++){
                cy.iframe().type('{backspace}')
            }
        })
        cy.iframe().type('THIS IS A TEXT IN THE NEW IFRAME')
        cy.iframe().then((message)=>{
            expect(message.text()).not.be.equal('Your content goes here.')
        })
    })
    
    it('Interacting successfully with the IFrame using Faker',()=>{
        cy.contains('iFrame').click()
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe().type(' ')
        cy.iframe().then((message)=>{
            for(let i=0; i<message.text().length; i++){
                cy.iframe().type('{backspace}')
            }
        })
        let randomWords = faker.random.words(5) 
        cy.iframe().type(`A Text from Faker: ${randomWords}`)
        cy.iframe().then((message)=>{
            expect(message.text()).not.be.equal('Your content goes here.')
            expect(message.text()).contains(randomWords)
        })
    })
})
/// <reference types="Cypress" />

import 'cypress-iframe';
//const faker = require("faker");

import { faker } from '@faker-js/faker';
//import { faker } from '@faker-js/faker';

describe('Iframe Page Tests', ()=>{


    beforeEach(()=>{
        cy.navigate('Frames')
    })

    it.only('Interacting successfully with the IFrame',()=>{
        cy.contains('iFrame').click()
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe().then((message)=>{
            cy.log(message.text())
            cy.log(message.text().length)
            // for(let i=0; i<message.text().length; i++){
            //     cy.iframe().type('{backspace}')
            // }
            for(let i=0; i<23; i++){
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
        cy.iframe().then((message)=>{
            cy.log(message.text().length)
            for(let i=0; i<message.text().length; i++){
                cy.iframe().type('{backspace}')
            }
        })
        cy.iframe().type(`A Text from Faker: ${faker.random.words(5)}`)
        cy.iframe().then((message)=>{
            expect(message.text()).not.be.equal('Your content goes here.')
        })
    })
})
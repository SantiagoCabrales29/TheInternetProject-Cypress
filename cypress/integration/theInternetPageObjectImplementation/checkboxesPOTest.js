///<reference types="Cypress"/>

import { HomePage } from "../../support/page-objects/home-page"
import { CheckboxesPage } from "../../support/page-objects/checkboxes-page"


describe("Tests cases for Ad/Remove Elements page",()=>{

    const homePage = new HomePage()
    const checkBoxesPage = new CheckboxesPage()

    beforeEach(()=>{
        homePage.navigate()
        homePage.goToPage('Checkboxes')
    })

    it('Check the checkboxes of the page', ()=>{
        checkBoxesPage.getCheckbox1().check()
        checkBoxesPage.getCheckbox1().should('be.checked');
    })

    it('Uncheck the checkboxes of the page', ()=>{
        checkBoxesPage.getCheckbox2().uncheck()
        checkBoxesPage.getCheckbox2().should('not.be.checked');
    })



})
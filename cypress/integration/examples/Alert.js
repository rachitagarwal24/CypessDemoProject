/// <reference types="cypress" />

describe('Alerts', function() {


    it('alert window', function() {
        cy.visit('http://testautomationpractice.blogspot.com/')
        cy.get('#HTML9 > div.widget-content > button').click()
        cy.on("window:confirm", (str) =>
        {
            expect(str).to.equal('Press a button!')
        }
        )
        

    })
})
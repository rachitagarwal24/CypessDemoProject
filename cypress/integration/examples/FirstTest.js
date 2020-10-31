/// <reference types="cypress" />

describe("MYTestSuite", function () {


    it("Verify tilt of page positive", function() {

        cy.visit('http://demo.nopcommerce.com/')
        cy.title().should('eq', 'nopCommerce demo store')

    })

    it("Verify tilt of page negative", function() {

        cy.visit('http://demo.nopcommerce.com/')
        cy.title().should('not.eq', '12nopCommerce demo store')

    })
})
/// <reference types="cypress" />

describe('Locating elements', function() {


    it('Verify Type of locators', function() {
        cy.visit('http://demo.nopcommerce.com/')
        cy.get('#small-searchterms').type("Apple Macbook Pro 13-inch")
        cy.get('#small-search-box-form > .button-1').click()
        cy.get('.product-box-add-to-cart-button').click()
        cy.get('#product_enteredQuantity_4').clear().type("2")
        cy.get('#add-to-cart-button-4').click()
        cy.wait(4000)

        cy.get('#topcartlink > a > span.cart-label').click()
    
        cy.get(".product-unit-price").contains('$1,800.00')

    })
})
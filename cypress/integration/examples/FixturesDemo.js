/// <reference types="cypress" />


describe("MYTestSuite", function () {

    before(function() {
        cy.log('****************')
        cy.fixture('example').then(function(data) {
            this.data = data;
        }) 

    })

    it("Test", function() {
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('input[name=Email]').clear().type(this.data.email)
        cy.get('input[name=Password]').clear().type(this.data.password)
        cy.get('input[type=submit]').click()

    })

  
})
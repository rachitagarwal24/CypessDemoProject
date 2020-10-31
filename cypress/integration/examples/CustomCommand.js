/// <reference types="cypress" />


describe("MYTestSuite", function () {
  it("login test", function() {
       cy.login('admin@yourstore.com', 'admin')
       cy.title().should('be.equal', 'Dashboard / nopCommerce administration')

       cy.login('admin@yourstore.com', 'admin121')
       cy.title().should('not.be.equal', 'Dashboard / nopCommerce administration')
    })

    it("Adding customer", function() {
        cy.login('admin@yourstore.com', 'admin')
        
        cy.log("************Adding customer")    
    })

  
    it("Editing customer", function() {
        cy.login('admin@yourstore.com', 'admin')

        cy.log("***********Editing customer")

    })

})
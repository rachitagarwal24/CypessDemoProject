/// <reference types="cypress" />


describe('Suite', function() {

    before(function(){
        cy.log('THis is setup block')
    })

    after(function() {
        cy.log('This is tear down block')
    })

    beforeEach(function() {
        cy.log("this is login part")    
    })

    afterEach(function() {  
        cy.log("this is logout block")

    })


    it('searching', function() {
        cy.log('*********This is searching test ***********')

  
    })

    it('Advance Searching ', function() {
        cy.log('******** this is adavance searching ')
  
    })

    it('Listing product', function() {
        cy.log('********this is list product test')
  
    })

})
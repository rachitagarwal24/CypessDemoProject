/// <reference types="cypress" />
describe("Handling UI Elements", function () {

    it("Checked fields", function() {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

        cy.get("#checkbox1").uncheck().should('not.be.checked')
        cy.get("#checkbox2").uncheck().should('not.be.checked')
        cy.get("#checkbox3").uncheck().should('not.be.checked')

        cy.get("input[type=checkbox]").check(['Cricket','Hockey'])

    })

    it("Drop down", function() {
        cy.get('#Skills').select('Android').should('have.value','Android')
    })

    it("Multiselect", function() {
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Japan').click()
    })

    it("searchable drop down", function() {
        cy.get('[role=combobox]').click({force : true})
        cy.get('.select2-search__field').type('Ind')
        cy.get('.select2-search__field').type('{enter}')

    })



})
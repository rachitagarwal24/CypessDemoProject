/// <reference types="cypress" />
class LoginPage {
    visit() {
        cy.visit('https://admin-demo.nopcommerce.com/login')
    }
    fillEmail(value) {
        const field = cy.get('input[type=Email]')
        field.clear()
        field.type(value)
        return this
    }
    fillPassword(value) {
        const field = cy.get('input[type=Password]')
        field.clear()
        field.type(value)
        return this
    }
    submit() {
        const field = cy.get('input[type=submit]')
        field.click()
    }
    

}

export default LoginPage

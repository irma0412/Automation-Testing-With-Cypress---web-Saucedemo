class LoginPage {
    visit(){
        cy.visit('https://www.saucedemo.com/');
    }
    fillUsername(username) {
        cy.get('#user-name').type(username);

    }
    fillPassword(password) {
        cy.get('#password').type(password);
    }

    clickLogin() {
        cy.get('#login-button').click();
    }

    verifyLoginSucces(){
        //  Validation to ensure the URL points to the inventory page
        cy.url().should('include', '/inventory.html');
        // Validation to ensure there are elements on the page after login
        cy.get('.inventory_list').should('be.visible');
        // Validation to ensure the shopping cart appears
        cy.get('.shopping_cart_link').should('be.visible');
    }

    verifyErrorMessage(text){
        // Validation to ensure there is an error message
        cy.get('[data-test="error"]').should('contain', text);

    }
}

export default new LoginPage();
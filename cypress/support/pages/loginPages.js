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
        cy.get('#login-butto').click();
    }

    verifyLoginSucces(){
        cy.url().should('include', '/inventory.html');
        cy.get('.inventory_list').should('be.visible');
        cy.get('.shopping_cart_link').should('be.visible');
    }

    verifyErrorMessage(text){
        cy.get('[data-test="error"]').should('contain', text);

    }
}

export default new LoginPage();
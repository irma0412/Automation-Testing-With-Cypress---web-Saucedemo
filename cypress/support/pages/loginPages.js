class LoginPage {
    visit(){
        cy.visit('https://www.saucedemo.com/');
    }
    fillUsername(username) {
        cy.get('[data-test="username"]').type(username);

    }
    fillPassword(password) {
        cy.get('[data-test="password"]').type(password);
    }

    clickLogin() {
        cy.get('[data-test="login-button"]').click();
    }
    loginWith(username, password){
        this.fillUsername(username);
        this.fillPassword(password);
        this.clickLogin();
    }

    verifyLoginSucces(){
        //  Validation to ensure the URL points to the inventory page
        cy.url().should('include', '/inventory.html');
        // Validation to ensure there are elements on the page after login
        cy.get('[data-test="inventory-list"]').should('be.visible');
        // Validation to ensure the shopping cart appears
        cy.get('[data-test="shopping-cart-link"]').should('be.visible');
    }

    verifyErrorMessage(text){
        // Validation to ensure there is an error message
        cy.get('[data-test="error"]').should('contain', text);

    }
}

export default new LoginPage();
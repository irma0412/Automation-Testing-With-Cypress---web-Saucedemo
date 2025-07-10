describe ("Testing Web SauceDemo", () => {
    beforeEach(() =>{
        cy.visit('https://www.saucedemo.com/')
    });

    afterEach(() =>{
        cy.wait(1000)
    })

    it ("✅Succes login", () => {
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
             
        // Validation to ensure the URL points to the inventory page
        cy.url().should('include', '/inventory.html');
        // Validation to ensure there are elements on the page after login
        cy.get('.inventory_list').should('be.visible');
        // Validation to ensure the shopping cart appears
        cy.get('.shopping_cart_link').should('be.visible');
        cy.log('✅succes login');
        
        
    });

    it("❌Failed login because username invalid", ()=>{
        cy.get('#user-name').type('standard');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        // validation to ensure there is an error message
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');
        cy.log('❌Failed login because username invalid');
   
    });

    it("❌Failed login because password invalid", ()=>{
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret');
        cy.get('#login-button').click();
        // validation to ensure there is an error message
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');
        cy.log('❌Failed login because password invalid');
        
     
    });

    it("❌Failed login because username&password invalid", ()=>{
        cy.get('#user-name').type('standard');
        cy.get('#password').type('secret');
        cy.get('#login-button').click();
        // validation to ensure there is an error message
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');
        cy.log('❌Failed login because username&password invalid');
   
    });

});
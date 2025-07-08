describe("Logout form Web SauceDemo", ()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com");
        cy.xpath('//*[@id="user-name"]').type('standard_user');
        cy.xpath('//*[@id="password"]').type('secret_sauce');
        cy.xpath('//*[@id="login-button"]').click();

    });
    afterEach(()=>{
        cy.wait(1000);
        cy.url().should('eq', 'https://www.saucedemo.com/');

    });

    it("✅Logout from homepage", ()=>{
        cy.xpath('//*[@id="react-burger-menu-btn"]').click();
        cy.xpath('//*[@id="logout_sidebar_link"]').click()
        cy.log('✅Succes logout');
    });
    it("✅Logout from shopping cart page", ()=>{
        cy.xpath('//*[@id="shopping_cart_container"]/a').click();
        cy.xpath('//*[@id="react-burger-menu-btn"]').click();
        cy.xpath('//*[@id="logout_sidebar_link"]').click()
        cy.log('✅Succes logout');
    });
    it("✅ Logout from checkout page", ()=>{
        cy.xpath('//*[@id="shopping_cart_container"]/a').click();
        cy.xpath('//*[@id="checkout"]').click();
        // logout
        cy.xpath('//*[@id="react-burger-menu-btn"]').click();
        cy.xpath('//*[@id="logout_sidebar_link"]').click()
        cy.log('✅Succes  logout');

    });
        it("✅ Logout from payment page", ()=>{
        // add produk to card
        cy.xpath('//*[@id="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.xpath('//*[@id="add-to-cart-sauce-labs-onesie"]').click();
        // button shopping cart
        cy.xpath('//*[@id="shopping_cart_container"]/a').click();
        cy.xpath('//*[@id="checkout"]').click();

        // input name and post code
        cy.xpath('//*[@id="first-name"]').type('Irma');
        cy.xpath('//*[@id="last-name"]').type('Suryani');
        cy.xpath('//*[@id="postal-code"]').type('11223');
        cy.xpath('//*[@id="continue"]').click();
        // logout
        cy.xpath('//*[@id="react-burger-menu-btn"]').click();
        cy.xpath('//*[@id="logout_sidebar_link"]').click()
        cy.log('✅Succes  logout');

    });
});
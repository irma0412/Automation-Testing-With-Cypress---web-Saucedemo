describe("Checkout Produk Web SauceDemo", ()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com");
        cy.xpath('//*[@id="user-name"]').type('standard_user');
        cy.xpath('//*[@id="password"]').type('secret_sauce');
        cy.xpath('//*[@id="login-button"]').click();

    });
    afterEach(()=>{
        cy.wait(1000);
    });

    it("✅Checkout 2 product", ()=>{
        // add produk to card
        cy.xpath('//*[@id="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.xpath('//*[@id="add-to-cart-sauce-labs-fleece-jacket"]').click();

        // click button to checkout 
        cy.xpath('//*[@id="shopping_cart_container"]/a').click();
        cy.xpath('//*[@id="checkout"]').click();

        // input name and post code
        cy.xpath('//*[@id="first-name"]').type('Irma');
        cy.xpath('//*[@id="last-name"]').type('Suryani');
        cy.xpath('//*[@id="postal-code"]').type('11223');
        
        // click button to payment
        cy.xpath('//*[@id="continue"]').click();
        cy.xpath('//*[@id="finish"]').click();
        cy.log('✅succes payment');
    });
    
    it("✅Checkout 3 product", ()=>{
        // add produk to card
        cy.xpath('//*[@id="add-to-cart-sauce-labs-bike-light"]').click();
        cy.xpath('//*[@id="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.xpath('//*[@id="add-to-cart-sauce-labs-onesie"]').click();

        // click button to checkout 
        cy.xpath('//*[@id="shopping_cart_container"]/a').click();
        cy.xpath('//*[@id="checkout"]').click();

        // input name and post code
        cy.xpath('//*[@id="first-name"]').type('Irma');
        cy.xpath('//*[@id="last-name"]').type('Suryani');
        cy.xpath('//*[@id="postal-code"]').type('11223');
        
        // click button to payment
        cy.xpath('//*[@id="continue"]').click();
        cy.xpath('//*[@id="finish"]').click();
        cy.log('✅succes payment');
    });
    it("❌Checkout without product", ()=>{
    // ✅ Expected: User should NOT be able to proceed checkout without any product
    // 🐞 Actual: User still can finish checkout → this is a BUG in the system

        // click button to checkout 
        cy.xpath('//*[@id="shopping_cart_container"]/a').click();
        cy.xpath('//*[@id="checkout"]').click();


        // input name and post code
        cy.xpath('//*[@id="first-name"]').type('Irma');
        cy.xpath('//*[@id="last-name"]').type('Suryani');
        cy.xpath('//*[@id="postal-code"]').type('11223');
        
        // click button to payment
        cy.xpath('//*[@id="continue"]').click();
        cy.xpath('//*[@id="finish"]').click();
       
    });
  
    it("✅cancel checkout", ()=>{
        // add produk to card
        cy.xpath('//*[@id="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.xpath('//*[@id="add-to-cart-sauce-labs-onesie"]').click();

        // click button to checkout 
        cy.xpath('//*[@id="shopping_cart_container"]/a').click();
        cy.xpath('//*[@id="checkout"]').click();

        // input name and post code
        cy.xpath('//*[@id="first-name"]').type('Irma');
        cy.xpath('//*[@id="last-name"]').type('Suryani');
        cy.xpath('//*[@id="postal-code"]').type('11223');
        
        // click button cancel
        cy.xpath('//*[@id="cancel"]').click();
        cy.xpath('//*[@id="continue-shopping"]').click();
        cy.log('✅succes cancel payment');

    });
});
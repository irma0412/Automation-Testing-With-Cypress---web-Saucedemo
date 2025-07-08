describe ("Testing Web SauceDemo", () => {
    beforeEach(() =>{
        cy.visit('https://www.saucedemo.com/')
    });

    afterEach(() =>{
        cy.wait(1000)
    })

    it ("✅Login Sukses", () => {
        cy.xpath('//*[@id="user-name"]').type('standard_user');
        cy.xpath('//*[@id="password"]').type('secret_sauce');
        cy.xpath('//*[@id="login-button"]').click();
        cy.log('✅succes login');
        
        
    });

    it("❌Login Gagal Username Invalid", ()=>{
        cy.xpath('//*[@id="user-name"]').type('standard');
        cy.xpath('//*[@id="password"]').type('secret_sauce');
        cy.xpath('//*[@id="login-button"]').click();
        cy.log('❌Failed login because username invalid');
       
    });

    it("❌Login Gagal Password Invalid", ()=>{
        cy.xpath('//*[@id="user-name"]').type('standard_user');
        cy.xpath('//*[@id="password"]').type('secret');
        cy.xpath('//*[@id="login-button"]').click();
        cy.log('❌Failed login because password invalid');
     
    });

    it("❌Login Gagal Username&Password Invalid", ()=>{
        cy.xpath('//*[@id="user-name"]').type('standard');
        cy.xpath('//*[@id="password"]').type('secret');
        cy.xpath('//*[@id="login-button"]').click();
        cy.log('❌Failed login because username&password invalid');
   
    });

});
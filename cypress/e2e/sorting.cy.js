describe("Sortir Produk Web SauceDemo", ()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com");
        cy.xpath('//*[@id="user-name"]').type('standard_user');
        cy.xpath('//*[@id="password"]').type('secret_sauce');
        cy.xpath('//*[@id="login-button"]').click();

    });
    afterEach(()=>{
        cy.wait(1000);
    });

    it("✅Sortir produk Z to A", ()=>{
        cy.xpath('//*[@id="header_container"]/div[2]/div/span/select').select('za');
        cy.log('✅Succes sortir product z to a');
    });
    it("✅Sortir produk low to high", ()=>{
        cy.xpath('//*[@id="header_container"]/div[2]/div/span/select').select('lohi');
        cy.log('✅Succes sortir product low to high');
    });
    it("✅Sortir produk high to low", ()=>{
        cy.xpath('//*[@id="header_container"]/div[2]/div/span/select').select('hilo');
        cy.log('✅Succes sortir product high to low');
    });
});
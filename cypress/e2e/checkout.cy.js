import checkoutPage from "../support/pages/checkoutPage";
import loginPages from "../support/pages/loginPages";

describe("Checkout Produk Web SauceDemo", ()=>{
    beforeEach(()=>{
        loginPages.visit();
        loginPages.fillUsername('standard_user');
        loginPages.fillPassword('secret_sauce');
        loginPages.clickLogin();
        loginPages.verifyLoginSucces();

    });
    afterEach(()=>{
        cy.wait(1000);
    });

    it("✅Checkout 2 product", ()=>{
        // add produk to cart
        checkoutPage.addToCart(['sauce-labs-bolt-t-shirt', 'sauce-labs-fleece-jacket']);
        checkoutPage.openCart();
        // validation
        checkoutPage.verifyOnCartPage();
        checkoutPage.clickCheckout();
        checkoutPage.fillCustomerInfo('irma', 'suryani', '11223');
        checkoutPage.clickContinue();
        checkoutPage.clickFinish();
        // validation
        checkoutPage.verifySuccesCheckout();         
        cy.log('✅Succes to checkout 2 products');
    });
    
    it("✅Checkout 3 product", ()=>{
        // add produk to cart
        checkoutPage.addToCart(['sauce-labs-bike-light', 'sauce-labs-fleece-jacket', 'sauce-labs-onesie']);
        checkoutPage.openCart();
        // validation
        checkoutPage.verifyOnCartPage();
        checkoutPage.clickCheckout();
        checkoutPage.fillCustomerInfo('irma', 'suryani', '11223');
        checkoutPage.clickContinue();
        checkoutPage.clickFinish();
        // validation
        checkoutPage.verifySuccesCheckout();
        cy.log('✅Succes to checkout 3 products');
    });
    it("❌Checkout without product", ()=>{
  
        // click button to checkout 
        checkoutPage.openCart();
        // validation
         checkoutPage.verifyOnCartPage();        
     
        checkoutPage.clickCheckout();
        checkoutPage.fillCustomerInfo('irma', 'suryani', '11223');
        checkoutPage.clickContinue();
        checkoutPage.clickFinish(); 
        // validation       
        // expectation failed, because this is a BUG from SauceDemo — it shouldn't be possible to finish without items
        checkoutPage.verifySuccesCheckout();
        cy.log('BUG: Checkout successful even though cart is empty (this should not be possible)');
 
    });
  
    it("✅cancel checkout", ()=>{     
        // add produk to cart
        checkoutPage.addToCart(['sauce-labs-bolt-t-shirt', 'sauce-labs-fleece-jacket']);
        checkoutPage.openCart();
        // validation
        checkoutPage.verifyOnCartPage();
        checkoutPage.clickCheckout();
        checkoutPage.fillCustomerInfo('irma', 'suryani', '11223');
        checkoutPage.cancelCheckout();
        checkoutPage.backToShopping();
        // validation
        cy.url().should('include', 'inventory.html');
        cy.log('✅Checkout is canceled and returned to the product page');

    });
});
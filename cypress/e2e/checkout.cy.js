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
 

    it("✅Checkout 2 product", ()=>{
     
        checkoutPage.completeCheckoutWith(['sauce-labs-bolt-t-shirt', 'sauce-labs-fleece-jacket']);         
        cy.log('✅Succes to checkout 2 products');
    });
    
    it("✅Checkout 3 product", ()=>{
       
        checkoutPage.completeCheckoutWith(['sauce-labs-bike-light', 'sauce-labs-fleece-jacket', 'sauce-labs-onesie']);
        cy.log('✅Succes to checkout 3 products');
    });
    it("❌Checkout without product", ()=>{
  
        // click button to checkout 
        checkoutPage.openCart();
        checkoutPage.verifyOnCartPage(); 
        checkoutPage.verifyCartIsEmpty();           
        checkoutPage.clickCheckout();
        checkoutPage.verifyOncheckoutPageStep1(); 
        checkoutPage.fillCustomerInfo();
        checkoutPage.clickContinue();
        checkoutPage.verifyOnCheckoutPageStep2(); 
        checkoutPage.clickFinish(); 
        // validation       
        // expectation failed, because this is a BUG from SauceDemo — it shouldn't be possible to finish without items
        checkoutPage.verifySuccesCheckout();
        cy.log('⚠ BUG: Checkout successful even though cart is empty (this should not be possible)');
 
    });
  
    it("✅cancel checkout", ()=>{     
        // add produk to cart
        checkoutPage.addToCart(['sauce-labs-bolt-t-shirt', 'sauce-labs-fleece-jacket']);
        checkoutPage.openCart(); 
        checkoutPage.verifyOnCartPage(); 
        checkoutPage.clickCheckout(); 
        checkoutPage.verifyOncheckoutPageStep1(); 
        checkoutPage.fillCustomerInfo();
        checkoutPage.cancelCheckout();        
        checkoutPage.backToShopping();
        checkoutPage.verifyOninventoryPage(); 
        cy.log('✅Checkout is canceled and returned to the product page');

    });
});
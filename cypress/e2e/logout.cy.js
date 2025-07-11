import checkoutPage from "../support/pages/checkoutPage";
import loginPages from "../support/pages/loginPages";
import logoutPage from "../support/pages/logoutPage";

describe("Logout form Web SauceDemo", ()=>{
    beforeEach(()=>{
        loginPages.visit();
        loginPages.loginWith('standard_user', 'secret_sauce');
        loginPages.verifyLoginSucces();
    
    });
    afterEach(()=>{
       
        logoutPage.verifySuccesLogout();
        cy.log('✅Succes logout')

    });

    it("✅Logout from homepage", ()=>{
        logoutPage.buttonLogout(); 

    });

    it("✅Logout from shopping cart page", ()=>{
        checkoutPage.openCart();
        checkoutPage.verifyOnCartPage();
        logoutPage.buttonLogout();
    });
    it("✅ Logout from checkout page", ()=>{
        checkoutPage.openCart();
        checkoutPage.verifyOnCartPage();
        checkoutPage.clickCheckout();
        checkoutPage.verifyOncheckoutPageStep1();
        logoutPage.buttonLogout();     
               
    });
        it("✅ Logout from payment page", ()=>{
        // add produk to card
       checkoutPage.addToCart(['sauce-labs-bolt-t-shirt', 'sauce-labs-fleece-jacket']);
       checkoutPage.openCart();
       checkoutPage.verifyOnCartPage();
       checkoutPage.clickCheckout();
       checkoutPage.verifyOncheckoutPageStep1();
       checkoutPage.fillCustomerInfo('irma', 'suryani', '11223');
       checkoutPage.clickContinue();
       checkoutPage.verifyOnCheckoutPageStep2();
       logoutPage.buttonLogout();     
        

    });
});
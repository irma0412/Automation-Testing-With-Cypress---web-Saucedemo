class CheckoutPage{
    addToCart(productIds=[]){
        productIds.forEach(id =>{
           cy.get(`[data-test="add-to-cart-${id}"]`).click();

        });
    }
    openCart(){
        cy.get('[data-test="shopping-cart-link"]').click();
    }
    clickCheckout(){
        cy.get('[data-test="checkout"]').click();
    }
    fillCustomerInfo(firstName = 'irma', lastName = 'suryani', postalCode = '11223'){
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
    }
    clickContinue(){
        cy.get('[data-test="continue"]').click();
    }
    clickFinish(){
        cy.get('[data-test="finish"]').click();
    }
    cancelCheckout(){
        cy.get('[data-test="cancel"]').click();
    }
    backToShopping() {
        cy.get('[data-test="continue-shopping"]').click();
    }
    // validation to ensure the URL point to the checkout-complete.html
    verifySuccesCheckout(){
        cy.url().should('include','checkout-complete.html');
        cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!');
    }
    verifyOnCartPage(){
        cy.url().should('include', 'cart.html');
    }
    verifyOncheckoutPageStep1(){
        cy.url().should('include', 'checkout-step-one.html');
    }
    verifyOnCheckoutPageStep2(){
        cy.url().should('include', 'checkout-step-two.html');
    }
    verifyOninventoryPage(){
        cy.url().should('include', 'inventory.html');
    }
    verifyCartIsEmpty() {
    cy.get('.cart_item').should('not.exist');
    }

    completeCheckoutWith(products = []) {
    this.addToCart(products);
    this.openCart();
    this.clickCheckout();
    this.verifyOncheckoutPageStep1();
    this.fillCustomerInfo();
    this.clickContinue();
    this.verifyOnCheckoutPageStep2();
    this.clickFinish();
    this.verifySuccesCheckout();
}


}
export default new CheckoutPage();

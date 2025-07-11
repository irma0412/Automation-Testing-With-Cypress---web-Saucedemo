class CheckoutsPage{
    addToCart(productIds=[]){
        productIds.forEach(id =>{
            cy.get('[data-test="add-to-cart-${id}]').click();
        });
    }
    openCart(){
        cy.get('[data-test="shopping-cart-link"]').click();
    }
    clickCheckout(){
        cy.get('[data-test="checkout"]').click();
    }
    fillCustomerInfo(){
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
    }
    verifyOnCartPage(){
        cy.url().should('include', 'cart.html');
    }

}
export default new CheckoutsPage();

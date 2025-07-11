import loginPages from "../support/pages/loginPages";
import sortingPage from "../support/pages/sortingPage";

describe("Sortir Produk Web SauceDemo", ()=>{
    beforeEach(()=>{
        loginPages.visit();
        loginPages.loginWith('standard_user', 'secret_sauce');  
        loginPages.verifyLoginSucces()


    });
   

    it("✅Sorted product Z to A", ()=>{
        sortingPage.selectSorting('za');
        sortingPage.verifyNameSortedByZA();
        cy.log('✅Succes sortir product z to a');
    });
    it("✅Sorted product low to high", ()=>{
        sortingPage.selectSorting('lohi');
        sortingPage.verifyPriceSortedByLowToHigh();
        cy.log('✅Succes sortir product low to high');
    });
    it("✅Sorted product high to low", ()=>{
        sortingPage.selectSorting('hilo');
        sortingPage.verifyPriceSortedByHighToLow();
        cy.log('✅Succes sortir product high to low');
    });
});
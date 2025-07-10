import loginPages from "../support/pages/loginPages";
import sortingPage from "../support/pages/sortingPage";

describe("Sortir Produk Web SauceDemo", ()=>{
    beforeEach(()=>{
        loginPages.visit();
        loginPages.fillUsername('standard_user');
        loginPages.fillPassword('secret_sauce');
        loginPages.clickLogin();     
        sortingPage.verifyOnInventoryPage();


    });
    afterEach(()=>{
        cy.wait(1000);
    });

    it("✅Sorted product Z to A", ()=>{
        sortingPage.selectSorting('za');
        sortingPage.verifyNameSortedByZA();
        cy.log('✅Succes sortir product z to a');
    });
    it("✅Sorted product low to high", ()=>{
        sortingPage.selectSorting('lohi');
        sortingPage.verifyDataSortedByLohi();
        cy.log('✅Succes sortir product low to high');
    });
    it("✅Sorted product high to low", ()=>{
        sortingPage.selectSorting('hilo');
        sortingPage.verifyDataSortedByHilo();
        cy.log('✅Succes sortir product high to low');
    });
});
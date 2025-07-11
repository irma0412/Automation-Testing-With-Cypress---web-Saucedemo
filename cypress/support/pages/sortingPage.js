class SortingPage{

selectSorting(optionValue){
    cy.get('[data-test="product-sort-container"]').select(optionValue);

}
getAllProductNames() {
   return cy.get('[data-test="inventory-item-name"]');

}
getAllProductPrices(){
    return cy.get('[data-test="inventory-item-price"]');
}
// validation to ensure the products are displayed from Z to A
verifyNameSortedByZA(){
    this.getAllProductNames().then(($els)=>{
        const names = [...$els].map(el => el.innerText);
        const sorted = [...names].sort().reverse(); //reverse is used to sort the reverse of z-a, if a-z then don't use reverse
        expect(names).to.deep.equal(sorted);
    });
}
// validation to ensure the products are displayed from lowest to highest price
verifyPriceSortedByLowToHigh(){
    this.getAllProductPrices().then(($els)=>{
        const prices = [...$els].map(el => parseFloat(el.innerText.replace('$', '')));
        const sorted = [...prices].sort((a,b)=> a-b);
        expect(prices).to.deep.equal(sorted);
    });
}
// validation to ensure the products are displayed from highest to lowest price
verifyPriceSortedByHighToLow(){
    this.getAllProductPrices().then(($els)=>{
        const prices = [...$els].map(el => parseFloat(el.innerText.replace('$', '')));
        const sorted = [...prices].sort((a,b)=> b-a );
        expect(prices).to.deep.equal(sorted);
    });
}
} 
export default new SortingPage();

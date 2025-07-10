class inventoryPage{
verifyOnInventoryPage(){
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible');
}
selectSorting(optionValue){
    cy.get('.product_sort_container').select(optionValue);

}
getAllProductNames() {
   return cy.get('.inventory_item_name ');

}
getAllProductPrices(){
    return cy.get('.inventory_item_price');
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
verifyDataSortedByLohi(){
    this.getAllProductPrices().then(($els)=>{
        const prices = [...$els].map(el => parseFloat(el.innerText.replace('$', '')));
        const sorted = [...prices].sort((a,b)=> a-b);
        expect(prices).to.deep.equal(sorted);
    });
}
// validation to ensure the products are displayed from highest to lowest price
verifyDataSortedByHilo(){
    this.getAllProductPrices().then(($els)=>{
        const prices = [...$els].map(el => parseFloat(el.innerText.replace('$', '')));
        const sorted = [...prices].sort((a,b)=> b-a );
        expect(prices).to.deep.equal(sorted);
    });
}
} 
export default new inventoryPage();
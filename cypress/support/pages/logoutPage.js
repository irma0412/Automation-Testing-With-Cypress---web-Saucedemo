class LogoutPage{
    buttonLogout(){
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"]').click();
        cy.log('Klik tombol logout');
    }
    
    verifySuccesLogout(){
        cy.url().should('eq', 'https://www.saucedemo.com/');
    }
}
export default new LogoutPage();
import loginPages from "../support/pages/loginPages";

describe ("Testing Web SauceDemo", () => {
    beforeEach(() =>{
        loginPages.visit();
    });

   

    it ("✅Succes login", () => {
        loginPages.fillUsername('standard_user');
        loginPages.fillPassword('secret_sauce');
        loginPages.clickLogin();           
        // Validation
        loginPages.verifyLoginSucces()           
        
    });

    it("❌Failed login because username invalid", ()=>{
        loginPages.fillUsername('standard');
        loginPages.fillPassword('secret_sauce');
        loginPages.clickLogin();
        // validation to ensure there is an error message
        loginPages.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
   
    });

    it("❌Failed login because password invalid", ()=>{
        loginPages.fillUsername('standard_user');
        loginPages.fillPassword('secret');
        loginPages.clickLogin();
        // validation to ensure there is an error message
        loginPages.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
        
     
    });

    it("❌Failed login because username&password invalid", ()=>{
        loginPages.fillUsername('standard');
        loginPages.fillPassword('secret');
        loginPages.clickLogin();
        // validation to ensure there is an error message
        loginPages.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
   
    });

});
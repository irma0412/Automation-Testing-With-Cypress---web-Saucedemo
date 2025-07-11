import loginPages from "../support/pages/loginPages";

describe ("Testing Web SauceDemo", () => {
    beforeEach(() =>{
        loginPages.visit();
    });

   

    it ("✅Succes login", () => {
        loginPages.loginWith('standard_user', 'secret_sauce');   
        loginPages.verifyLoginSucces()           
        
    });

    it("❌Failed login because username invalid", ()=>{
        loginPages.loginWith('standard', 'secret_sauce');
        // validation to ensure there is an error message
        loginPages.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
   
    });

    it("❌Failed login because password invalid", ()=>{
        loginPages.loginWith('standard_user', 'secret');
        // validation to ensure there is an error message
        loginPages.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
        
     
    });

    it("❌Failed login because username&password invalid", ()=>{
        loginPages.loginWith('standard', 'secret');
        // validation to ensure there is an error message
        loginPages.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
   
    });

});
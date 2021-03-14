var LoginPageObj = require('../pageobjects/login.page');
var LoginPage = new LoginPageObj();

var DashboardPageObj = require('../pageobjects/dashboard.page');
var DashboardPage = new DashboardPageObj();

describe('Login Validation', () => {
    beforeEach(() => {  
        LoginPage.open();
    })

    afterEach(() => {
        LoginPage.close();
    })

    it('should login with valid credentials', () => {
        LoginPage.login('njdemo@njtest.com', 'njdemo1234');
        loginValidation();
        
    });

    it('should not be able to login with incorrect password', () => {
        LoginPage.login('njdemo@njtest.com', 'njdemo123456');
        loginErrValidation();
        
    });

    it('should not be able to login with no mathing records - email', () => {
        LoginPage.login('mpdaroy@yahoo.com', 'njdemo1234');
        loginErrValidation();
    });
});
//For positive login verification
function loginValidation(){
    expect(DashboardPage.dbHeader).toBeExisting();
    expect(DashboardPage.dbHeader).toHaveTextContaining('Dashboard');
   
    expect(DashboardPage.dbWelcomeText).toBeExisting();
    expect(DashboardPage.dbWelcomeText).toHaveTextContaining('You are logged in!');
}
//For negative login verification
function loginErrValidation(){
    expect(LoginPage.loginErr).toBeExisting();
    expect(LoginPage.loginErr).toHaveTextContaining('These credentials do not match our records.');
}


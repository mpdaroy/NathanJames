
const Page = require('./page.js')

class LoginPage extends Page {
    //define selectors using getter methods

    get inputUsername () { return $('#email') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }
    get loginErr () { return $('//span[@class="invalid-feedback"]/strong') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    //overwrite specifc options to adapt it to page object
    open () {
        return super.open('login');
    }

    //reload session to simulate logout
    close () {
        return browser.reloadSession();      
    }
}

module.exports = LoginPage;  

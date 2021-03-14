const Page = require('./page.js')


class DashboardPage extends Page {
     //define selectors using getter methods

    get dbHeader () { return $("//div[@class='card-header']") };
    get dbWelcomeText () { return $("//div[@class='card-body']") };
    
}

module.exports = DashboardPage; 
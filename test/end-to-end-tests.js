const { By, Key, Builder, until } = require("selenium-webdriver");
var should = require("chai").should();
require("chromedriver");

// describe block
describe('Search function', () => {

    // it block. 
    it('returns only posts which contain the search term', async () => {
        // Launch the browser
        let driver = await new Builder().forBrowser("chrome").build();

            // Navigate to the application
            await driver.get("https://jason-duffy.github.io/karma-police");

            // ------------------------ Add todo's ----------------------- // 
            // Wait until cards have loaded.
            await driver.wait(until.elementsLocated(By.className("card")));

            // Get the searchbar and submit button elements.
            let searchBar = await driver.findElement(By.id("search-input"));
            let submitButton = await driver.findElement(By.id("submit-button"));

            await searchBar.sendKeys("thom");
            await submitButton.click();

            let titleElement = await driver.findElement(By.className('post-title'));
            let title = await titleElement.getText();

            // ------------------- Make assertions --------------------- //

            // Assert using chai should
            title.should.contain('thom');
            // ------------------ Close the browser ------------------- //
            await driver.quit();
    });

    it('returns a card with a no search results message when terms do not match', async () => {

    });

    it('submits on return key AND clicking submit button', async () => {

    });
});

// Test environment dependencies
const { By, Key, Builder, until } = require("selenium-webdriver");
var should = require("chai").should();
require("chromedriver");


describe('Search function', () => {
    let driver;
    let searchBar;
    let submitButton;

    // Launch the browser before all test cases in the describe block
    before(async () => {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://jason-duffy.github.io/karma-police");
        await driver.wait(until.elementsLocated(By.className("card")));
        // Find searchbar and submit button.
        searchBar = await driver.findElement(By.id("search-input"));
        submitButton = await driver.findElement(By.id("submit-button"));
    });

    // Quit the browser after all test cases in the describe block
    after(async () => {
        await driver.quit();
    });

    // it block.
    it('returns either posts or no search results message', async () => {
        await searchBar.sendKeys("thom", Key.RETURN);
        // Get all title and text elements from resulting cards. 
        let titleElements = await driver.findElements(By.className('post-title'));
        let textElements = await driver.findElements(By.className('post-text'));

        // Make array of strings from titles.
        let titleResults = [];
        for (let titleElement of titleElements) {
            let title = await titleElement.getText();
            titleResults.push(title);
        };
        // Make array of strings from post texts. 
        let textResults = [];
        for (let textElement of textElements) {
            let text = await textElement.getText();
            textResults.push(text);
        };
        // Combine arrays and convert to lower case. 
        let combinedResults = titleResults.map((title, index) => {
            return (title + ' ' + textResults[index]).toLowerCase();
        });

        // Get the no results card inner text if it's visible. 
        let noResultsText;
        try {
            let noResultsElement = await driver.findElement(
                By.className('no-search-results-card-container')
            );
            noResultsText = await noResultsElement.getText();
        } catch (error) {
            noResultsText = '';
        }

        // ------- Assertions -------- //
        combinedResults.forEach(result => {
            (result.should.contain('thom') ||
                noResultsText.should.contain('Sorry! No posts match your search term.'));
        });
    });
});

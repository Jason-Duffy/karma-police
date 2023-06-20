// Test environment dependencies
const { By, Key, Builder, until } = require("selenium-webdriver");
var should = require("chai").should();
require("chromedriver");


describe('Post sort order', () => {
    let driver;

    // Launch the browser before all test cases in the describe block
    before(async () => {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://jason-duffy.github.io/karma-police");
        await driver.wait(until.elementsLocated(By.className("card")));
    });

    // Quit the browser after all test cases in the describe block
    after(async () => {
        await driver.quit();
    });

    it('should default to sort by descending karma score', async () => {

    });

    it('clicking ascending button should change sort order', async () => {

    });

    it('releasing arrested users should keep posts ordered by karma', async () => {

    });
});
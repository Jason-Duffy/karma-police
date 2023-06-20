// Test environment dependencies
const { By, Key, Builder, until } = require("selenium-webdriver");
var should = require("chai").should();
require("chromedriver");
const { findAndClickElement } = require("./functions/helperFunctions");

describe('Subreddit selection', () => {
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

    it('should default to r/radiohead', async () => {
        // Get current URL.
        const currentUrl = await driver.getCurrentUrl();
        // ------- Assertions -------- //
        currentUrl.should.contain('r/radiohead');
    });

    it('clicking another subreddit should change url and render new posts', async () => {
        // xpath variable for next subreddit to navigate to. 
        const nextSubredditPath = '/html/body/div/div/div/div/div[4]/div/div[2]/div/ul/li[2]/a';
        await findAndClickElement(driver, nextSubredditPath);
        // Wait for cards to load. 
        await driver.wait(until.elementsLocated(By.className("card")));
        // Get current URL.
        const currentUrl = await driver.getCurrentUrl();
        // ------- Assertions -------- //
        currentUrl.should.contain('r/britishproblems');
    });
});
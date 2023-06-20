// Test environment dependencies
const { By, Key, Builder, until } = require("selenium-webdriver");
var should = require("chai").should();
require("chromedriver");


describe('Arrest action', () => {
    let driver;
    let usernameFromPost;

    // Launch the browser before all test cases in the describe block
    before(async () => {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://jason-duffy.github.io/karma-police");
        await driver.wait(until.elementLocated(By.className("arrest")));
    });

    // Quit the browser after all test cases in the describe block
    after(async () => {
        await driver.quit();
    });

    it('clicking "arrest" button should add user to arrests list', async () => {
        // Get username from first card & convert to string.
        usernameFromPost = await driver.findElement(
            By.xpath('//*[@id="card-no-0"]/div[1]/p')).getText();
        // Get arrest button element for first card & click it.
        let arrestButton = await driver.findElement(By.xpath('//*[@id="card-no-0"]/div[3]'));
        await arrestButton.click();

        // Get list of arrested users. 
        let arrestsList = await driver.findElements(By.id('arrested-name'));

        // Convert to array of strings.
        let arrestsListText = [];
        for (let element of arrestsList) {
            let username = await element.getText();
            if (username.trim() !== '') {
                arrestsListText.push(username);
            }
        }

        // -------- Assertions -------- //
        arrestsListText[0].should.equal(usernameFromPost);
    });

    it('posts from arrested users should not display', async () => {
        let visiblePostUsernames = await driver.findElements(By.className('username'));

        // Convert to array of strings.
        let visiblePostUsernamesText = [];
        for (let element of visiblePostUsernames) {
            let username = await element.getText();
            visiblePostUsernamesText.push(username);
        }

        // -------- Assertions -------- //
        visiblePostUsernamesText.should.not.contain(usernameFromPost);
    });

    it('clicking arrested username should release them & re-render their posts', async () => {
        let arrestedUsers = await driver.findElements(By.id('arrested-name'));
        // Create new array with no empty values.
        let arrestedUsersClean = [];
        for (let element of arrestedUsers) {
            let username = await element.getText();
            if (username.trim() !== '') {
                arrestedUsersClean.push(element);
            }
        }
        // Click arrested username. 
        await arrestedUsersClean[0].click();
        // Get all usernames from visible posts.
        let visiblePostUsernames = await driver.findElements(By.className('username'));
        // Convert to array of strings.
        let visiblePostUsernamesText = [];
        for (let element of visiblePostUsernames) {
            let username = await element.getText();
            if (username.trim() !== '') {
                visiblePostUsernamesText.push(username);
            }
        }

        // -------- Assertions -------- //
        visiblePostUsernamesText.should.contain(usernameFromPost);
    });

    it('clicking "release all" should release all users & re-render their posts', async () => {
        // Add first 3 users to arrested list. 
        await driver.wait(until.elementLocated(By.xpath('//*[@id="card-no-0"]/div[3]')));
        await driver.findElement(By.xpath('//*[@id="card-no-0"]/div[3]')).click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="card-no-1"]/div[3]')));
        await driver.findElement(By.xpath('//*[@id="card-no-1"]/div[3]')).click();
        await driver.wait(until.elementLocated(By.xpath('//*[@id="card-no-2"]/div[3]')));
        await driver.findElement(By.xpath('//*[@id="card-no-2"]/div[3]')).click();

        // Get list of arrested users. 
        let arrestsList = await driver.findElements(By.id('arrested-name'));

        // Convert to array of strings.
        let arrestsListText = [];
        for (let element of arrestsList) {
            let username = await element.getText();
            if (username.trim() !== '') {
                arrestsListText.push(username);
            }
        }

        // Get "release all" button and click it.
        await driver.wait(until.elementLocated(By.id('release-all')));
        let releaseAllButton = await driver.findElement(By.id('release-all'));
        await driver.sleep(5000);
        await releaseAllButton.click();

        // Get usernames from visible posts.
        let visiblePostUsernames = await driver.findElements(By.className('username'));

        // Convert to array of strings.
        let visiblePostUsernamesText = [];
        for (let element of visiblePostUsernames) {
            let username = await element.getText();
            visiblePostUsernamesText.push(username);
        }

        visiblePostUsernamesText.should.contain(arrestsListText[0]);
        visiblePostUsernamesText.should.contain(arrestsListText[1]);
        visiblePostUsernamesText.should.contain(arrestsListText[2]);
    });
});
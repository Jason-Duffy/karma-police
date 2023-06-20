// Test environment dependencies
const { By, Key, Builder, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
var should = require("chai").should();
require("chromedriver");

describe('Arrest action', () => {
    let driver;
    let usernameFromPost;

    // Helper function to reliably find and click elements.
    const findAndClickElement = async ( xpath ) => {
        await driver.wait(until.elementLocated(By.xpath(xpath)));
        await driver.wait(until.elementIsVisible(driver.findElement(By.xpath(xpath))));
        await driver.findElement(By.xpath(xpath)).click();
    }
    
    before(async () => {
        // Configure Chrome options
        const chromeOptions = new chrome.Options();

        // Create the driver with desired capabilities
        chromeOptions.addArguments("--ignore-certificate-errors");
        chromeOptions.addArguments("--ignore-ssl-errors");
        driver = await new Builder()
            .forBrowser("chrome")
            .setChromeOptions(chromeOptions)
            .build();

        // Launch the browser before all test cases in the describe block.
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
        // xpath variable for first card in the page.
        const cardPath = '//*[@id="card-no-0"]/div[3]';

        // Click "Arrest" on the first 3 posts.
        for (let i = 0; i < 3; ++i) {
            await findAndClickElement(cardPath);
        }
        // Wait for the last card to disappear so the release button is clickable.
        await driver.sleep(500);

        // Get list of arrested users as elements. 
        let arrestsList = await driver.findElements(By.id('arrested-name'));

        // Convert element list to array of strings.
        let arrestsListText = [];
        for (let element of arrestsList) {
            let username = await element.getText();
            if (username.trim() !== '') {
                arrestsListText.push(username);
            }
        }
        // xpath variable for Release button (full path). 
        const buttonPath = '/html/body/div/div/div/div/div[4]/div/div[3]/div/button';

        // Get "release all" button and click it.
        await findAndClickElement(buttonPath);

        // Get usernames from visible posts.
        let visiblePostUsernames = await driver.findElements(By.className('username'));

        // Convert to array of strings.
        let visiblePostUsernamesText = [];
        for (let element of visiblePostUsernames) {
            let username = await element.getText();
            visiblePostUsernamesText.push(username);
        }

        // -------- Assertions -------- //
        visiblePostUsernamesText.should.contain(arrestsListText[0]);
        visiblePostUsernamesText.should.contain(arrestsListText[1]);
        visiblePostUsernamesText.should.contain(arrestsListText[2]);
    });
});
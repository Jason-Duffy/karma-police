const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function test_case() {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://jason-duffy.github.io/karma-police");
    await driver.findElement(By.id("britishproblems")).sendKeys(Key.RETURN);
    setInterval(function () {
        driver.quit();
    }, 10000);
}

test_case();
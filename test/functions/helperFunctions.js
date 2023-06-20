const { By, until } = require("selenium-webdriver");


// Helper function to reliably find and click elements.
const findAndClickElement = async (driver, xpath, timeout = 5000) => {
    await driver.wait(until.elementLocated(By.xpath(xpath)),
        timeout,
        'Element not found'
    );

    await driver.wait(
        until.elementIsVisible(driver.findElement(By.xpath(xpath))),
        timeout,
        'Element not visible'
    );

    await driver.findElement(By.xpath(xpath), timeout, 'Click timeout').click();
};

module.exports = {
    findAndClickElement
};
'use strict';
var driver,
    Promise = require('selenium-webdriver').promise,
    Until = require('selenium-webdriver').until;

function BasePage() {
    this.driver = driver;
}

BasePage.prototype.visit = function(url) {
    this.driver.get(url);
};

BasePage.prototype.find = function(locator) {
    return this.driver.findElement(locator);
};

BasePage.prototype.click = function(locator) {
    this.find(locator).click();
};

BasePage.prototype.type = function(locator, inputText) {
    this.find(locator).sendKeys(inputText);
};

BasePage.prototype.isDisplayed = function(locator) {
    return this.find(locator).isDisplayed();
};

BasePage.prototype.waitForIsDisplayed = function(locator, timeout = 30000) {
    var defer = Promise.defer();
    var driver = this.driver;
    driver.wait(Until.elementLocated(locator), timeout).then(function() {
        var element = driver.findElement(locator);
        driver.wait(Until.elementIsVisible(element), timeout).then(function() {
            defer.fulfill(true);
        }, function(error) {
            if (error.name === 'NoSuchElementError') {
                defer.fulfill(false);
            } else {
                defer.reject(error);
            }
        });
    });
    return defer.promise;
};

module.exports = BasePage;

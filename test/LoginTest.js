'use strict';
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var assert = require('assert');
var LoginPage = require('../pages/LoginPage');

test.describe('Login', function() {
    this.timeout(40000);
    var driver;
    var login;

    test.beforeEach(function() {
        driver = new webdriver.Builder().forBrowser('firefox').build();
        login = new LoginPage(driver);
    });

    test.afterEach(function() {
        driver.manage().deleteAllCookies();
        driver.quit();
    });

    test.it('with valid credentials', function() {
        login.with('tomsmith', 'SuperSecretPassword!');
        login.successMessagePresent().then(function(elementDisplayed) {
            assert.equal(elementDisplayed, false, "Success message not displayed");
        });
    });

    test.it('with invalid credentials', function() {
        login.with('tomsmith', 'bad password');
        login.failureMessagePresent().then(function(elementDisplayed) {
            assert.equal(elementDisplayed, true, 'Failure message not displayed');
        });
    });
});

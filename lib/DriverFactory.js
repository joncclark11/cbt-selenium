'use strict';
var webdriver = require('selenium-webdriver');
var SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;
var request = require('request');
var config = require('./config');
var driver,
    sessionId = null;

var username = '';
var authkey = '';

function DriverFactory() {
    this.build();
}

var browsers = [
        { browserName: 'firefox', os_api_name: 'Win7-C2', browser_api_name: 'FF27', screen_resolution: '1024x768' },
        { browserName: 'chrome', os_api_name: 'Mac10.9', browser_api_name: 'Chrome40x64', screen_resolution: '1024x768' },
        { browserName: 'internet explorer', os_api_name: 'Win8.1', browser_api_name: 'IE11', screen_resolution: '1024x768' }
];

function getFields(input, field) {
    var output = [];
    for (var i=0; i < input.length; i++) {
        output.push(input[i][field]);
    }
    return output;
}

var cbtCaps = browsers.map(function(browser) {
    return {
        name: 'Selenium ' + browser.browserName + ' Test Example',
        build:  '1.0',

        browserName: browser.browserName, // <---- this needs to be the browser type in lower case: firefox, internet explorer, chrome, opera, or safari
        browser_api_name: browser.browser_api_name,
        os_api_name: browser.os_api_name,
        screen_resolution: browser.screen_resolution,

        record_video: "true",
        record_network: "true",
        record_snapshot:  "false",

        username: username,
        password: authkey
    };
});

DriverFactory.prototype.build = function() {
    var builder;
    var url = "http://" + username + ":" + authkey + "@hub.crossbrowsertesting.com:80/wd/hub";

    builder = new webdriver.Builder().usingServer(url);
    builder.withCapabilities(cbtCaps.shift());

    this.driver = builder.build();
    this.driver.getSession().then(function(sessionid) {
        sessionId = sessionid.id_;
        console.log('Session ID: ' + sessionId);
        console.log('See your test run at: https://app.crossbrowsertesting.com/selenium/' + sessionId);
    });
};

DriverFactory.prototype.quit = function(testName) {
    if (config.host === 'cbt') {
        this.driver.getTitle(testName);
    }
    this.driver.quit().then(function() {
        if (config.host === 'cbt') {
            console.log('https://app.crossbrowsertesting.com/selenium/' + sessionId);
        }
    });
};

module.exports = DriverFactory;

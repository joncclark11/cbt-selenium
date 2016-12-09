'use strict';
var webdriver = require('selenium-webdriver');
var config = require('./config');
var driver,
    sessionId;

function DriverFactory() {
    this.build();
}

DriverFactory.prototype.build = function() {
    var builder;
    if (config.host === 'saucelabs') {
        var url = "http://ondemand.saucelabs.com:80/wd/hub";
        builder = new webdriver.Builder().usingServer(url);
        builder.withCapabilities({
            name : 'Google Search - Selenium Test Example',
            build :  '1.0',

            browserName : capability.browserName, // <---- this needs to be the browser type in lower case: firefox, internet explorer, chrome, opera, or safari
            browser_api_name : capability.browser_api_name,
            os_api_name : capability.os_api_name,
            screen_resolution : capability.screen_resolution,

            record_video : "true",
            record_network : "true",
            record_snapshot :  "false",

            username : username,
            password : authkey
        });
    } else if (config.host === 'localhost') {
        var vendorDirectory = process.cwd() + '/vendor';
        process.env.PATH = vendorDirectory + ":$PATH";
        builder = new webdriver.builder().forBrowser(config.browser);
    }
    this.driver = builder.build();
    this.driver.getSession().then(function(sessionid) {
        sessionId = sessionid.id_;
    });
};

DriverFactory.prototype.quit = function() {
    this.driver.quit();
};

module.exports = DriverFactory;

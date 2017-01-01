# Crossbrowsertesting Selenium
Automated UI testing using crossbrowsertesting.com's selenium api.


## Installation
__Clone the repo:__

git@github.com:joncclark11/cbt-selenium.git


### Installing The Dependencies

This tool is written with Selenium Webdriver's nodejs bindings. To use cbt-selenium you must have the latest version of [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) installed.

If you're not sure that Nodejs is installed just type `node -v` in a terminal window. You can do the same for npm by typing `npm -v`.

__Install Node Dependencies:__

From the root of the cbt-selenium project, type `npm install`. This will download all of the necessary dependencies.


## Usage
Tests are written with [Selenium-Webdriverjs](https://github.com/SeleniumHQ/selenium/tree/master/javascript/node/selenium-webdriver) and [Mocha](https://mochajs.org/).

Selenium has a popular design pattern known as the [Page Object Pattern](https://github.com/SeleniumHQ/selenium/wiki/PageObjects). Page objects abstract the functionality found on a given page you want to test. The benefit is that your page objects and their tests are compact, easy to write, and modular.


### Writing New Tests


### Running Tests
To get the full benefit of this testing suite, the [Grunt](http://gruntjs.com/) task runner is utilized to run all tests.

In your terminal window, just type `grunt` and watch the magic happen. Your terminal will start log each test as it runs and will give you test results as a test finishes.


__Viewing The Results__

Tests are run through [Crossbrowsertesting's](https://crossbrowsertesting.com/apidocs/v3/) selenium api. You can login to the test center and see the progress or the results of each test.


## Resources
* [Selenium WebdriverJS Documentation](https://seleniumhq.github.io/selenium/docs/api/javascript/index.html)
* [Selenium Wiki](https://github.com/SeleniumHQ/selenium/wiki)
* [Selenium User's Guide](http://happyselenium.blogspot.com/2013/05/more-on-ide.html?view=sidebar)
* [Crossbrowsertesting Repos](https://github.com/crossbrowsertesting)


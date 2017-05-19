const seleniumWebdriver = require('selenium-webdriver');
const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
  Given(/^I am on the Cucumber.js GitHub repository$/, function () {
    return this.driver.get('https://github.com/cucumber/cucumber-js/tree/master');
  });

  When(/^I click on "(.*?)"$/, function (text) {
    return this.driver.findElement({linkText: text}).then(function (element) {
      return element.click();
    });
  });

  Then(/^I should see "(.*?)"$/, function (text) {
    const xpath = "//*[contains(text(),'" + text + "')]";
    const condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });
});
const seleniumWebdriver = require('selenium-webdriver');

module.exports = {
  worldForBrowser: (browser) => function() {
      this.driver = new seleniumWebdriver.Builder()
        .forBrowser(browser)
        .build();
    }
};

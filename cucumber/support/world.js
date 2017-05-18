const seleniumWebdriver = require('selenium-webdriver');

module.exports = {
  worldForBrowser: (browser) => {
    return function() {
      this.driver = new seleniumWebdriver.Builder()
        .forBrowser(browser)
        .build();
    }
  }
};

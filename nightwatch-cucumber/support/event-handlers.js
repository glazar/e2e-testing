const {defineSupportCode} = require('cucumber');
const reporter = require('cucumber-html-reporter');

defineSupportCode(({registerHandler}) => {
  registerHandler('AfterFeatures', () => {
    reporter.generate({
      theme: 'bootstrap',
      jsonFile: 'nightwatch-cucumber/reports/cucumber.json',
      output: 'nightwatch-cucumber/reports/nightwatch-cucumber-report.html',
      reportSuiteAsScenarios: true,
      launchReport: false
    });
  });
});


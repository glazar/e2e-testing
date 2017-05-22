const {defineSupportCode} = require('cucumber');
const reporter = require('cucumber-html-reporter');

defineSupportCode(({registerHandler}) => {
  registerHandler('AfterFeatures', () => {
    reporter.generate({
      theme: 'bootstrap',
      jsonFile: 'cucumber/reports/cucumber.json',
      output: 'cucumber/reports/cucumber-report.html',
      reportSuiteAsScenarios: true,
      launchReport: false
    });
  });
});


const {defineSupportCode} = require('cucumber');
const reporter = require('cucumber-html-reporter');
var path = require('path');

defineSupportCode(({registerHandler}) => {
  registerHandler('AfterFeatures', () => {
    reporter.generate({
      theme: 'bootstrap',
      jsonFile: path.join('cucumber', 'reports', 'cucumber.json'),
      output:  path.join('cucumber', 'reports', 'cucumber-report.html'),
      reportSuiteAsScenarios: true,
      launchReport: false
    });
  });
});


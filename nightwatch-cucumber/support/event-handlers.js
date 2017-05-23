const {defineSupportCode} = require('cucumber');
const reporter = require('cucumber-html-reporter');
var path = require('path');

defineSupportCode(({registerHandler}) => {
  registerHandler('AfterFeatures', () => {
    reporter.generate({
      theme: 'bootstrap',
      jsonFile: path.join('nightwatch-cucumber', 'reports', 'cucumber.json'),
      output:  path.join('nightwatch-cucumber', 'reports', 'nightwatch-cucumber-report.html'),
      reportSuiteAsScenarios: true,
      launchReport: false
    });
  });
});


const parseArgs = require('minimist');

const args = parseArgs(process.argv.slice(2));

const conditionalArgs = [];

if (args.coverage) {
  conditionalArgs.push('--require', 'nightwatch-cucumber/coverage/hooks.js');
  conditionalArgs.push('--tags', '@smoke or @regression or @deep or @analytics');
}

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'timeout.js',
    '--require', 'nightwatch-cucumber/support/event-handlers.js',
    '--require', 'nightwatch-cucumber/features/step-definitions',
    ...conditionalArgs,
    '--format', 'pretty',
    '--format', 'json:nightwatch-cucumber/reports/cucumber.json',
    'nightwatch-cucumber/features'
  ]}
);

module.exports = (function(settings) {
  //settings.selenium.start_process = false;
  //settings.test_workers = {
  //  "enabled": true,
  //  "workers": "auto"
  //};
  settings.test_settings.default.screenshots.path = "./nightwatch-cucumber/reports/screenshots";
  settings.output_folder =  "./nightwatch-cucumber/reports";
  settings.src_folders = null;
  settings.custom_commands_path = null;
  settings.page_objects_path = null;

  return settings;
})(require('./nightwatch.json'));


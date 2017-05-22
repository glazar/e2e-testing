require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'nightwatch-cucumber/support/event-handlers.js',
    '--require', 'nightwatch-cucumber/features/step-definitions',
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
  settings.src_folders = null;
  settings.output_folder =  "./nightwatch-cucumber/reports";
  settings.custom_commands_path = "./nightwatch-cucumber/commands";
  settings.page_objects_path = "./nightwatch-cucumber/page-objects";

  return settings;
})(require('./nightwatch.json'));


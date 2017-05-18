const common = [
  '--require', 'cucumber/support/hooks.js',
  '--require', 'cucumber/features/step-definitions',
  '--format', 'json:cucumber/reports/cucumber.json',
  'cucumber/features'
].join(' ');

module.exports = {
  default: common,
  chrome: `${common} --require cucumber/support/chrome-world.js`,
  firefox: `${common} --require cucumber/support/firefox-world.js`,
};
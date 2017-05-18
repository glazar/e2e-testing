require('geckodriver');

const {worldForBrowser} = require('./world');
const {defineSupportCode} = require('cucumber');

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(worldForBrowser('firefox'));
});


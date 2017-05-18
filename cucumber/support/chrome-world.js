require('chromedriver');

const {worldForBrowser} = require('./world');
const {defineSupportCode} = require('cucumber');

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(worldForBrowser('chrome'));
});


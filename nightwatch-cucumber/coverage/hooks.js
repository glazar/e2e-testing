const {defineSupportCode} = require('cucumber');
const {client} = require('nightwatch-cucumber');
const request = require('superagent');
const fs = require('fs');
const archiver = require('archiver');
const remapIstanbul = require('remap-istanbul');

const config = require('./config');

defineSupportCode(({registerHandler, After}) => {

  registerHandler('BeforeFeatures', () => {
    client
      .perform((done) => {
        request
          .post(`${config.coveragePath}/reset`)
          .end(done);
      });

    return client;
  });

  registerHandler('AfterFeatures', () => {
    client
      .perform((done) => {
        request
          .get(`${config.coveragePath}/object`)
          .pipe(fs.createWriteStream('./reports/coverage/coverage.json'))
          .on('finish', async () => {
            await remapIstanbul('./reports/coverage/coverage.json', {
              'clover': './reports/coverage/clover.xml',
              'html': './reports/coverage/html-report',
              'json-summary': './reports/coverage/summary.json'
            });
            const archive = archiver('zip');
            archive
              .pipe(fs.createWriteStream("./reports/coverage/html-report.zip"))
              .on('finish', done);
            archive.directory('./reports/coverage/html-report', false);
            archive.finalize();
          });
      });

    return client;
  });

  After(() => {
    client
      .execute(function () {
        return JSON.stringify(window.__coverage__);
      }, [], ({value}) => {
        client
          .perform((done) => {
            request
              .post(`${config.coveragePath}/client`)
              .type('application/json')
              .send(value)
              .end(done);
          });
      });

    return client;
  });

});


module.exports = {
  '@tags': ['basic'],

  'Demo test Google - basic' : (client) => {
    client
      .url('http://www.google.com')
      .waitForElementVisible('body', 2000)
      .setValue('input[type=text]', 'nightwatch')
      .click('input[name=btnK]')
      .pause(2000)
      .assert.containsText('#main', 'Night Watch');
  },

  'Demo test Google - expect' : (client) => {
    client
      .url('http://google.com')
      .pause(2000);

    client.expect.element('body').to.be.present.before(1000);
    client.expect.element('#lst-ib').to.have.css('display');
    client.expect.element('body').to.have.attribute('class').which.contains('vasq');
    client.expect.element('#lst-ib').to.be.an('input');
    client.expect.element('#lst-ib').to.be.visible;
  },

  after : (client) => {
    client.end();
  }
};
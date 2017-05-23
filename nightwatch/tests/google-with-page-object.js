module.exports = {
  '@tags': ['pageObject'],

  'Demo test Google - page object' : (client) => {
    const google = client.page.google();

    google
      .navigate()
      .assert.title('Google')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'nightwatch')
      .click('@submit');
  },

  'Demo test Google - page object command' : (client) => {
    const google = client.page.google();

    google
      .navigate()
      .assert.title('Google')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'nightwatch')
      .submit();
  },

  after : (client) => {
    client.end();
  }
};


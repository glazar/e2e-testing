module.exports = {
  '@tags': ['command'],

  'Demo test Google - command' : (client) => {
    client.googleForTerm('nightwatch');
  },

  after : (client) => {
    client.end();
  }
};
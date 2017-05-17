module.exports = {
  'Demo test Google - command' : (client) => {
    client.googleForTerm('nightwatch');
    client.end();
  }
};
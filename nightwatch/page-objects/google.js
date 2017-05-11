module.exports = {
  url: 'http://google.com',
  elements: {
    searchBar: {
      selector: 'input[type=text]'
    },
    submit: {
      selector: '//input[@name="btnK"]',
      locateStrategy: 'xpath'
    }
  },
  commands: [{
    submit() {
      this.api.pause(1000);

      return this.click('@submit');
    }
  }]
};



const os = require("os");

module.exports = {
  port: 8780,
  get host() {
    return os.hostname();
  },
  get coveragePath() {
    return `http://${this.host}:${this.port}/coverage`;
  },
};
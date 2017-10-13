function googleForTerm(term) {
  const google = this.page.google();

  return google
    .navigate()
    .assert.title('Google')
    .assert.visible('@searchBar')
    .setValue('@searchBar', term)
    .submit();
}

module.exports = {
  command: googleForTerm
};
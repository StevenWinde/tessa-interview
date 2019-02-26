if (require.main === module) {
  getTestRunner()();
} else {
  module.exports = getTestRunner();
}

function getTestRunner() {
  const Jasmine = require('jasmine');
  const jasmine = new Jasmine();

  jasmine.loadConfigFile('spec/jasmine.json');
  return jasmine.execute.bind(jasmine);
}

module.exports = {
  collectCoverage: true,
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  coveragePathIgnorePatterns: ['/node_modules/', '/lib/']
  // uncomment this if we ever want global coverage for all src folders
  // collectCoverageFrom: ['**/src/**/*.js'],
};

exports.config = {
  output: './src/__tests__/output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:3000',
      show: true
    },
    MockRequest: {}
  },
  include: {},
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './requirements/features/**/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: false
    }
  },
  tests: './src/__tests__/*_test.js',
  name: 'bdd-workshop'
}
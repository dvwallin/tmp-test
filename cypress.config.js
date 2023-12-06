const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    apiUrl: 'http://host.docker.internal:5000',
    grafanaUrl: "http://host.docker.internal:3000",
    prometheusUrl: "http://host.docker.internal:9090"
  },
  e2e: {
    setupNodeEvents(on, config) {},
    supportFile: false,
  },
})
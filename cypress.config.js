const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    baseUrl: "https://gompu.netlify.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  pageLoadTimeout: 10000,
  viewportWidth: 1280,
  viewportHeight: 720,
});

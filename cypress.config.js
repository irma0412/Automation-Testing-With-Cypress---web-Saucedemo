const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-save-password-bubble');
          launchOptions.args.push('--disable-credentials-enable-service');
          launchOptions.args.push('--password-store=basic');
          launchOptions.args.push('--incognito'); // super bersih
        }
        return launchOptions;
      });
    },
  },
});

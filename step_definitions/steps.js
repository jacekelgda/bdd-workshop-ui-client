const { I } = inject();
// Add in your custom step files

When(/^I visit "(.*?)"$/, (path) => {
  // From "features/fields.feature" {"line":5,"column":9}
  I.amOnPage(path);
});

Then('I should see {string}', (text) => {
  // From "features/fields.feature" {"line":6,"column":9}
  I.see(text);
});

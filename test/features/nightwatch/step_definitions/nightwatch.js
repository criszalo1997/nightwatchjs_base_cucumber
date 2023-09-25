const { Given, Then, When, Before, } = require('@cucumber/cucumber');

Given(/^I open the Rijksmuseum page$/, function () {
  return browser.url(process.env.BASE_URL_1)
});

Given(/^I dismiss the cookie dialog$/, async function () {
  return browser.page.nightwatch.searchPage().step1();
});

Given(/^I search "([^"]*)"$/, async function (searchTerm) {
  return browser.page.nightwatch.searchPage().step2(searchTerm);
});

Then(/^the title is "([^"]*)"$/, function (title) {
  return browser.page.pageBase().assertTitle(title);
});

Then(/^Body contains "([^"]*)"$/, function (contains) {
  return browser.page.nightwatch.searchPage().step3(contains);
});
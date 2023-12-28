const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the page", async () => {
    await browser.url('https://www.newegg.com');
});

Given("I close the promo banner if it appears", async () => {
    browser.refresh();
});

When("I search for the word Windows in the search bar", async () => {
    const element = 'Windows'
    await $('input[type=search]').setValue(element);
    await $('.ico.ico-search').click();
});

Then("I check that at least one item appears", async () => {
    const element = await $('.item-cell');
    await expect(element).toBeExisting()
});

When("I open Today's Best Deals tab", async () => {
    await $('//*[@id="trendingBanner_720202"]/span').click();
});

When("I click on the Internet shop logo", async () => {
    await $('[alt="Newegg"]').click();
});

Then("I check that the main page opened", async () => {
    const url = 'https://www.newegg.com/'
    await browser.url('https://www.newegg.com')
    await expect(browser).toHaveUrl(url)
});

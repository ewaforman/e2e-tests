Feature: E2E tests

    Background:
        Given I am on the page
        And I close the promo banner if it appears

    Scenario: Search bar
        When I search for the word Windows in the search bar
        Then I check that at least one item appears

    Scenario: Internet shop logo button
        When I open Today's Best Deals tab
        And I click on the Internet shop logo
        Then I check that the main page opened

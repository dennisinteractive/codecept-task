# Testing Evo using codeceptjs and testcafe
==========

This example assumes that you have a basic understanding of test automation runners and is intended to probe your knowledge of features, Gherkin syntax and step definitions.
You should aim to spend approximately 2 hours on this exercise.


## Task

Using this Codecept and Testcafe demo project we would like you to add some additional tests as detailed in `Stories`. Tests only need to run on `Chrome` and should all be passing on running `npm run test`.


## Technical details

The project should be executed with the following commands:

`npm install` for project dependencies.  
`npm run test` to start the test runner.


## Stories

### News and Reviews

    As a user
    When I am on the homepage
    Then the `news` link should be display within the navigation
    
    As a user
    When I am on the homepage
    Then the `reviews` link should be display within the navigation

    As a user
    When I click on the `news` link
    Then I should navigate to the `news` index page

### Search

    As a user
    When I search for `Audi`
    I should navigate to the `audi` search results index
    
### Make / Model

    As a user
    When I select any `make` and `model` from `Find a car review` selector
    I should navigate to the `make/model` review or index page
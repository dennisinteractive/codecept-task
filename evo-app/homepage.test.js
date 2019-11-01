Feature('Evo homepage')

Before(async (I, HomePage) => {
    HomePage.goto()
})

/**
 * Happy Path tests
 */
Scenario('Navigate to Evo homepage and check Evo Logo is displayed', async (I, HomePage) => {
  I.say('Given I am on the Evo homepage')

  I.say('Then I should see the header with the Evo logo')
  HomePage.seeHeader()

  I.saveScreenshot('evo-home-logo.png')
})






const path = require('path')

const TestBaseDirectory = 'evo-app'

exports.config = {
    name: 'codeceptjs-evo',
    tests: path.join('.', TestBaseDirectory, '**', '*.test.js'), // Look for tests in all subfolders
    output: 'output', // Set output directory for screenshots, reports ...
    helpers: {
        TestCafe: {
            url: 'https://evo.co.uk',    // just any value, url is set in test
            browser: 'chrome',         // other values: 'firefox', 'ie' (windows)
            show: false,                 // set to false for headless mode
            waitForTimeout: 5000,      // wait for elements to appear
            getPageTimeout: 20000       // wait for page to load
        },

        CustomHelper: {
            require: './evo-app/helpers/custom.helper.js'
        },
    },

    include: { 
        HomePage: `./${TestBaseDirectory}/pages/home.page.js`,
    },

    bootstrap: null, // For running additional code before test run starts

    plugins: {},

    mocha: {}
}

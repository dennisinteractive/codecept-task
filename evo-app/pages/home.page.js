const assert = require('assert')

const I = actor();


module.exports = {
    goto() {
        I.amOnPage('https://evo.co.uk')
    },

    seeHeader() {
        I.seeElement('.polaris__header--logo')
    }
}
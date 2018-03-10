const {execFile} = require('child_process');
const chromedriver = require('chromedriver');
let php;

module.exports = {
    before: (browser, done) => {
        chromedriver.start();
        php = execFile('php', ['-S', '127.0.0.1:8080', '-t', '.']);
        setTimeout(done, 200)
    },
    after: (browser, done) => {
        php.kill(9);
        chromedriver.stop();
        setTimeout(done, 200);
    },


    'Demo test with 2 inputs change a div': function (browser) {
        browser
            .url('http://127.0.0.1:8080/src/index.html')
            .waitForElementVisible('body', 1000)
            .assert.visible('#somediv')
            .assert.containsText('#somediv', 'Welcome')
            .clearValue('#tb1')
            .setValue('#tb1', 'Foo')
            .clearValue('#tb2')
            .setValue('#tb2', 'Bar')
            .click('#btn1')
            .pause(1000)
            .assert.visible('#somediv')
            .assert.containsText('#somediv', 'Yay Foo Bar')
            .end();
    }
};

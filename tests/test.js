module.exports = {
  'Demo test with 2 inputs change a div' : function (browser) {
    browser
      .url('http://127.0.0.1:8080/src')
      .waitForElementVisible('body', 1000)
      .assert.containsText('.somediv', 'Welcome')
      .setValue('#tb1', 'Foo')
      .setValue('#tb2', 'Bar')
      .click('#btn1')
      .pause(1000)
      .assert.visible('.somediv')
      .assert.containsText('.somediv', 'Yay Foo Bar')
      .end();
  }
};

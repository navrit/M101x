/* QUIZ

Which of the following package.json scripts will run all tests whose name contains "unit"?

{
    "scripts": {
        "test-1": "mocha -g 'unit' test/*",
        "test-2": "mocha test/*"
        "test-3": "mocha -R 'unit' test/*",
        "test-4": "mocha test/unit"
    }
}

    npm run test-1 - correct
*/

var assert = require('assert');

describe('my feature', function() {
  it('works', function() {
    assert.equal('A', 'A');
  });

  it('fails gracefully', function() {
    assert.throws(function() {
      throw 'Error!';
    });
  });
});

describe('my other feature', function() {
  it('async', function(done) {
    setTimeout(function() {
      done();
    }, 25);
  });
});

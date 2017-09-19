/*global describe, it, expect */

var api = require('..');

describe('passport-thinknet', function() {

  it('should export Strategy constructor directly from package', function() {
    expect(api).to.be.a('function');
    expect(api).to.equal(api.Strategy);
  });

});

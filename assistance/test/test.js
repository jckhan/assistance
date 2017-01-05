var chai = require('chai');
var expect = chai.expect;
var TestClass = require('./../modules/test-class.js');

describe('TestClass test', function() {
  it('getSomething() should return something', function() {
    var testClass = new TestClass([]);
    expect(testClass.getSomething()).to.equal(0);
  });
});

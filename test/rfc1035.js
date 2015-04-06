'use strict';

var Lab = require('lab');
var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var beforeEach = lab.beforeEach;
var expect = require('code').expect;

var rcodes = require('../index');

describe('RFC1035', function () {
  it('exposes `NoError` (0)', function (done) {
    expect(rcodes.NoError).to.exist();
    expect(rcodes.NoError).to.equal(0);
    done();
  });

  it('exposes `FormatError` (1)', function (done) {
    expect(rcodes.FormatError).to.exist();
    expect(rcodes.FormatError).to.equal(1);
    done();
  });

  it('exposes `ServerFailure` (2)', function(done) {
    expect(rcodes.ServerFailure).to.exist();
    expect(rcodes.ServerFailure).to.equal(2);
    done();
  });

  it('exposes `NameError` (3)', function (done) {
    expect(rcodes.NameError).to.exist();
    expect(rcodes.NameError).to.equal(3);
    done();
  });

  it('exposes `NotImplemented` (4)', function (done) {
    expect(rcodes.NotImplemented).to.exist();
    expect(rcodes.NotImplemented).to.equal(4);
    done();
  });

  it('exposes `Refused` (5)', function (done) {
    expect(rcodes.Refused).to.exist();
    expect(rcodes.Refused).to.equal(5);
    done();
  });
});

'use strict';

var Lab = require('lab');
var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var beforeEach = lab.beforeEach;
var expect = require('code').expect;

var rcodes = require('../index');

describe('RFC2136', function () {
  it('exposes `YXDomain` (6)', function (done) {
    expect(rcodes.YXDomain).to.exist();
    expect(rcodes.YXDomain).to.equal(6);
    done();
  });

  it('exposes `YXRRSet` (7)', function (done) {
    expect(rcodes.YXRRSet).to.exist();
    expect(rcodes.YXRRSet).to.equal(7);
    done();
  });

  it('exposes `NXRRSet` (8)', function (done) {
    expect(rcodes.NXRRSet).to.exist();
    expect(rcodes.NXRRSet).to.equal(8);
    done();
  });

  it('exposes `NotAuth` (9)', function (done) {
    expect(rcodes.NotAuth).to.exist();
    expect(rcodes.NotAuth).to.equal(9);
    done();
  });

  it('exposes `NotZone` (10)', function (done) {
    expect(rcodes.NotZone).to.exist();
    expect(rcodes.NotZone).to.equal(10);
    done();
  });
});

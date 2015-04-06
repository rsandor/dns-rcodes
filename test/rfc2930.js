'use strict';

var Lab = require('lab');
var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var beforeEach = lab.beforeEach;
var expect = require('code').expect;

var rcodes = require('../index');

describe('RFC2930', function () {
  it('exposes `BadMode` (19)', function (done) {
    expect(rcodes.BadMode).to.exist();
    expect(rcodes.BadMode).to.equal(19);
    done();
  });

  it('exposes `BadName` (20)', function (done) {
    expect(rcodes.BadName).to.exist();
    expect(rcodes.BadName).to.equal(20);
    done();
  });

  it('exposes `BadAlgorithm` (21)', function (done) {
    expect(rcodes.BadAlgorithm).to.exist();
    expect(rcodes.BadAlgorithm).to.equal(21);
    done();
  });
});

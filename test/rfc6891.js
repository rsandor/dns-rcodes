'use strict';

var Lab = require('lab');
var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var beforeEach = lab.beforeEach;
var expect = require('code').expect;

var rcodes = require('../index');

describe('RFC6891', function () {
  it('exposes `BadVersion` (16)', function (done) {
    expect(rcodes.BadVersion).to.exist();
    expect(rcodes.BadVersion).to.equal(16);
    done();
  });
});

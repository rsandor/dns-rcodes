'use strict';

var Lab = require('lab');
var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var beforeEach = lab.beforeEach;
var expect = require('code').expect;

var rcodes = require('../index');

describe('RFC2845', function () {
  it('exposes `BadSignature` (16)', function (done) {
    expect(rcodes.BadSignature).to.exist();
    expect(rcodes.BadSignature).to.equal(16);
    done();
  });

  it('exposes `BadKey` (17)', function (done) {
    expect(rcodes.BadKey).to.exist();
    expect(rcodes.BadKey).to.equal(17);
    done();
  });

  it('exposes `BadTime` (18)', function (done) {
    expect(rcodes.BadTime).to.exist();
    expect(rcodes.BadTime).to.equal(18);
    done();
  });
});

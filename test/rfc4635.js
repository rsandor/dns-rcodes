'use strict';

var Lab = require('lab');
var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var beforeEach = lab.beforeEach;
var expect = require('code').expect;

var rcodes = require('../index');

describe('RFC4635', function () {
  it('exposes `BadTruncation` (22)', function (done) {
    expect(rcodes.BadTruncation).to.exist();
    expect(rcodes.BadTruncation).to.equal(22);
    done();
  });
});

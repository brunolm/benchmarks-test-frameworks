/// <reference path="../../node_modules/@types/mocha/index.d.ts" />

import * as mathService from '../../src/math.service';

import { assert } from 'chai';

describe('mathService', () => {
  it('sum', () => {
    console.time('------------> mocha');
    assert.equal(mathService.sum(1, 1), 2);
    console.timeEnd('------------> mocha');
  });
});

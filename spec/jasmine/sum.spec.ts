/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import * as mathService from '../../src/math.service';

describe('mathService', () => {
  it('sum', () => {
    console.time('------------> jasmine');
    expect(mathService.sum(1, 1)).toEqual(2);
    console.timeEnd('------------> jasmine');
  });
});

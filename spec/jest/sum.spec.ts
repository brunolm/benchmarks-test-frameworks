/// <reference path="../../node_modules/@types/jest/index.d.ts" />

import * as mathService from '../../src/math.service';

describe('mathService', () => {
  test('sum', () => {
    console.time('------------> jest');
    expect(mathService.sum(1, 1)).toBe(2);
    console.timeEnd('------------> jest');
  });
});

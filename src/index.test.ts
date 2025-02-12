import {describe, expect, expectTypeOf, it} from "vitest";
import {index} from "./index";

describe('Input test', () => {
  it('should reject when value is under 0', () => {
    expect(() => {
      index.NQueensCalc(-1);
    }).toThrowError('N must be greater than 0');
  })

  it('should be a number', () => {
    expectTypeOf(index.INPUT).toEqualTypeOf<number>();
  });
});


describe('NQueensCalc test', () => {
  it('should return empty array (no solution)', () => {
    expect(index.NQueensCalc(0)).toEqual([]);
    expect(index.NQueensCalc(2)).toEqual([]);
    expect(index.NQueensCalc(3)).toEqual([]);
  });
});



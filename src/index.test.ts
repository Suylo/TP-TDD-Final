import {describe, expect, expectTypeOf, it} from "vitest";
import {index} from "./index";

describe('Input tests', () => {
  it('should reject when value is under 0', () => {
    expect(() => {
      index.NQueensCalc(-1);
    }).toThrowError('N must be greater than 0');
  })

  it('should be a number', () => {
    expectTypeOf(index.INPUT).toEqualTypeOf<number>();
  });
});


describe('NQueensCalc tests', () => {
  it('should return empty array (no solution)', () => {
    expect(index.NQueensCalc(0)).toEqual([]);
    expect(index.NQueensCalc(2)).toEqual([]);
    expect(index.NQueensCalc(3)).toEqual([]);
  });

  it('should return 1 solution (N = 1)', () => {
    const output = [
      ["#"]
    ];

    expect(index.NQueensCalc(1)).toEqual(output);
  });

  it('should return 2 solutions (N = 4)', () => {
    const output = [
      ["O#OO", "OOO#", "#OOO", "OO#O"], ["OO#O", "#OOO", "OOO#", "O#OO"]
    ];

    expect(index.NQueensCalc(4)).toEqual(output);
  });

  it('should return 10 solutions (N = 5)', () => {
    const output = [
      ['#OOOO', 'OO#OO', 'OOOO#', 'O#OOO', 'OOO#O'], ['#OOOO', 'OOO#O', 'O#OOO', 'OOOO#', 'OO#OO'],
      ['O#OOO', 'OOO#O', '#OOOO', 'OO#OO', 'OOOO#'], ['O#OOO', 'OOOO#', 'OO#OO', '#OOOO', 'OOO#O'],
      ['OO#OO', '#OOOO', 'OOO#O', 'O#OOO', 'OOOO#'], ['OO#OO', 'OOOO#', 'O#OOO', 'OOO#O', '#OOOO'],
      ['OOO#O', '#OOOO', 'OO#OO', 'OOOO#', 'O#OOO'], ['OOO#O', 'O#OOO', 'OOOO#', 'OO#OO', '#OOOO'],
      ['OOOO#', 'O#OOO', 'OOO#O', '#OOOO', 'OO#OO'], ['OOOO#', 'OO#OO', '#OOOO', 'OOO#O', 'O#OOO']
    ];

    expect(index.NQueensCalc(5)).toEqual(output);
  });

  it('should return more than 3 solutions (N = 6)', () => {
    // when N = 6, 4 is expected
    expect(index.NQueensCalc(6).length).toBeGreaterThan(3);
  });

  it('should return more than 30 solutions (N = 7)', () => {
    // when N = 7, 40 is expected
    expect(index.NQueensCalc(7).length).toBeGreaterThan(30);
  });

  it('should return solutions in the correct format', () => {
    const solutions = index.NQueensCalc(4);
    solutions.forEach(board => {
      expect(board.length).toBe(4);
      board.forEach(row => {
        expect(row.length).toBe(4);
        expect(row).toMatch(/^[O#]+$/);
      });
    });
  });

});



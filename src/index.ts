// Input
const INPUT: number = 4;

type Board = string[];

function NQueensCalc(N: number): Board[] {
  if (N < 0) {
    throw new Error('N must be greater than 0');
  }

  if (N === 0 || N === 2 || N === 3) {
    return [];
  }

  if (N === 1) {
    return [["#"]];
  }

  return [[]];
}




export const index = {
  INPUT,
  NQueensCalc
}
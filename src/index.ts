// Input
const INPUT: number = 4;

function NQueensCalc(N: number) {
  if (N < 0) {
    throw new Error('N must be greater than 0');
  }
  return N;
}




export const index = {
  INPUT,
  NQueensCalc
}
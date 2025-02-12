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

  const solutions: Board[] = [];

  function isPositionValid(board: number[], row: number, col: number): boolean {
    for (let i = 0; i < row; i++) {
      if (
          board[i] === col ||
          board[i] - i === col - row ||
          board[i] + i === col + row
      ) {
        return false;
      }
    }
    return true;
  }

  function findSolutions(row: number, board: number[]): void {
    if (row === N) {
      solutions.push(
          board.map((col) =>
              Array.from({length: N}, (_, i) => (i === col ? "#" : "O")).join("")
          )
      );
      return;
    }

    for (let col = 0; col < N; col++) {
      if (isPositionValid(board, row, col)) {
        board[row] = col;
        findSolutions(row + 1, board);
        board[row] = -1;
      }
    }
  }

  findSolutions(0, Array(N).fill(-1));
  return solutions;
}

console.log(NQueensCalc(INPUT));

export const index = {
  INPUT,
  NQueensCalc
}
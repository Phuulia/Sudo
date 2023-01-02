class Sudoku {
    constructor(puzzle) {
      this.puzzle = puzzle;
    }
  
    solve() {
      let cell = this.findEmptyCell();
      if (!cell) return true;
  
      let [row, col] = cell;
  
      for (let num = 1; num <= 9; num++) {
        if (this.isValidMove(row, col, num)) {
          this.puzzle[row][col] = num;
  
          if (this.solve()) return true;
  
          this.puzzle[row][col] = 0;
        }
      }
  
      return false;
    }
  
    findEmptyCell() {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (this.puzzle[row][col] === 0) {
            return [row, col];
          }
        }
      }
      return null;
    }
  
    isValidMove(row, col, num) {
      return (
        !this.rowContains(row, num) &&
        !this.colContains(col, num) &&
        !this.boxContains(row, col, num)
      );
    }
  
    rowContains(row, num) {
      return this.puzzle[row].includes(num);
    }
  
    colContains(col, num) {
      for (let row = 0; row < 9; row++) {
        if (this.puzzle[row][col] === num) {
          return true;
        }
      }
      return false;
    }
  
    boxContains(row, col, num) {
      let startRow = Math.floor(row / 3) * 3;
      let startCol = Math.floor(col / 3) * 3;
  
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          if (this.puzzle[startRow + r][startCol + c] === num) {
            return true;
          }
        }
      }
      return false;
    }
  }
  
// FREEZE CODE BEGIN
// Puzzles to use to test your functions
//puzzle
let puzzle = [[ 8,9,5, 7,4,2, 1,3,6 ],
[ 2,7,1, 9,6,3, 4,8,5 ],
[ 4,6,3, 5,8,1, 7,9,2 ],
[ 9,3,4, 6,1,7, 2,5,8 ],
[ 5,1,7, 2,3,8, 9,6,4 ],
[ 6,8,2, 4,5,9, 3,7,1 ],
[ 1,5,9, 8,7,4, 6,2,3 ],
[ 7,4,6, 3,2,5, 8,1,9 ],
[ 3,2,8, 1,9,6, 5,4,7 ]];
//puzzle 2
let puzzleTwo = [[ 8,9,5, 7,4,2, 1,3,6 ],
[ 8,7,1, 9,6,3, 4,8,5 ],
[ 4,6,3, 5,8,1, 7,9,2 ],
[ 9,3,4, 6,1,7, 2,5,8 ],
[ 5,1,7, 2,3,8, 9,6,4 ],
[ 6,8,2, 4,5,9, 3,7,1 ],
[ 1,5,9, 8,7,4, 6,2,3 ],
[ 7,4,6, 3,2,5, 8,1,9 ],
[ 3,2,8, 1,9,6, 5,4,7 ]];
// FREEZE CODE END

function getRow(puzzle, row) {
// WRITE YOUR CODE HERE
  return puzzle[row];
}

function getColumn(puzzle, col) {
// WRITE YOUR CODE HERE
  const column = [];
  for (let row of puzzle) {
    column.push(row[col]);
  }
  return column;
}

function getSection(puzzle, x, y) {
// WRITE YOUR CODE HERE
  const section = [];
  const startRow = y * 3;
  const endRow = startRow + 3;
  const startCol = x * 3;
  const endCol = startCol + 3;

  for (let row = startRow; row < endRow; row++) {
    for (let col = startCol; col < endCol; col++) {
      section.push(puzzle[row][col]);
    }
  }

  return section;
}

function includes1To9(arr) {
// WRITE YOUR CODE HERE
  const set = new Set(arr);
  return set.size === 9 && [...set].every((num) => num >= 1 && num <= 9);
}

function sudokuIsValid(puzzle) {
  //checkRows
  // WRITE YOUR CODE HERE
  for (let row = 0; row < 9; row++) {
    if (!includes1To9(getRow(puzzle, row))) {
      return false;
    }
  }

  //checkColumns
  // WRITE YOUR CODE HERE
  for (let col = 0; col < 9; col++) {
    if (!includes1To9(getColumn(puzzle, col))) {
      return false;
    }
  }

  //checkSection
  // WRITE YOUR CODE HERE
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      if (!includes1To9(getSection(puzzle, x, y))) {
        return false;
      }
    }
  }

  return true;
}

// TEST YOUR CODE HERE. SEE EXAMPLES SECTION FOR EXPECTED OUTPUT
// YOU CAN console.log THESE RESULTS TO SEE THE OUTPUT
console.log(getRow(puzzle, 8)); // [3, 2, 8, 1, 9, 6, 5, 4, 7]
console.log(getRow(puzzle, 0)); // [8, 9, 5, 7, 4, 2, 1, 3, 6]
console.log(getColumn(puzzle, 0)); // [8, 2, 4, 9, 5, 6, 1, 7, 3]
console.log(getColumn(puzzle, 8)); // [6, 5, 2, 8, 4, 1, 3, 9, 7]
console.log(getSection(puzzle, 0, 0)); // [8, 9, 5, 2, 7, 1, 4, 6, 3]
console.log(getSection(puzzle, 1, 0)); // [7, 4, 2, 9, 6, 3, 5, 8, 1]

console.log(sudokuIsValid(puzzle)); // Output: true
console.log(sudokuIsValid(puzzleTwo)); // Output: false

// FREEZE CODE BEGIN
module.exports = {
  getRow,
  getColumn,
  getSection,
  includes1To9,
  sudokuIsValid,
  puzzle,
  puzzleTwo
};
// FREEZE CODE END
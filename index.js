const fs = require("fs")
const { Board } = require("./board.js")
const Piece = require("./piece.js")
const { KEY } = require("./constants.js")

console.log(Board)

/**
  Your solution should not be posted publicly. Instead, it should be sent to us via the link below in a tarball, zipfile, or other standard format.
  The returned solution should include whatever is necessary to judge it, e.g. instructions on how to run the solution, shell scripts, README files, tests, etc.
  You are free to use Internet resources (e.g. tutorials, API documentation, etc) but not to post questions about how to solve the problem. Moreover, the code should be written by you alone without outside help.
  If you do not understand something or believe there is an ambiguity in the instructions, please get in touch with your questions.
  Your solution should not depend on any outside libraries apart from libraries standard to the language.
  Your solution will be judged on:
  Providing a complete and correct solution
  Clarity and conciseness of code
  Completeness and usefulness of accompanying project artifacts
  Please note that this should be treated like production quality code and will be judged as if this is code that the team would be expecting to own and maintain. Please have the results back to us  within the next 7 days.  Please let me and Aaron (cc’d) know if you have questions or run into problems. 
 */

/**
  Each line of the input file is a comma-separated list. Each entry in the list is a single letter (from the set
  above) and a single-digit integer. The integer represents the left-most column of the grid that the shape
  occupies, starting from zero. 
  The grid of the game space is 10 units wide. 
  Your program need not detect whether any sequence of pieces will exceed any particular height, but you may assume that no test case
  will result in a height of greater than 100. 
  For each line of the file, the grid’s initial state is empty.
  For example, if the input file consisted of the line “Q0” the corresponding line in the output file would
  be “2”, since the block will drop to the bottom of the initially empty grid and has height two.
  no test case will result in a height of greater than 100.
  Your program does not need to validate the file format and can assume that there will be no illegal
  inputs in the file.
 */

// do not have to account for shape rotation
// For each line of the input file, your program should output the resulting height of the remaining blocks within the grid

console.log(
  "##################################################################################################################"
)

const data = fs.readFileSync("input2.txt", "utf8")
const lines = data
  .split("\n")
  .filter((line) => line !== "")
  .map((line) => line.split(","))

for (const game of lines) {
  console.log({ game })

  const board = new Board()

  for (const move of game) {
    const shape = move[0].toLowerCase()
    const startingPosition = parseInt(move.slice(1).trim())
    console.log({ shape, startingPosition })

    board.setPiece(new Piece(shape, startingPosition))

    while (board.valid(board.piece)) {
      board.drop()
    }

    board.drawBoard()
  }

  console.log(board.getBoardHeight())
}

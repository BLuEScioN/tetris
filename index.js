const fs = require("fs")
const { Board } = require("./board.js")
const Piece = require("./piece.js")
const { KEY } = require("./constants.js")

var readline = require("readline")
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
})

rl.on("line", function (line) {
  playTetris(
    line
      .trim()
      .split(",")
      .filter((line) => line !== "")
  )
})

for (const game of lines) {
  console.log(playTetris(game))
}

function playTetris(moves) {
  const board = new Board()

  for (const move of moves) {
    const shape = move[0].toLowerCase()
    const startingPosition = parseInt(move.slice(1).trim())

    board.setPiece(new Piece(shape, startingPosition))

    while (board.valid(board.piece)) {
      board.drop()
    }
  }

  return board.getBoardHeight()
}

exports.playTetris = playTetris

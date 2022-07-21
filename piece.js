const { SHAPES, KEY } = require("./constants.js")
const { moves } = require("./board.js")

class Piece {
  constructor(shape, startingPosition = 0) {
    this.shape = SHAPES[shape]
    this.setStartingPosition(startingPosition)
    this.y = 0
    this.isFrozen = false
  }

  move(p) {
    this.x = p.x
    this.y = p.y
  }

  setStartingPosition(x) {
    this.x = x
  }

  getLeftMostCoordinate() {
    const shapeRows = this.shape.length
    const shapeCols = this.shape[0].length
    let leftMostCol = Number.POSITIVE_INFINITY

    for (let row = 0; row < shapeRows; row++) {
      for (let col = 0; col < shapeCols; col++) {
        if (col !== 0) leftMostCol = Math.min(col, leftMostCol)
      }
    }

    return leftMostCol
  }

  freeze() {
    this.isFrozen = true
  }
}

module.exports = Piece

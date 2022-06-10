const { ROWS, COLS, KEY } = require("./constants")

const moves = {
  [KEY.DOWN]: (p) => ({ ...p, y: p.y + 1 }),
  [KEY.LEFT]: (p) => ({ ...p, x: p.x - 1 }),
}

exports.moves = moves

class Board {
  constructor() {
    this.grid = this.getEmptyGrid()
    this.piece = undefined
  }

  reset() {
    this.grid = this.getEmptyGrid()
    this.piece = undefined
  }

  drop() {
    let p = moves[KEY.DOWN](this.piece)
    if (this.valid(p)) {
      this.piece.move(p)
    } else {
      this.freeze()
      this.clearLines()
      if (this.piece.y === 0) {
        // Game over
        return false
      }
    }
    return true
  }

  clearLines() {
    this.grid.forEach((row, y) => {
      // If every value is greater than zero then we have a full row.
      if (row.every((value) => value > 0)) {
        // Remove the row.
        this.grid.splice(y, 1)

        // Add zero filled row at the top.
        this.grid.unshift(Array(COLS).fill(0))
      }
    })
  }

  setPiece(piece) {
    this.piece = piece
  }

  getBoardHeight() {
    let maxHeight = 0
    const gridRows = this.grid.length
    const gridCols = this.grid[0].length
    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridCols; col++) {
        if (this.grid[row][col] !== 0) {
          maxHeight = ROWS - row
          // console.log("found top of shape", { row, col, y: this.y, maxHeight })
          break
        }
        if (maxHeight !== 0) {
          break
        }
      }
    }
    return maxHeight
  }

  // dx and dy represent the coordinates of the 4x4 grid of the piece.
  // [p.x, p.y] is the upper left corner of the 4x4 grid.
  // With p.x + dx and p.y + dy, we get the x and y coordinates of the board grid.
  valid(p) {
    if (p.isFrozen) {
      return false
    }
    return p.shape.every((row, dy) => {
      return row.every((value, dx) => {
        let x = p.x + dx
        let y = p.y + dy
        return (
          value === 0 || (this.isInsideWalls(x, y) && this.notOccupied(x, y))
        )
      })
    })
  }

  freeze() {
    this.piece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.grid[y + this.piece.y][x + this.piece.x] = value
        }
      })
    })
    this.piece.freeze()
  }

  getEmptyGrid() {
    return Array(ROWS)
      .fill()
      .map(() => Array(COLS).fill(0))
  }

  isInsideWalls(x, y) {
    return x >= 0 && x < COLS && y <= ROWS
  }

  notOccupied(x, y) {
    return this.grid[y] && this.grid[y][x] === 0
  }

  drawBoard() {
    console.log("******NEW BOARD*******")
    const gridRows = this.grid.length
    const gridCols = this.grid[0].length
    for (let row = 0; row < gridRows; row++) {
      const output = []
      for (let col = 0; col < gridCols; col++) {
        output.push(this.grid[row][col])
      }
      console.log(output.join(" "))
    }
  }
}

exports.Board = Board

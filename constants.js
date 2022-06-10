const COLS = 10
exports.COLS = COLS

const ROWS = 100
exports.ROWS = ROWS

const KEY = {
  DOWN: 40,
}
exports.KEY = KEY

const qTetromino = [
  [4, 4],
  [4, 4],
]

const zTetromino = [
  [7, 7, 0],
  [0, 7, 7],
]

const sTetromino = [
  [0, 5, 5],
  [5, 5, 0],
]

const tTetromino = [
  [6, 6, 6],
  [0, 6, 0],
]

const iTetromino = [
  [1, 1, 1, 1],
]

const lTetromino = [
  [3, 0],
  [3, 0],
  [3, 3],
]

const jTetromino = [
  [0, 2],
  [0, 2],
  [2, 2],
]

const SHAPES = {
  q: qTetromino,
  z: zTetromino,
  s: sTetromino,
  t: tTetromino,
  i: iTetromino,
  l: lTetromino,
  j: jTetromino,
}
exports.SHAPES = SHAPES
var assert = require("assert")
var { playTetris } = require("../index.js")

describe("playTetris", function () {
  it("should return the correct height when provided a valid set of moves", function () {
    assert.equal(playTetris(["Q0"]), 2)
    assert.equal(playTetris(["Q0", "Q1"]), 4)
    assert.equal(playTetris(["Q0", "Q2", "Q4", "Q6", "Q8"]), 0)
    assert.equal(playTetris(["Q0", "Q2", "Q4", "Q6", "Q8", "Q1"]), 2)
    assert.equal(playTetris(["Q0", "Q2", "Q4", "Q6", "Q8", "Q1", "Q1"]), 4)
    assert.equal(playTetris(["I0", "I4", "Q8"]), 1)
    assert.equal(playTetris(["I0", "I4", "Q8", "I0", "I4"]), 0)
    assert.equal(playTetris(["L0", "J2", "L4", "J6", "Q8"]), 2)
    assert.equal(playTetris(["L0", "Z1", "Z3", "Z5", "Z7"]), 2)
    assert.equal(playTetris(["T0", "T3"]), 2)
    assert.equal(playTetris(["T0", "T3", "I6", "I6"]), 1)
    assert.equal(playTetris(["I0", "I6", "S4"]), 1)
    assert.equal(playTetris(["T1", "Z3", "I4"]), 4)
    assert.equal(playTetris(["L0", "J3", "L5", "J8", "T1"]), 3)
    assert.equal(playTetris(["L0", "J3", "L5", "J8", "T1", "T6"]), 1)
    assert.equal(
      playTetris(["L0", "J3", "L5", "J8", "T1", "T6", "J2", "L6", "T0", "T7"]),
      2
    )
    assert.equal(
      playTetris([
        "L0",
        "J3",
        "L5",
        "J8",
        "T1",
        "T6",
        "J2",
        "L6",
        "T0",
        "T7",
        "Q4",
      ]),
      1
    )
    assert.equal(playTetris(["S0", "S2", "S4", "S6"]), 8)
    assert.equal(
      playTetris([
        "S0",
        "S2",
        "S4",
        "S5",
        "Q8",
        "Q8",
        "Q8",
        "Q8",
        "T1",
        "Q1",
        "I0",
        "Q4",
      ]),
      8
    )
    assert.equal(
      playTetris(["L0", "J3", "L5", "J8", "T1", "T6", "S2", "Z5", "T0", "T7"]),
      0
    )
    assert.equal(
      playTetris(["Q0", "I2", "I6", "I0", "I6", "I6", "Q2", "Q4 "]),
      3
    )
  })
})

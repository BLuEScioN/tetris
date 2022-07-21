This program is a simple nodejs server implementation of the class arcade game Tetris.

This Tetris implementation takes an input file as a argument, in which each line is an encoded series of moves, and plays those moves in a game of Tetris. At the end of the program, once all moves have been played, the program ouputs the max height of all tetromino structures still on the board.

In example input file is provided in the project. To run the program with this input, run from the CLI "node index.js < input.txt" You can save the output by running "node index.js < input.txt > output.txt"

Finally, a series of tests have been written that checks that the output from the program matches the expected outcome for dozens of example games. The test can be ran with "npm test"

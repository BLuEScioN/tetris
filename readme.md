Tetris boards consist of many individual cells that are either empty or occupied. We’ll represent empty cells with 0 and occupied cells with integers of 1-7 to represent colors.

To represent the rows and columns of the board, we’ll use a 2D array (a matrix). We’ll have arrays of integers to represent a row and an array of rows to represent the full board.

We represent the J tetromino as a matrix where the number two represents the colored cells. We add a row of zeros to get a center to rotate around:
# Knights-Travails

In chess a knight moves by jumping from one square to another - moving one square vertically and two squares horizontally or two squares vertically and one square horizontally.

We define the location of the knight by using two axis on a 8x8 board. The square [0, 0] is the first square at the bottom of the board. The knight cannot go directly to the square [0, 1]. In order to get there, it has to move to [2, 1], then to [1, 3] and from there it can finally get to [0, 1]. The function 'knightMoves' gives us this path.

Very often the knight can get to the 'right' square by taking different routes, but their length will not always be the same. We provide the shortest path to get from one square to another, although it might not be the only correct answer; it is possible that other paths solve the same problem with the same number of moves, but with different sets of moves.

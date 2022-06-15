//Removing "", ''. (tseg taslaliig alga bolgoh)
let elements = ['Fire', 'Air', 'Water'];

console.log(elements.join()); //hooson bol taslal
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"//zai avhgui

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

let board = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
]

console.log(board.join('\n') + '\n\n')

// Move King's Pawn forward 2
board[4][4] = board[6][4]
board[6][4] = ' '
console.log(board.join('\n'));
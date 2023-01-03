/*
 * Creates a string representation of a chess board with the specified size.
 *
 * @param {number} size - The number of rows and columns of the chess board.
 * @returns {string} A string representation of the chess board.
 */
function createChessBoard(size) {
    for (let i = 0; i < size; i++) {
        let row = "";
        for (let j = 0; j < size; j++) {
            row += (i + j) % 2 === 0 ? " " : "#";
        }
        console.log(row);
    }
}
createChessBoard(4);

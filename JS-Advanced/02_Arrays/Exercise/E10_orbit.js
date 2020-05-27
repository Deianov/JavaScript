/**
 * @param {Array} input
 */

function orbit(input) {
    const [rows, cols, startRow, startCol] = input;
    const matrix = new Array(rows).fill(0).map(row => []);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - startRow), Math.abs(col - startCol)) + 1;
        }
    }
    matrix.forEach(row => console.log(row.join(' ')))
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);
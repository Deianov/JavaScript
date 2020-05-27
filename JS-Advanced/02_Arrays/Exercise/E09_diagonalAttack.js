/**
 * @param {Array} input
 */

function diagonalAttack(input) {

    const matrix = input.slice().map(str => str.split(' ').map(e => Number(e) || 0));
    const rows = matrix.length;
    const cols = matrix[0].length;
    const diagonals = getDiagonals(matrix);
    const leftDiagonalSum = diagonals[0].reduce((a, b) => a + b, 0);
    const rightDiagonalSum = diagonals[1].reduce((a, b) => a + b, 0);

    if (leftDiagonalSum === rightDiagonalSum) {
        matrix.forEach(row => row.fill(leftDiagonalSum));
        setDiagonals(...diagonals);
    }

    printMatrix();

    function getDiagonals() {
        let leftIndex = 0;
        let rightIndex = cols - 1;
        const diagonals = [[], []];
        for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
            diagonals[0].push(matrix[rowIndex][leftIndex++]);
            diagonals[1].push(matrix[rowIndex][rightIndex--])
        }
        return diagonals
    }

    function setDiagonals(left, right) {
        let leftIndex = 0;
        let rightIndex = cols - 1;
        const diagonals = [[], []];
        for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
            matrix[rowIndex][leftIndex++] = left.shift();
            matrix[rowIndex][rightIndex--] = right.shift();
        }
    }

    function printMatrix() {
        matrix.forEach(row => console.log(row.join(' ')))
    }
}

diagonalAttack([
'5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);

diagonalAttack([
'1 1 1',
'1 1 1',
'1 1 0']);
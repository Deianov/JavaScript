function ticTacToe(args) {

    // don't work with Zero
    const player1 = 'X';
    const player2 = 'O';
    const empty = false;
    let isPlayer1 = true;

    const matrix = [
        [empty, empty, empty],
        [empty, empty, empty],
        [empty, empty, empty]
    ];
    const rows = matrix.length;
    const cols = matrix[0].length;

    const messages = [
        `Player ${player1} wins!`,
        `Player ${player2} wins!`,
        'The game ended! Nobody wins :(',
        'This place is already taken. Please choose another!'
    ];

    let turns = 1;

    for (let line of args) {
        [row, col] = line.split(' ').map(Number);

        if (!isValid(row, col)) {
            continue
        }

        if (!isEmpty(row, col)) {
            // player tries to make his turn on already taken place
            console.log(messages[3]);
            continue
        }

        matrix[row][col] = isPlayer1 ? player1 : player2;
    
        if ( checkForWinner() ) {
            // someone wins
            console.log(messages[isPlayer1 ? 0 : 1]);
            printMatrix();
            return
        }

        isPlayer1 = !isPlayer1;
        
        if ( turns++ === cols * rows ) {
            // there are no free spaces on the dashboard and nobody wins
            console.log(messages[2]);
            printMatrix();
            return
        }
    }

    function checkForWinner() { 
        return checkElements(getRows()) || checkElements(getCols()) || checkElements(getDiagonals())
    }
    function getRows() { 
        return matrix 
    }
    function getCols() {
        const columns = [[], [], []];
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                columns[col].push(matrix[row][col])
            }
        }
        return columns
    }
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
    function isEmpty(row, col) {
        return matrix[row][col] === empty
    }
    function isValid(row, col) {
        return row >= 0 && col >= 0 && row < rows && col < cols
    }
    function checkElements(arrays) {
        return arrays.map(e => isEquals(e)).filter(Boolean)[0] || false
    }
    function isEquals(array) {
        // const res = array.every( (e, i, arr) => e === arr[0])
        // return res ? array[0] : false
        return array.reduce(function (a, b) { return a === b ? a : false })
    }
    function printMatrix() {
        matrix.forEach(row => console.log(row.join('\t')))
    }
}

ticTacToe([
"0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]);
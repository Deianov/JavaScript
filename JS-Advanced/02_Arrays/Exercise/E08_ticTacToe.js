function ticTacToe(args) {

    // don't work with Zero
    const player1 = 'X';
    const player2 = 'O';
    const empty = false;
    let isPlayer1 = true;

    const rows = 3;
    const cols = 3;
    const matrix = new Array(rows).fill(0).map(row => new Array(cols).fill(empty));

    const message = {
        winner: (name) => `Player ${name} wins!`,
        nobody_wins: 'The game ended! Nobody wins :(',
        already_taken: 'This place is already taken. Please choose another!'
    };

    let turns = 1;

    for (let line of args) {
        const [row, col] = line.split(' ').map(Number);

        if (!isValid(row, col)) {
            continue
        }

        if (!isEmpty(row, col)) {
            // player tries to make his turn on already taken place
            console.log(message.already_taken);
            continue
        }

        // fill turn
        matrix[row][col] = isPlayer1 ? player1 : player2;
    
        if (hasWinner() ) {
            // someone wins
            console.log(message.winner(isPlayer1 ? player1 : player2));
            printMatrix();
            return
        }

        // change current player
        isPlayer1 = !isPlayer1;
        
        if ( turns++ === cols * rows ) {
            // there are no free spaces on the dashboard and nobody wins
            console.log(message.nobody_wins);
            printMatrix();
            return
        }
    }

    function hasWinner() { 
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

ticTacToe([
"0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]);

ticTacToe([
"0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]);
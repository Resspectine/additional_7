module.exports = function solveSudoku(matrix) {
    if (findNumber(0, 0)) {
        return matrix;
    }
    function findNumber(x, y) {
        if (y === 9) {
            y = 0;
            x++;
            if (x === 9)
                return true;
        }
        if (matrix[x] === undefined) {
            console.log();
        }
        if (matrix[x][y] === 0) {
            for (let i = 1; i < 10; i++) {
                if (checkIfCorrect(i, x, y)) {
                    matrix[x][y] = i;
                    if (findNumber(x, y + 1)) {
                        return true;
                    }
                }
            }

        } else if (x === 8 && y === 8) {
            return true;
        } else {
            return findNumber(x, y + 1);
        }
        matrix[x][y] = 0;
        return false;
    }
    function checkIfCorrect(number, x, y) {
        for (let i = 0; i < 9; i++) {
            if (number === matrix[x][i] ||
                number === matrix[i][y] ||
                number === matrix[Math.floor(x / 3) * 3 + Math.floor(i / 3)][Math.floor(y / 3) * 3 + i % 3]) {
                return false;
            }
        }
        return true;
    }
};
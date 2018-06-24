/**
 * Создает матрицу размером n * n и заполняет ее по спирали
 *
 * @param {Number} n - размерность матрицы
 * @returns {Number[n][n]} - n * n - матрица, заполненная по спирали
 */
function fillSpiralMatrix(n) {
    const result = [[]];

    let rows = n;
    let cols = n;

    //construct the initial matrix
    for (let x = 0; x < rows; x++) {
        result[x] = [];
        for (let y = 0; y < cols; y++) {
            result[x][y] = 0;
        }
    }

    let value = 1;
    let minCol = 0;
    let maxCol = n-1;
    let minRow = 0;
    let maxRow = n-1;

    while (value <= n*n)
    {
        for (let i = minCol; i <= maxCol; i++) {
            result[minRow][i] = value;
            value++;
        }
        for (let i = minRow+1; i <= maxRow; i++) {
            result[i][maxCol] = value;
            value++;
        }
        for (let i = maxCol-1; i >= minCol; i--) {
            result[maxRow][i] = value;
            value++;
        }
        for (let i = maxRow-1; i >= minRow+1; i--)  {
            result[i][minCol] = value;
            value++;
        }
        minCol++;
        minRow++;
        maxCol--;
        maxRow--;
    }


    result.map(function(res) {
      res.join(' ');
    }).join('\n');

    return result;
}
console.log(fillSpiralMatrix(4));
export default fillSpiralMatrix;

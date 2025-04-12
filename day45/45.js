const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const transposeMatrix = (matrix) => {
    const matrix2 = Array.from({ length: matrix[0].length }, () => Array(matrix.length))
    for (let i = 0; i < matrix[0].length; i++) {
        matrix2[i] = []
        for (let j = 0; j < matrix.length; j++) {
            matrix2[i][j] = matrix[j][i]
        }
    }
    return matrix2
}

const rotateMatrix = (matrix) => {
    let m0 = matrix[0].length
    let m = matrix.length
    for (let i = 0; i < m; i++) {
        for (let j = i + 1; j < m0; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    for (let i = 0; i < m; i++) {
        let k = 0, j = m0 - 1
        while (k < j) {
            let temp = matrix[i][k]
            matrix[i][k] = matrix[i][j]
            matrix[i][j] = temp
            k++
            j--
        }
    }
    return matrix
}
process.stdout.write('Original matrix is \n');
matrix.forEach(row => {
    process.stdout.write('| ' + row.join(' ') + ' |\n');
});

process.stdout.write('Transpose of the matrix is \n');
transposeMatrix(matrix).forEach(row => {
    process.stdout.write('| ' + row.join(' ') + ' |\n');
});

process.stdout.write('90D rotation of the matrix is \n');
rotateMatrix(matrix).forEach(row => {
    process.stdout.write('| ' + row.join(' ') + ' |\n');
});

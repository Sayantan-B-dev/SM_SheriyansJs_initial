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

const spiralMatrix = (matrix) => {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
      return [];
    }
    
    const result = [];
    let t = 0, b = matrix.length - 1, l = 0, r = matrix[0].length - 1;
    
    while (t <= b && l <= r) {
      for (let column = l; column <= r; column++) {
        result.push(matrix[t][column]);
      }
      t++;
      
      for (let row = t; row <= b; row++) {
        result.push(matrix[row][r]);
      }
      r--;
      
      if (t <= b) {
        for (let column = r; column >= l; column--) {
          result.push(matrix[b][column]);
        }
        b--;
      }
      
      if (l <= r) {
        for (let row = b; row >= t; row--) {
          result.push(matrix[row][l]);
        }
        l++;
      }
    }
    
    return result;
  };
  

process.stdout.write('Original matrix is \n');
matrix.forEach(row => {
    process.stdout.write('| ' + row.join(' ') + ' |\n');
});

process.stdout.write('Transpose of the matrix is \n');
transposeMatrix(matrix).forEach(row => {
    process.stdout.write('| ' + row.join(' ') + ' |\n');
});

process.stdout.write('90D rotation of the matrix is \n');
const rotatedMatrix = rotateMatrix(JSON.parse(JSON.stringify(matrix)));
rotatedMatrix.forEach(row => {
    process.stdout.write('| ' + row.join(' ') + ' |\n');
});
process.stdout.write('Spiral traversal of the matrix is \n');
process.stdout.write(spiralMatrix(matrix).join(', '));

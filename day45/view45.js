function generateMatrixInputs() {
    const size = parseInt(document.getElementById("size").value);
    const container = document.getElementById("matrixInputContainer");
    container.innerHTML = "";
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.className = "flex space-x-2";
        for (let j = 0; j < size; j++) {
            const input = document.createElement("input");
            input.type = "number";
            input.className = "matrix-cell bg-gray-700 rounded border border-gray-500";
            row.appendChild(input);
        }
        container.appendChild(row);
    }
}

function getMatrixFromInput() {
    const rows = document.querySelectorAll("#matrixInputContainer > div");
    const matrix = [];
    rows.forEach(row => {
        const cells = row.querySelectorAll("input");
        matrix.push(Array.from(cells).map(input => parseInt(input.value)));
    });
    return matrix;
}

function transposeMatrix(matrix) {
    const matrix2 = Array.from({ length: matrix[0].length }, () => Array(matrix.length));
    for (let i = 0; i < matrix[0].length; i++) {
        matrix2[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            matrix2[i][j] = matrix[j][i];
        }
    }
    return matrix2;
}

function rotateMatrix(matrix) {
    const m0 = matrix[0].length;
    const m = matrix.length;
    for (let i = 0; i < m; i++) {
        for (let j = i + 1; j < m0; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for (let i = 0; i < m; i++) {
        let k = 0, j = m0 - 1;
        while (k < j) {
            let temp = matrix[i][k];
            matrix[i][k] = matrix[i][j];
            matrix[i][j] = temp;
            k++;
            j--;
        }
    }
    return matrix;
}

function spiralMatrix(matrix) {
    const result = [];
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Traverse from left to right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // Traverse downwards
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        if (top <= bottom) {
            // Traverse from right to left
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            // Traverse upwards
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }
    return result;
}

function displayMatrix(matrix, title) {
    const output = document.getElementById("output");
    output.innerHTML = `<h2 class='text-lg font-semibold mb-2 text-white'>${title}</h2>`;

    const grid = document.createElement("div");
    grid.className = "grid gap-2 justify-center";
    grid.style.gridTemplateColumns = `repeat(${matrix[0].length}, minmax(3rem, 1fr))`;

    matrix.forEach(row => {
        row.forEach(value => {
            const cell = document.createElement("div");
            cell.textContent = value;
            cell.className = "matrix-cell bg-gray-700 text-white rounded border border-gray-500 text-center w-12 h-12 flex items-center justify-center text-lg font-medium shadow transition-all duration-300";
            grid.appendChild(cell);
        });
    });

    output.appendChild(grid);
}

function handleAction(action) {
    let matrix = getMatrixFromInput();
    if (action === 'transpose') {
        const result = transposeMatrix(matrix);
        displayMatrix(result, 'Transposed Matrix');
    } else if (action === 'rotate') {
        const result = rotateMatrix(matrix);
        displayMatrix(result, '90° Rotated Matrix');
    } else if (action === 'spiral') {
        const result = spiralMatrix(matrix);
        displayMatrix([result], 'Spiral Matrix');
    } else {
        displayMatrix(matrix, 'Original Matrix');
    }
}

window.onload = generateMatrixInputs;

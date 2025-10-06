const getInput = () => parseInt(document.getElementById("inputNumber").value) || 0;
const output = document.getElementById("outputArea");

const LeftPyramidStar = () => {
    let n = getInput();
    let result = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            result += '*';
        }
        result += '\n';
    }
    output.innerText = result;
}

const LeftPyramidStarReversed = () => {
    let n = getInput();
    let result = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            result += '*';
        }
        result += '\n';
    }
    output.innerText = result;
}

const RightPyramidOneToN = () => {
    let n = getInput();
    let result = '';
    for (let i = 0; i < n; i++) {
        for (let j = n; j > i; j--) {
            result += ' ';
        }
        for (let j = 0; j < i; j++) {
            result += (j + 1);
        }
        result += '\n';
    }
    output.innerText = result;
}

const PerfectPyramid = () => {
    let n = getInput();
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += ' '.repeat(n - i);
        result += '*'.repeat(2 * i - 1);
        result += '\n';
    }
    output.innerText = result;
}

const X = () => {
    let n = getInput();
    let result = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            result += (i === j || i + j === n + 1) ? '*' : ' ';
        }
        result += '\n';
    }
    output.innerText = result;
}

const BigV = () => {
    let n = getInput();
    let result = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= 2 * n - i; j++) {
            result += (i === j || i + j === 2 * n) ? '*' : ' ';
        }
        result += '\n';
    }
    output.innerText = result;
}
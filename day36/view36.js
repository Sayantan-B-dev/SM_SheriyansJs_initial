
const parseInput = (id) => {
    return document.getElementById(id).value.split(',').map(Number);
};

const reverseArray = () => {
    let arr = parseInput("inputReverse");
    let nArr = [];
    for (let j = arr.length - 1; j >= 0; j--) {
        nArr.push(arr[j]);
    }
    document.getElementById("outputReverse").innerText = "Reversed Array (Extra Array):\n" + nArr.join(' ');
};

const reverseArrayInPlace = () => {
    let arr = parseInput("inputReverse");
    let i = 0, j = arr.length - 1;
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    document.getElementById("outputReverse").innerText = "Reversed Array (In-place):\n" + arr.join(' ');
};

const secondLargest = () => {
    let arr = parseInput("inputSecondLargest");
    if (arr.length < 2) {
        document.getElementById("outputSecondLargest").innerText = "Need at least two elements.";
        return;
    }
    let max = Math.max(arr[0], arr[1]);
    let sMax = Math.min(arr[0], arr[1]);
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > max) {
            sMax = max;
            max = arr[i];
        } else if (arr[i] > sMax && arr[i] != max) {
            sMax = arr[i];
        }
    }
    document.getElementById("outputSecondLargest").innerText = "Second Largest = " + sMax;
};

const Left0right1 = () => {
    let arr = parseInput("inputZeroOne");
    let i = 0, j = 0;
    while (i < arr.length) {
        if (arr[i] === 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
        i++;
    }
    document.getElementById("outputZeroOne").innerText = "Sorted 0s & 1s: \n" + arr.join(' ');
};

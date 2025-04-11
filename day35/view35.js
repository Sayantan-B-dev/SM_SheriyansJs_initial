
const checkArmstrong = () => {
    let num = parseInt(document.getElementById("inputArmstrong").value);
    let temp = num, sum = 0;
    let digits = num.toString().length;

    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }

    document.getElementById("outputArmstrong").innerText = num + (sum === num ? " is an Armstrong number ✅" : " is NOT an Armstrong number ❌");
};

const checkStrong = () => {
    let num = parseInt(document.getElementById("inputStrong").value);
    let temp = num, sum = 0;

    const factorial = n => {
        let f = 1;
        for (let i = 1; i <= n; i++) f *= i;
        return f;
    };

    while (temp > 0) {
        let digit = temp % 10;
        sum += factorial(digit);
        temp = Math.floor(temp / 10);
    }

    document.getElementById("outputStrong").innerText = num + (sum === num ? " is a Strong number 💪" : " is NOT a Strong number ❌");
};

const sumArrayDigits = () => {
    let arr = document.getElementById("inputSumDigits").value.split(',').map(Number);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    document.getElementById("outputSumDigits").innerText = "Sum of digits in array = " + sum;
};

const findMinMax = () => {
    let arr = document.getElementById("inputMinMax").value.split(',').map(Number);
    if (arr.length === 0) {
        document.getElementById("outputMinMax").innerText = "Array is empty!";
        return;
    }
    let min = arr[0], max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    document.getElementById("outputMinMax").innerText = `Minimum: ${min}\nMaximum: ${max}`;
};
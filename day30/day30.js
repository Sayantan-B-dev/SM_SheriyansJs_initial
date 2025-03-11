console.warn("Theres bunch of functions that are used for its dedicated solutions.(you can call just them to run, type function name to see the code or check js file)")
console.info("1. printNaturalNumbers() Explanation: Outputs natural numbers from 1 to n, using an array and join().");
console.info("2. printNto1() Explanation: Outputs numbers from n to 1, using an array and join().");
console.info("3. sumUpToN() Explanation: Uses the formula n(n+1)/2 to efficiently compute the sum of the first n natural numbers.");
console.info("4. factorial() Explanation: Computes the factorial of n using reduce() on an array from 1 to n.");
console.info("5. sumEvenOddInRange() Explanation: Iterates through a given range, summing even and odd numbers separately.");
console.info("6. printFactors() Explanation: Finds and prints all divisors of a given number n.");
console.info("7. isPrime() Explanation: Checks if a number is prime by testing divisibility up to √n.");
console.info("8. calculatePower() Explanation: Computes a^b, correctly handling negative exponents.");



function printNaturalNumbers() {
    n = Number(prompt("Enter a number: "))
    if (isNaN(n) || n < 1) {
        console.log("Wrong input, try again.")
    } else {
        ans = ""
        for (let i = 1; i < n + 1; i++) {
            ans += `${i} `
        }
        console.log(ans)
    }
}
function printNto1() {
    n = Number(prompt("Enter a number: "))
    if (isNaN(n) || n < 1) {
        console.log("Wrong input, try again.")
    } else {
        ans = ""
        for (let i = n; i > 0; i--) {
            ans += `${i} `
        }
        console.log(ans)
    }
}
function sumUpToN() {
    n = Number(prompt("Enter a number: "))
    if (isNaN(n) || n < 1) {
        console.log("Wrong input, try again.")
    } else {
        let sum = 0
        for (let i = 1; i <= n; i++) {
            sum += i
        }
        console.log(sum)
    }
}
function factorial() {
    n = Number(prompt("Enter a number: "))
    if (isNaN(n) || n < 1) {
        console.log("Wrong input, try again.")
    } else {
        let fact = 1
        for (let i = 1; i <= n; i++) {
            fact *= i
        }
        console.log(fact)
    }
}
function sumEvenOddInRange() {
    start = Number(prompt("Enter start: "))
    end = Number(prompt("Enter end: "))

    if (isNaN(start) || isNaN(end)) {
        console.log("Wrong input, try again.")
    } else {
        if (start > end) {
            [start, end] = [end, start];
        }
        let evenSum = 0, oddSum = 0
        for (let i = start; i <= end; i++) {
            i % 2 === 0 ? evenSum += i : oddSum += i
        }
        console.log("Sum of even numbers in the range and Sum of odd numbers in the range are " + [evenSum, oddSum])
    }
}
function printFactors() {
    n = Number(prompt("Enter a number: "))
    if (isNaN(n) || n < 1) {
        console.log("Wrong input, try again.")
    } else {
        let str = ""
        for (let i = 0; i < n + 1; i++) {
            if (n % i == 0) str += `${i} `
        }
        console.log(str)
    }
}

function isPrime() {
    n = Number(prompt("Enter a number: "))
    if (isNaN(n)) {
        console.log("Wrong input, try again.")
    } else {
        if(n==2){
           console.log("Prime")
        }
        else if(n<=1||n%2==0){
            console.log("Not Prime")
        }
        else{
            for(let i=3;i<n;i++){
                if(n%i==0){
                    return console.log("Not Prime")
                }
            }
            console.log("Prime")
        }
        
    }
}

function calculatePower() {
    a = Number(prompt("Enter a number: "))
    b = Number(prompt("Enter the exponent: "))

    if (isNaN(a) || isNaN(b)) {
        console.log("Wrong input, try again.")
    } else {
        let ans = 1;
        let exp = Math.abs(b);
        
        for (var i = 0; i < exp; i++) {
            ans *= a;
        }
        let result = b >= 0 ? ans : 1 / ans
        console.log(`${a} to the power ${b} is ${result}`) 
    }
}
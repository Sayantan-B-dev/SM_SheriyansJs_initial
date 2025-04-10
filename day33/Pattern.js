const LeftPyramidStar = () => {
    const prompt = require("prompt-sync")()//This is important
    let n = prompt('Enter number: ')
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            process.stdout.write('*')//This is important
        }
        process.stdout.write('\n')//This is important
    }
}
//LeftPyramidStar()
const LeftPyramidStarReversed = () => {
    const prompt = require("prompt-sync")()//This is important
    let n = prompt('Enter number: ')
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            process.stdout.write('*')//This is important
        }
        process.stdout.write('\n')//This is important
    }
}
//LeftPyramidStarReversed()
const RightPyramidOneToN = () => {
    const prompt = require("prompt-sync")()//This is important
    let n = prompt('Enter number: ')
    for (let i = 0; i < n; i++) {
        for (let j = n; j > i; j--) {
            process.stdout.write(' ')//This is important
        }
        for (let j = 0; j < i; j++) {
            process.stdout.write((j + 1).toString())//This is important
        }
        process.stdout.write('\n')//This is important
    }
}
//RightPyramidOneToN()
const PerfectPyramid = () => {
    const prompt = require("prompt-sync")()//This is important
    let n = prompt('Enter number: ')
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            process.stdout.write(' ')//This is important
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            process.stdout.write('*')//This is important
        }
        process.stdout.write('\n')//This is important
    }
}
//PerfectPyramid()
const X = () => {
    const prompt = require("prompt-sync")()//This is important
    let n = parseInt(prompt('Enter number: '))//need parseInt
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i === j || i + j === n + 1) {
                process.stdout.write('*')//This is important
            } else {
                process.stdout.write(' ')
            }
        }
        process.stdout.write('\n')//This is important
    }
}
// X()
const BigV= () => {
    const prompt = require("prompt-sync")()//This is important
    let n = parseInt(prompt('Enter number: '))//need parseInt
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= 2*n-i; j++) {
            if (i === j || i + j === 2*n) {
                process.stdout.write('*')//This is important
            } else {
                process.stdout.write(' ')
            }
        }
        process.stdout.write('\n')//This is important
    }
}
//BigV()
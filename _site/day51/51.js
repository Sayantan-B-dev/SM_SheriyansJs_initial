const prompt = require('prompt-sync')()
let str = prompt("Enter a string: ")

const isPalindrome = (str) => {
    let i = 0, j = str.length - 1, Palindrome = true
    while (i < j) {
        if (str[i] != str[j]) {
            Palindrome = false
            break
        }
        i++
        j--
    }
    if (Palindrome) process.stdout.write("Palindrome")
    else process.stdout.write("Not Palindrome")
}
//isPalindrome(str)


const toggleAlphabet = (str) => {
    let res = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) res += str[i].toLowerCase()
        else res += str[i].toUpperCase()
    }
    process.stdout.write(res)
}
//toggleAlphabet(str)


const startsWIth = (str) => {
    const stringList = [
        "Apple juice",
        "Application form",
        "Banana bread",
        "Blue sky",
        "Cat tower",
        "Dance floor",
        "Elephant ride",
        "Fast car",
        "Game night",
        "Happy hour"
    ];
    let num = 0
    for (let i = 0; i < stringList.length; i++) {
        if (stringList[i].startsWith(str)) num++
    }
    process.stdout.write(`${str} appears ${num} times in array`)
}
//startsWIth(str)


const capStartEnd = (str) => {
    let arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 1) {
            arr[i] = arr[i].toUpperCase();
        } else if (arr[i].length === 2) {
            arr[i] = arr[i][0].toUpperCase() + arr[i][1].toUpperCase();
        } else {
            let temp = arr[i].slice(1, arr[i].length - 1)
            let c1 = arr[i][0].toUpperCase()
            let c2 = arr[i].slice(-1).toUpperCase()
            arr[i] = c1.concat(temp, c2)
        }
    }
    console.log(arr.join(' '))
}
//capStartEnd(str)
const characterFrequency = (str) => {
    let alphabets = "abcdefghijklmnopqrstuvwxyz"
    str = str.toLowerCase()
    let ans = {}
    for (let i = 0; i < str.length; i++) {
        if (alphabets.includes(str[i])) {
            ans[str[i]] = (ans[str[i]] || 0) + 1;
        }
    }
    const sortedAns = Object.keys(ans).sort();
    for (let key of sortedAns) {
        console.log(`${key}: ${ans[key]}`);
    }
}
//characterFrequency(str)
const isAnagram = () => {
    let s1 = prompt("Enter 1st string: ")
    let s2 = prompt("Enter 2nd string: ")

    let n=0
    if (s1.length != s2.length) {
        console.log("Not Anagram")
        return
    }
    for (let i = 0; i < s1.length; i++) {
        if(s2.includes(s1[i])){
            n++
        }
    }
    if(n==s1.length) console.log("Anagram")
    else console.log("Not Anagram")
}
//isAnagram()
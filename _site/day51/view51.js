
const output = document.getElementById('output');
function getInput() {
  return document.getElementById('userInput').value;
}

function isPalindrome() {
  let str = getInput();
  let i = 0, j = str.length - 1, Palindrome = true;
  while (i < j) {
    if (str[i] !== str[j]) {
      Palindrome = false;
      break;
    }
    i++;
    j--;
  }
  output.textContent = Palindrome ? "Palindrome" : "Not Palindrome";
}

function toggleAlphabet() {
  let str = getInput();
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res += str[i] === str[i].toUpperCase() ? str[i].toLowerCase() : str[i].toUpperCase();
  }
  output.textContent = res;
}

function startsWith() {
  let str = getInput();
  const stringList = [
    "Apple juice", "Application form", "Banana bread", "Blue sky",
    "Cat tower", "Dance floor", "Elephant ride", "Fast car",
    "Game night", "Happy hour"
  ];
  let num = 0;
  for (let i = 0; i < stringList.length; i++) {
    if (stringList[i].startsWith(str)) num++;
  }
  output.textContent = `${str} appears ${num} times in array`;
}

function capStartEnd() {
  let str = getInput();
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 1) {
      arr[i] = arr[i].toUpperCase();
    } else if (arr[i].length === 2) {
      arr[i] = arr[i][0].toUpperCase() + arr[i][1].toUpperCase();
    } else {
      let temp = arr[i].slice(1, arr[i].length - 1);
      let c1 = arr[i][0].toUpperCase();
      let c2 = arr[i].slice(-1).toUpperCase();
      arr[i] = c1.concat(temp, c2);
    }
  }
  output.textContent = arr.join(' ');
}

function characterFrequency() {
  let str = getInput().toLowerCase();
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let ans = {};
  for (let i = 0; i < str.length; i++) {
    if (alphabets.includes(str[i])) {
      ans[str[i]] = (ans[str[i]] || 0) + 1;
    }
  }
  let sortedAns = Object.keys(ans).sort();
  output.innerHTML = sortedAns.map(k => `${k}: ${ans[k]}`).join('<br>');
}

function isAnagram() {
  let s1 = prompt("Enter 1st string: ");
  let s2 = prompt("Enter 2nd string: ");

  if (s1.length !== s2.length) {
    output.textContent = "Not Anagram";
    return;
  }

  let sorted1 = s1.split('').sort().join('');
  let sorted2 = s2.split('').sort().join('');

  output.textContent = sorted1 === sorted2 ? "Anagram" : "Not Anagram";
}

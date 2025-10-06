// Utility: Convert string to array of numbers
const parseArray = (input) => input.split(',').map(Number);

// User Step Rotate (Brute Force)
function userStepRotate() {
  const arr = parseArray(document.getElementById('rotateArray1').value);
  let k = parseInt(document.getElementById('rotateK1').value);
  k = k % arr.length;

  for (let i = 0; i < k; i++) {
    const first = arr.shift();
    arr.push(first);
  }

  document.getElementById('rotateOutput1').textContent = arr.join(', ');
}

// Optimized Rotation (using index math)
function userStepRotateOptimized() {
  const arr = parseArray(document.getElementById('rotateArray2').value);
  const n = arr.length;
  let k = parseInt(document.getElementById('rotateK2').value);
  k = k % n;

  const rotated = arr.slice(k).concat(arr.slice(0, k));
  document.getElementById('rotateOutput2').textContent = rotated.join(', ');
}

// Block Swap Rotate using Reversal Algorithm
function blockSwapRotate() {
  let arr = parseArray(document.getElementById('rotateArray3').value);
  let k = parseInt(document.getElementById('rotateK3').value);
  k = k % arr.length;

  const reverse = (arr, start, end) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };

  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  reverse(arr, 0, arr.length - 1);

  document.getElementById('rotateOutput3').textContent = arr.join(', ');
}

// Linear Search
function linearSearch() {
  const arr = parseArray(document.getElementById('linearArray').value);
  const target = parseInt(document.getElementById('linearTarget').value);

  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      index = i;
      break;
    }
  }

  document.getElementById('linearOutput').textContent = 
    index === -1 ? 'Not found' : `Element found at index ${index}`;
}

// Binary Search
function binarySearch() {
  let arr = parseArray(document.getElementById('binaryArray').value);
  const target = parseInt(document.getElementById('binaryTarget').value);

  arr.sort((a, b) => a - b);
  document.getElementById('binaryOutput').textContent = `Sorted array: ${arr.join(', ')}              `;

  let start = 0, end = arr.length - 1;
  let index = -1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      index = mid;
      break;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  const result = index === -1 
    ? '            Not found' 
    : `            Found element at index ${index}`;

  document.getElementById('binaryOutput').textContent += result;
}

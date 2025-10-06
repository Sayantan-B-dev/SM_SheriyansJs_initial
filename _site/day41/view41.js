
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


const renderBars = (arr, highlight = []) => {
  const container = document.getElementById("barContainer");
  container.innerHTML = '';
  const maxVal = Math.max(...arr);
  arr.forEach((val, idx) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${(val / maxVal) * 100}%`;
    if (highlight.includes(idx)) bar.style.backgroundColor = '#facc15';
    container.appendChild(bar);
  });
};

const bubbleSort = async (arr, delay) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        renderBars(arr, [j, j + 1]);
        await sleep(delay);
      }
    }
  }
  return arr;
};

const selectionSort = async (arr, delay) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      renderBars(arr, [j, minIndex]);
      await sleep(delay / 1.5);
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      renderBars(arr, [i, minIndex]);
      await sleep(delay);
    }
  }
  return arr;
};

const insertionSort = async (arr, delay) => {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      renderBars(arr, [j, j + 1]);
      await sleep(delay / 1.5);
      j--;
    }
    arr[j + 1] = key;
    renderBars(arr, [j + 1]);
    await sleep(delay);
  }
  return arr;
};

async function startSorting() {
  const sortButton = document.getElementById("sortBtn");
  sortButton.disabled = true; // Disable button
  sortButton.classList.add("disabledBtn")

  const input = document.getElementById("arrayInput").value;
  const algo = document.getElementById("algorithm").value;
  const delay = parseInt(document.getElementById("speed").value);
  let arr = input.split(',').map(Number).filter(x => !isNaN(x));
  if (arr.length > 100) {
    alert("For best performance, please enter 100 elements or fewer.");
    return;
  }

  if (arr.length === 0) {
    alert("Please enter a valid array of numbers.");
    sortButton.disabled = false;
    return;
  }

  renderBars(arr);

  let sorted;
  if (algo === 'bubble') sorted = await bubbleSort([...arr], delay);
  else if (algo === 'selection') sorted = await selectionSort([...arr], delay);
  else if (algo === 'insertion') sorted = await insertionSort([...arr], delay);

  document.getElementById("array-output").textContent = `Sorted Array: ${sorted.join(', ')}`;
  sortButton.disabled = false; // Enable button again
  sortButton.classList.remove("disabledBtn")
}

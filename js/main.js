const newArrayBtn = document.querySelector(".newArray");
const selectionSort = document.querySelector(".selectionSort");
const bubbleSort = document.querySelector(".bubbleSort");
const insertionSort = document.querySelector(".insertionSort");
const mergeSort = document.querySelector(".mergeSort");
const quickSort = document.querySelector(".quickSort");
const sizeSlider = document.querySelector("#array-size");
const delaySlider = document.querySelector("#speed-input");
const bars = document.querySelector("#bars");
const topDown = document.querySelector(".topDown");

topDown.addEventListener("click", () => {
  bars.classList.toggle("bars-container-topDown");
});

// Disable Buttons while sorting
function disablenewArray() {
  newArrayBtn.disabled = true;
}
function disableSortingBtn() {
  mergeSort.disabled = true;
  quickSort.disabled = true;
  insertionSort.disabled = true;
  bubbleSort.disabled = true;
  selectionSort.disabled = true;
}

function disableSizeSlider() {
  sizeSlider.disabled = true;
}

// Enable Buttons
function enablenewArray() {
  newArrayBtn.disabled = false;
}
function enableSortingBtn() {
  mergeSort.disabled = false;
  quickSort.disabled = false;
  insertionSort.disabled = false;
  bubbleSort.disabled = false;
  selectionSort.disabled = false;
}
function enableSizeSlider() {
  sizeSlider.disabled = false;
}

// Generate bars and Adding to UI
let array = [];
function createNewArray(n = 60) {
  // Evey Time create a newArray, remove all previous
  bars.innerHTML = "";
  array = [];
  //Random numbers in array
  for (let i = 0; i < n; i++) {
    array.push(Math.trunc(Math.random() * 250 + 1));
  }

  //   Create bar and add to bars
  //    <div class="bar bar-1" style="height: 88px"></div>
  for (let i = 0; i < n; i++) {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.classList.add(`bar-${i + 1}`);
    bar.style.height = `${array[i] * 2}px`;

    bars.appendChild(bar);
  }
}

// Sliding size slider creates new bars
sizeSlider.addEventListener("input", () => {
  createNewArray(parseInt(sizeSlider.value));
});

// Clicking NewArrayBtn generates new bars
newArrayBtn.addEventListener("click", () => {
  createNewArray(parseInt(sizeSlider.value));
  enableSizeSlider();
  enableSortingBtn();
});

// Adjust the Speed of sorting
// delay=(max+minSlider Value)-input
let delay = 100;
delaySlider.addEventListener("input", () => {
  delay = 320 - parseInt(delaySlider.value);
});

function swap(a, b) {
  console.log("Swap");
  let temp = a.style.height;
  a.style.height = b.style.height;
  b.style.height = temp;
}

function waitVisual(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, t);
  });
}

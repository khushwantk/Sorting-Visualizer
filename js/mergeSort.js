// Merging Function
async function mergeSorted(allBars, begin, end, mid) {
  const size1 = mid - begin + 1;
  const size2 = end - mid;

  let left = new Array(size1);
  let right = new Array(size2);

  // Left Color
  for (let i = 0; i < size1; i++) {
    await waitVisual(delay);
    allBars[begin + i].style.background = "#FF7878";
    left[i] = allBars[begin + i].style.height;
  }

  // Right Color
  for (let i = 0; i < size2; i++) {
    await waitVisual(delay);
    allBars[mid + 1 + i].style.background = "#FFB344";
    right[i] = allBars[mid + 1 + i].style.height;
  }
  await waitVisual(delay);

  let i = 0,
    j = 0,
    k = begin;

  while (i < size1 && j < size2) {
    await waitVisual(delay);

    if (parseInt(left[i]) <= parseInt(right[j])) {
      if (size1 + size2 === allBars.length) {
        allBars[k].style.background = "green";
      } else {
        // Mini Sorted Part to be merged
        allBars[k].style.background = "#CEE5D0";
      }
      allBars[k].style.height = left[i];
      i++;
      k++;
    } else {
      if (size1 + size2 === allBars.length) {
        allBars[k].style.background = "green";
      } else {
        // Mini Sorted Part to be merged
        allBars[k].style.background = "#CEE5D0";
      }
      allBars[k].style.height = right[j];
      j++;
      k++;
    }
  }
  while (i < size1) {
    await waitVisual(delay);
    if (size1 + size2 === allBars.length) {
      allBars[k].style.background = "green";
    } else {
      allBars[k].style.background = "#CEE5D0";
    }
    allBars[k].style.height = left[i];
    i++;
    k++;
  }
  while (j < size2) {
    await waitVisual(delay);
    if (size1 + size2 === allBars.length) {
      allBars[k].style.background = "green";
    } else {
      allBars[k].style.background = "#CEE5D0";
    }
    allBars[k].style.height = right[j];
    j++;
    k++;
  }
}

// Main Function
async function sortMerge(allBars, begin, end) {
  if (begin >= end) {
    return;
  }
  const mid = begin + Math.floor((end - begin) / 2);
  await sortMerge(allBars, begin, mid);
  await sortMerge(allBars, mid + 1, end);
  await mergeSorted(allBars, begin, end, mid);
}

mergeSort.addEventListener("click", async () => {
  disablenewArray();
  disableSizeSlider();
  disableSortingBtn();

  const allBars = document.querySelectorAll(".bar");
  let begin = 0;
  let end = allBars.length - 1;
  await sortMerge(allBars, begin, end);

  enablenewArray();
  enableSizeSlider();
  enableSortingBtn();
});

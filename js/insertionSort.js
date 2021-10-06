async function sortInsertion() {
  const allBars = document.querySelectorAll(".bar");

  allBars[0].getElementsByClassName.background = "green";

  for (let i = 1; i < allBars.length; i++) {
    allBars[i].style.background = "blue";
    let j = i - 1;
    let curr = allBars[i].style.height;

    await waitVisual(delay);

    while (j >= 0 && parseInt(allBars[j].style.height) > parseInt(curr)) {
      allBars[j].style.background = "blue";
      allBars[j + 1].style.height = allBars[j].style.height;
      j--;

      await waitVisual(delay);

      for (let k = i; k >= 0; k--) {
        allBars[k].style.background = "green";
      }
    }
    allBars[j + 1].style.height = curr;
  }
}

insertionSort.addEventListener("click", async () => {
  disablenewArray();
  disableSizeSlider();
  disableSortingBtn();

  await sortInsertion();

  enablenewArray();
  enableSizeSlider();
  enableSortingBtn();
});

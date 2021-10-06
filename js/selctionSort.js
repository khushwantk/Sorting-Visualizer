async function sortSelection() {
  const allBars = document.querySelectorAll(".bar");

  for (let i = 0; i < allBars.length; i++) {
    let minIndex = i;

    // Current bar to sort
    allBars[i].style.background = "blue";

    for (let j = i + 1; j < allBars.length; j++) {
      // Traversing bar red. If height is not less than the min => cyan else =>remain red
      allBars[j].style.background = "red";

      await waitVisual(delay);

      if (
        parseInt(allBars[j].style.height) <
        parseInt(allBars[minIndex].style.height)
      ) {
        //   ith bar current sorting bar has to be blue
        if (minIndex !== i) {
          // Make the previous minIndex bar cyan
          allBars[minIndex].style.background = "cyan";
        }
        minIndex = j;
      } else {
        allBars[j].style.background = "cyan";
      }
    }
    await waitVisual(delay);
    swap(allBars[minIndex], allBars[i]);
    allBars[minIndex].style.background = "cyan";
    allBars[i].style.background = "green";
  }
}

selectionSort.addEventListener("click", async () => {
  disablenewArray();
  disableSizeSlider();
  disableSortingBtn();

  await sortSelection();

  enablenewArray();
  enableSizeSlider();
  enableSortingBtn();
});

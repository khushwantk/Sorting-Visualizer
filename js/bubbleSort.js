async function sortBubble() {
  const allBars = document.querySelectorAll(".bar");

  for (let i = 0; i < allBars.length - 1; i++) {
    for (let j = 0; j < allBars.length - i - 1; j++) {
      allBars[j].style.background = "blue";
      allBars[j + 1].style.background = "blue";
      if (
        parseInt(allBars[j].style.height) >
        parseInt(allBars[j + 1].style.height)
      ) {
        await waitVisual(delay);
        swap(allBars[j], allBars[j + 1]);
      }
      allBars[j].style.background = "cyan";
      allBars[j + 1].style.background = "cyan";
    }
    allBars[allBars.length - i - 1].style.background = "green";
  }
  allBars[0].style.background = "green";
}

bubbleSort.addEventListener("click", async () => {
  disablenewArray();
  disableSizeSlider();
  disableSortingBtn();

  await sortBubble();

  enablenewArray();
  enableSizeSlider();
  enableSortingBtn();
});

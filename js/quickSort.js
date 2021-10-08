quickSort.addEventListener("click", async () => {
  disablenewArray();
  disableSizeSlider();
  disableSortingBtn();

  // const allBars = document.querySelectorAll(".bar");
  // let l = 0;
  // let r = allBars.length - 1;
  // await sortQuick(allBars, l, r);

  enablenewArray();
  enableSizeSlider();
  enableSortingBtn();
});

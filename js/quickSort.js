// TODO- Colors Not Working Correctly

async function lomutoMethod(allBars, l, r) {
  let i = l - 1;

  allBars[r].style.background = "red";

  for (let j = l; j <= r - 1; j++) {
    allBars[j].style.background = "#FFB344";
    await waitVisual(delay);

    if (parseInt(allBars[j].style.height) < parseInt(allBars[r].style.height)) {
      i++;
      swap(allBars[i], allBars[j]);
      allBars[i].style.background = "orange";
      if (i != j) {
        allBars[j].style.background = "orange";
      }
      await waitVisual(delay);
    } else {
      await waitVisual(delay);
      allBars[j].style.background = "#FF7878";
    }
  }
  i++;

  await waitVisual(delay);
  swap(allBars[i], allBars[r]);
  allBars[r].style.background = "#FF7878";
  allBars[i].style.background = "green";

  await waitVisual(delay);

  for (let k = 0; k < allBars.length; k++) {
    if (allBars[k].style.background != "green") {
      allBars[k].style.background = "cyan";
    }
  }

  return i;
}

async function sortQuick(allBars, l, r) {
  if (l < r) {
    let pivot = await lomutoMethod(allBars, l, r);
    await sortQuick(allBars, l, pivot - 1);
    await sortQuick(allBars, pivot + 1, r);
  } else {
    if (l >= 0 && r >= 0 && l < allBars.length && r < allBars.length) {
      allBars[r].style.background = "green";
      allBars[l].style.background = "green";
    }
  }
}

quickSort.addEventListener("click", async () => {
  disablenewArray();
  disableSizeSlider();
  disableSortingBtn();

  const allBars = document.querySelectorAll(".bar");
  let l = 0;
  let r = allBars.length - 1;
  await sortQuick(allBars, l, r);

  enablenewArray();
  enableSizeSlider();
  enableSortingBtn();
});

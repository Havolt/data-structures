// Go through the array to find the lowest value.
// Move the lowest value to the front of the unsorted part of the array.
// Go through the array again as many times as there are values in the array.
function selectionSort(unsortedArr: number[]) {
  let lowestNum: number | null = null;
  let lowestNumIndex: number | null = null;
  // Loop through array
  for (let i = 0; i < unsortedArr.length; i++) {
    if (lowestNum === null || lowestNum > unsortedArr[i]) {
      lowestNum = unsortedArr[i];
      lowestNumIndex = i;
    }
  }
  //   If we found a low number then remove it
  if (lowestNumIndex && lowestNum) {
    unsortedArr.slice(lowestNumIndex, 1);
    unsortedArr.unshift(lowestNum);
    lowestNum = null;
    lowestNumIndex = null;
  }

  return unsortedArr;
}

function logSelectSort(unsortedArr: number[]) {
  console.log(selectionSort(unsortedArr));
}

logSelectSort([20, 5, 13, 89, 33, 2, 3, 10, 9]);

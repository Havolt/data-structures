// Go through the array to find the lowest value.
// Move the lowest value to the front of the unsorted part of the array.
// Go through the array again as many times as there are values in the array.
function selectionSort(unsortedArr: number[]) {
  let lowestNum: number | null = null;
  let lowestNumIndex: number | null = null;
  // Loop through all items in array
  for (let i = 0; i < unsortedArr.length; i++) {
    // Loop through remaining items during each iteration
    for (let j = 0 + i; j < unsortedArr.length; j++) {
      if (lowestNum === null || lowestNum > unsortedArr[j]) {
        lowestNum = unsortedArr[j];
        lowestNumIndex = j;
      }
    }

    //   If we found a low number then remove it
    if (lowestNumIndex && lowestNum) {
      // Move everything between start and moved number forward one space
      for (let n = lowestNumIndex; n > i; n--) {
        unsortedArr.splice(n, 1, unsortedArr[n - 1]);
      }
      // Move lowest number to the lowest unsorted position
      unsortedArr.splice(i, 1, lowestNum);
      // Reset lowestNum vals
      lowestNum = null;
      lowestNumIndex = null;
    }
  }

  return unsortedArr;
}

function logSelectSort(unsortedArr: number[]) {
  console.log(selectionSort(unsortedArr));
}

logSelectSort([20, 5, 13, 89, 33, 2, 3, 10, 9]);

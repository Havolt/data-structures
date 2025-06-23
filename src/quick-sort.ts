// Choose a value in the array to be the pivot element.
// Order the rest of the array so that lower values than the pivot element are on the left, and higher values are on the right.
// Swap the pivot element with the first element of the higher values so that the pivot element lands in between the lower and higher values.
// Do the same operations (recursively) for the sub-arrays on the left and right side of the pivot element.
function quickSort(unsortedArr: number[]): number[] {
  //Return sorted array
  return unsortedArr;
}

function logQuickSort(unsortedArr: number[]) {
  console.log(quickSort(unsortedArr));
}

logQuickSort([13, 7, 9, 12, 20, 2, 8]);

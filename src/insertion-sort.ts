// An array with values to sort.
// An outer loop that picks a value to be sorted. For an array with n values, this outer loop skips the first value, and must run n − 1 times.
//  An inner loop that goes through the sorted part of the array, to find where to insert the value. If the value to be sorted is at index i,
// the sorted part of the array starts at index 0 and ends at index i − 1.
function insertionSort(unsortedArr: number[]): number[] {
  console.log("here");
  return [];
}

function logInsertionSort(unsortedArr: number[]): void {
  console.log(unsortedArr);
}

logInsertionSort([7, 13, 9, 12, 20, 2, 8]);

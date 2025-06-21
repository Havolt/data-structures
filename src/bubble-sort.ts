// Go through the array, one value at a time.
// For each value, compare the value with the next value.
// If the value is higher than the next one, swap the values so that the highest value comes last.
// Go through the array as many times as there are values in the array.
function bubbleSort(numArr: number[]): number[] {
  let lastSwapPos = numArr.length - 1;
  let swapped = false;
  // Go through all items
  for (let i = 0; i < numArr.length; i++) {
    // One less item to check with each loop
    for (let j = 0; j < lastSwapPos; j++) {
      if (numArr[j] > numArr[j + 1]) {
        const tempFirst = numArr[j];
        numArr[j] = numArr[j + 1];
        numArr[j + 1] = tempFirst;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
    swapped = false;
    lastSwapPos--;
  }
  return numArr;
}

console.log(bubbleSort([5, 40, 10, 3, 1, 2, 20, 8]));

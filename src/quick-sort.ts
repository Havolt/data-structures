// Choose a value in the array to be the pivot element.
// Order the rest of the array so that lower values than the pivot element are on the left, and higher values are on the right.
// Swap the pivot element with the first element of the higher values so that the pivot element lands in between the lower and higher values.
// Do the same operations (recursively) for the sub-arrays on the left and right side of the pivot element.
function quickSort(
  array: number[],
  low: number = 0,
  high: number | null = null
): number[] {
  if (high === null) {
    high = array.length - 1;
  }

  // If low is not less than high then we are of an array of 0 or 1
  if (low < high) {
    const pivotIndex = partition(array, low, high);
    quickSort(array, low, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, high);
  }
  return array;
}

function partition(array: number[], low: number, high: number) {
  const pivot = array[high];
  let i = low - 1;

  // Loop through the elements starting from the low position to high
  for (let j = low; j < high; j++) {
    // If an item should be to the left of the pivot then swap it with i and increment i
    if (array[j] <= pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Swap the last item after the loop with the highest item
  [array[i + 1], array[high]] = [array[high], array[i + 1]];

  return i + 1;
}

function logQuickSort(array: number[]) {
  console.log(quickSort(array));
}

logQuickSort([13, 7, 9, 12, 20, 2, 8]);

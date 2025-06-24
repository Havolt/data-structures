// Create a new array for counting how many there are of the different values.
// Go through the array that needs to be sorted.
// For each value, count it by increasing the counting array at the corresponding index.
// After counting the values, go through the counting array to create the sorted array.
// For each count in the counting array, create the correct number of elements, with values that correspond to the counting array index.
function countingSort(array: number[]) {
  const orderArray: number[] = [];
  let sortingIndex = 0;

  for (let i = 0; i < array.length; i++) {
    const currNum = array[i];
    if (orderArray[currNum] === undefined) {
      orderArray[currNum] = 0;
    }
    orderArray[currNum]++;
  }

  for (let i = 0; i < orderArray.length; i++) {
    if (orderArray[i]) {
      for (let j = 0; j < orderArray[i]; j++) {
        array[sortingIndex] = i;
        sortingIndex++;
      }
    }
  }
  console.log(array);
  console.log(orderArray);
  return array;
}

countingSort([3, 5, 1, 1, 3, 1, 2, 5, 1]);

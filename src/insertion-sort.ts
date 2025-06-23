// An array with values to sort.
// An outer loop that picks a value to be sorted. For an array with n values, this outer loop skips the first value, and must run n − 1 times.
//  An inner loop that goes through the sorted part of the array, to find where to insert the value. If the value to be sorted is at index i,
// the sorted part of the array starts at index 0 and ends at index i − 1.
function insertionSort(unsortedArr: number[]): number[] {
  // We can't sort anything with less than two numbers
  if (unsortedArr.length < 2) {
    return unsortedArr;
  }

  // Loop through array to check all numbers
  for (let i = 1; i < unsortedArr.length; i++) {
    let currentNum = unsortedArr[i];
    // Loop through the sorted section of the array
    for (let j = i - 1; j >= 0; j--) {
      // If the current number is larger than sorted list max then leave as is
      if (j === i - 1 && unsortedArr[j] < currentNum) {
        break;
      }
      // If number to sort is less than the iteration number then move iteration number to the right
      if (currentNum < unsortedArr[j]) {
        unsortedArr[j + 1] = unsortedArr[j];
      }
      // If number to sort is greater than item below it then set it to current iteration number and end loop
      if (j === 0 || unsortedArr[j - 1] <= currentNum) {
        unsortedArr[j] = currentNum;
        break;
      }
    }
  }
  return unsortedArr;
}

function logInsertionSort(unsortedArr: number[]): void {
  const initialArr = [...unsortedArr];
  console.log(initialArr, insertionSort(unsortedArr));
}

logInsertionSort([13, 7, 9, 12, 20, 2, 8]);
logInsertionSort([3, 2, 1]);

// Test cases from Gemini
logInsertionSort([]); // Expected: []
logInsertionSort([5]); // Expected: [5]
logInsertionSort([2, 1]); // Expected: [1, 2]
logInsertionSort([1, 2]); // Expected: [1, 2]
logInsertionSort([5, 2, 8, 1, 9, 4]); // Expected: [1, 2, 4, 5, 8, 9]
logInsertionSort([1, 2, 3, 4, 5]); // Expected: [1, 2, 3, 4, 5]
logInsertionSort([5, 4, 3, 2, 1]); // Expected: [1, 2, 3, 4, 5]

// 2. Arrays with Duplicates
logInsertionSort([3, 1, 4, 1, 5, 9, 2, 6]); // Expected: [1, 1, 2, 3, 4, 5, 6, 9]
logInsertionSort([7, 7, 7, 7]); // Expected: [7, 7, 7, 7]

// 3. Arrays with Negative Numbers
logInsertionSort([-5, -2, -8, -1, -9, -4]); // Expected: [-9, -8, -5, -4, -2, -1]
logInsertionSort([-1, -2, -3]); // Expected: [-3, -2, -1]
logInsertionSort([-5, 0, 5, -2]); // Expected: [-5, -2, 0, 5]

// 4. Large Numbers
logInsertionSort([1000, 100, 10, 1]); // Expected: [1, 10, 100, 1000]

// 5. Specific Edge Cases / Tricky Orders
logInsertionSort([3, 2, 1]); // Expected: [1, 2, 3]
logInsertionSort([1, 3, 2]); // Expected: [1, 2, 3]
logInsertionSort([2, 3, 1]); // Expected: [1, 2, 3]
logInsertionSort([1, 5, 2, 6, 3, 4]); // Expected: [1, 2, 3, 4, 5, 6]
logInsertionSort([4, 2, 1, 3]); // Expected: [1, 2, 3, 4]

// Example of the format you provided:
logInsertionSort([13, 7, 9, 12, 20, 2, 8]); // Expected: [2, 7, 8, 9, 12, 13, 20]

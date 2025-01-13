// Bubble Sort
// Description: Repeatedly swap adjacent elements if they are in the wrong order
// Average Complexity	O(n^2)
// Best Case	O(n)
// Worst Case	O(n^2)
// Space Complexity	O(1)
export function bubbleSort(arr: Number[]) {
    // Edge cases
    if (arr.length <= 1) {
        return;
    }
    let n = arr.length;
    
    let i = 0;
    let j = 0
    // Loop through all elements
    for(i = 0; i < n; i++) {
        // Loop through remaining elements
        for(j = 0; j < (n - i - 1); j++) {
            // If adjacents elements are out of order, swap them
            if(arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }

}
// Selection Sort
// Description: Selects the smallest or largest element and puts in the correct place
// Time Complexity: O(n^2) for all cases.
// Space Complexity: O(1)
export function selectionSort(arr: Number[]) {
    let n = arr.length;
    // Edge Cases
    if (n <= 1) return;
    let smallest = 0;
    let i=0;
    let j=0;
    // Loop through each element to find the smallest for its position
    for (i=0; i<n; i++) {
        smallest = i;
        // Loop through the remaining elements to find the next smallest
        for (j=i+1; j<n; j++) {
            // If the current smallest is larget then the next element, set it as the new smallest
            if (arr[smallest] > arr[j]) {
                smallest = j;
            }
        }
        // Place smallest value at starting position
        let temp = arr[i];
        arr[i] =  arr[smallest];
        arr[smallest] = temp;
    }
}
// Insertion Sort
// Description: Build the sorted array one element at a time by inserting each element into its correct position.
// Time Complexity: O(n^2) (worst), O(n) (best for nearly sorted arrays).
// Space Complexity: O(1).
export function insertionSort(arr: Number[]) {
    let n = arr.length;
    // Edge Case
    if (n <= 1) return;

    let i=0;
    let j=0;
    let key;
    for (i = 1; i < n; i++)
    {
        key = arr[i];
        j = i - 1;

        // Loop through current values and see if any are out of place
        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        // Put key value in the right place
        arr[j + 1] = key;
    }
}
// Merge Sort
// Description: Divide the array into halves (starting with groups of 1 and 2), sort each half, and merge them
//  until the entire array is rebuilt sorted
// Time Complexity: O(nlog⁡n) for all cases.
// Space Complexity: O(n) (requires auxiliary space).
export function mergeSort(array: Number[]) {
    const half = array.length / 2;
  
    // Returns the array if it cannot be divide (length less than 2)
    if (array.length < 2){
      return array;
    }
  
    // Splits current array in half
    const left: Number[] = array.splice(0, half);
    // Continue to split the left and right sides of the array in half until each section is 
    //  split into 1 or 2 elements. Sort each section, merge sections, until array is built back up sorted
    return merge(mergeSort(left),mergeSort(array));
  }
  
function merge(left: Number[], right: Number[]) {
    let arr: Number[] = [];

    // While left and right arrays have elements, check first element of each 
    //  to see which has the smallest value
    while (left.length && right.length) {
        // push smallest element into array and repeat until left or right is empty
        if (left[0] < right[0]) {
            arr.push(left.shift()!);
        } else {
            arr.push(right.shift()!);
        }
    }
    // Return sorted array (arr) with remainder of left or right arrays.
    //  Remainder will be in order because it will be the larget value between all arrays.
    return [ ...arr, ...left, ...right ];
}

// Quick Sort
// Description: Partition the array around a pivot and recursively sort the partitions.
// Time Complexity: O(nlog⁡n) (average), O(n^2) (worst).
// Space Complexity: O(log⁡n) (in-place recursion stack).

export function quickSort(array: number[]): number[] {;
    // Base case: arrays with 0 or 1 element are already sorted
    if (array.length <= 1) {
        return array;
    }

    // Choose Random pivot index (Using first or last element could lead to O(n^2) Time Complexity)
    const pivotIndex = getRandomInt(0, array.length-1);
    const pivot = array[pivotIndex];

    // Partition the array into two halves: less than and greater than the pivot
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < array.length; i++) {
        if (i === pivotIndex) continue; // Skip if index is the same as pivot
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    // Recursively sort the left and right partitions and concatenate
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Helper Function for quickSort
// min inclusive
// max inclusive
function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Heap Sort
// Description: Use a heap to repeatedly extract the maximum/minimum element.
// Time Complexity: O(nlog⁡n).
// Space Complexity: O(1) (in-place).
export function heapSort(array: number[]): number[] {
    const n = array.length;

    // Build the max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i);
    }

    // Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
        // Swap the root (largest element) with the last element
        [array[0], array[i]] = [array[i], array[0]];

        // Call heapify on the reduced heap
        heapify(array, i, 0);
    }

    return array;
}

// Function to maintain the max heap property
function heapify(array: number[], n: number, i: number): void {
    let largest = i; // Assume the current node is the largest
    const left = 2 * i + 1; // Left child index
    const right = 2 * i + 2; // Right child index

    // If the left child is larger than the current largest
    if (left < n && array[left] > array[largest]) {
        largest = left;
    }

    // If the right child is larger than the current largest
    if (right < n && array[right] > array[largest]) {
        largest = right;
    }

    // If the largest is not the root
    if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]]; // Swap

        // Recursively heapify the affected subtree
        heapify(array, n, largest);
    }
}

// Linear Search
// Description: Search for target by checking elements one by one
// Time Complexity: O(n).
// Space Complexity: O(1).
export function linearSearch(array: Number[], target: Number): boolean{
    let n = array.length;

    for (let i=0; i<n; i++) {
        if (target === array[i]) return true;
    }
    return false;
}

export function binarySearch(array: Number[], target: Number) : boolean{
    // Edge cases
    if (!array || array.length === 0) return false;
    if (array.length === 1) {
        if (array[0] === target) return true;
        else return false;
    }
    let start = 0;
    let end = array.length;
    let mid = Math.floor(end / 2);
    if (target === array[mid]) { // target found
        return true;
    } else if (target < array[mid]) { // target might be in first half
        end = mid;
    } else { // target might be in second half
        start = mid;
    }
    // Start search with half of current array
    return binarySearch(array.slice(start, end), target)
}
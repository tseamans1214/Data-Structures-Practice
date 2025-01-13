"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = bubbleSort;
exports.selectionSort = selectionSort;
exports.insertionSort = insertionSort;
exports.mergeSort = mergeSort;
exports.quickSort = quickSort;
exports.heapSort = heapSort;
exports.countingSort = countingSort;
exports.radixSort = radixSort;
exports.linearSearch = linearSearch;
exports.binarySearch = binarySearch;
// Bubble Sort
// Description: Repeatedly swap adjacent elements if they are in the wrong order
// Average Complexity	O(n^2)
// Best Case	O(n)
// Worst Case	O(n^2)
// Space Complexity	O(1)
function bubbleSort(arr) {
    // Edge cases
    if (arr.length <= 1) {
        return;
    }
    var n = arr.length;
    var i = 0;
    var j = 0;
    // Loop through all elements
    for (i = 0; i < n; i++) {
        // Loop through remaining elements
        for (j = 0; j < (n - i - 1); j++) {
            // If adjacents elements are out of order, swap them
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
// Selection Sort
// Description: Selects the smallest or largest element and puts in the correct place
// Time Complexity: O(n^2) for all cases.
// Space Complexity: O(1)
function selectionSort(arr) {
    var n = arr.length;
    // Edge Cases
    if (n <= 1)
        return;
    var smallest = 0;
    var i = 0;
    var j = 0;
    // Loop through each element to find the smallest for its position
    for (i = 0; i < n; i++) {
        smallest = i;
        // Loop through the remaining elements to find the next smallest
        for (j = i + 1; j < n; j++) {
            // If the current smallest is larget then the next element, set it as the new smallest
            if (arr[smallest] > arr[j]) {
                smallest = j;
            }
        }
        // Place smallest value at starting position
        var temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;
    }
}
// Insertion Sort
// Description: Build the sorted array one element at a time by inserting each element into its correct position.
// Time Complexity: O(n^2) (worst), O(n) (best for nearly sorted arrays).
// Space Complexity: O(1).
function insertionSort(arr) {
    var n = arr.length;
    // Edge Case
    if (n <= 1)
        return;
    var i = 0;
    var j = 0;
    var key;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
        // Loop through current values and see if any are out of place
        while (j >= 0 && arr[j] > key) {
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
function mergeSort(array) {
    var half = array.length / 2;
    // Returns the array if it cannot be divide (length less than 2)
    if (array.length < 2) {
        return array;
    }
    // Splits current array in half
    var left = array.splice(0, half);
    // Continue to split the left and right sides of the array in half until each section is 
    //  split into 1 or 2 elements. Sort each section, merge sections, until array is built back up sorted
    return merge(mergeSort(left), mergeSort(array));
}
function merge(left, right) {
    var arr = [];
    // While left and right arrays have elements, check first element of each 
    //  to see which has the smallest value
    while (left.length && right.length) {
        // push smallest element into array and repeat until left or right is empty
        if (left[0] < right[0]) {
            arr.push(left.shift());
        }
        else {
            arr.push(right.shift());
        }
    }
    // Return sorted array (arr) with remainder of left or right arrays.
    //  Remainder will be in order because it will be the larget value between all arrays.
    return __spreadArray(__spreadArray(__spreadArray([], arr, true), left, true), right, true);
}
// Quick Sort
// Description: Partition the array around a pivot and recursively sort the partitions.
// Time Complexity: O(nlog⁡n) (average), O(n^2) (worst).
// Space Complexity: O(log⁡n) (in-place recursion stack).
function quickSort(array) {
    ;
    // Base case: arrays with 0 or 1 element are already sorted
    if (array.length <= 1) {
        return array;
    }
    // Choose Random pivot index (Using first or last element could lead to O(n^2) Time Complexity)
    var pivotIndex = getRandomInt(0, array.length - 1);
    var pivot = array[pivotIndex];
    // Partition the array into two halves: less than and greater than the pivot
    var left = [];
    var right = [];
    for (var i = 0; i < array.length; i++) {
        if (i === pivotIndex)
            continue; // Skip if index is the same as pivot
        if (array[i] < pivot) {
            left.push(array[i]);
        }
        else {
            right.push(array[i]);
        }
    }
    // Recursively sort the left and right partitions and concatenate
    return __spreadArray(__spreadArray(__spreadArray([], quickSort(left), true), [pivot], false), quickSort(right), true);
}
// Helper Function for quickSort
// min inclusive
// max inclusive
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Heap Sort
// Description: Use a heap to repeatedly extract the maximum/minimum element.
// Time Complexity: O(nlog⁡n).
// Space Complexity: O(1) (in-place).
function heapSort(array) {
    var _a;
    var n = array.length;
    // Build the max heap
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i);
    }
    // Extract elements from the heap one by one
    for (var i = n - 1; i > 0; i--) {
        // Swap the root (largest element) with the last element
        _a = [array[i], array[0]], array[0] = _a[0], array[i] = _a[1];
        // Call heapify on the reduced heap
        heapify(array, i, 0);
    }
    return array;
}
// Function to maintain the max heap property
function heapify(array, n, i) {
    var _a;
    var largest = i; // Assume the current node is the largest
    var left = 2 * i + 1; // Left child index
    var right = 2 * i + 2; // Right child index
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
        _a = [array[largest], array[i]], array[i] = _a[0], array[largest] = _a[1]; // Swap
        // Recursively heapify the affected subtree
        heapify(array, n, largest);
    }
}
// Counting Sort
// Description: Count occurrences of each element and calculate their positions.
// Time Complexity: O(n+k), where k is the range of input.
// Space Complexity: O(k).
function countingSort(array) {
    if (array.length === 0) {
        return array; // Return empty array if input is empty
    }
    // Find the range of the input array
    var max = Math.max.apply(Math, array);
    var min = Math.min.apply(Math, array);
    var range = max - min + 1;
    // Create a count array and initialize it to zero
    var count = [];
    for (var i = 0; i < range; i++) {
        count[i] = 0;
    }
    // Populate the count array by counting the occurances of each value
    // Example: array = [4, 2, 2, 8, 3, 3, 1]
    //  count = [1, 2, 2, 1, 0, 0, 0, 1], means [1:1, 2:2, 3:2, 4:1, 5:0, 6:0, 7:0, 8:1]
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var num = array_1[_i];
        count[num - min]++;
    }
    // Reconstruct the sorted array
    var sortedArray = [];
    for (var i = 0; i < count.length; i++) {
        while (count[i] > 0) { // Add current number as many times as it occurs in given array
            sortedArray.push(i + min);
            count[i]--;
        }
    }
    return sortedArray;
}
// Radix Sort
// Description: Sort elements digit by digit using counting sort as a subroutine.
// Time Complexity: O(n*k), where k is the number of digits.
// Space Complexity: O(n+k).
function radixSort(array) {
    // Get the maximum number to know the number of digits
    var max = Math.max.apply(Math, array);
    // Perform counting sort for every digit (from least significant to most significant)
    var exp = 1; // exp is the place value (1s, 10s, 100s, ...)
    while (Math.floor(max / exp) > 0) {
        countingSortByDigit(array, exp);
        exp *= 10;
    }
    return array;
}
function countingSortByDigit(array, exp) {
    var n = array.length;
    var output = new Array(n);
    var count = [];
    for (var i = 0; i < 10; i++) {
        count[i] = 0;
    }
    // Count occurrences of digits
    for (var i = 0; i < n; i++) {
        var digit = Math.floor(array[i] / exp) % 10;
        count[digit]++;
    }
    // Change count[i] so that count[i] now contains actual position of this digit in output[]
    for (var i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    // Build the output array
    for (var i = n - 1; i >= 0; i--) {
        var digit = Math.floor(array[i] / exp) % 10;
        output[count[digit] - 1] = array[i];
        count[digit]--;
    }
    // Copy the sorted output array to the original array
    for (var i = 0; i < n; i++) {
        array[i] = output[i];
    }
}
// Linear Search
// Description: Search for target by checking elements one by one
// Time Complexity: O(n).
// Space Complexity: O(1).
function linearSearch(array, target) {
    var n = array.length;
    for (var i = 0; i < n; i++) {
        if (target === array[i])
            return true;
    }
    return false;
}
function binarySearch(array, target) {
    // Edge cases
    if (!array || array.length === 0)
        return false;
    if (array.length === 1) {
        if (array[0] === target)
            return true;
        else
            return false;
    }
    var start = 0;
    var end = array.length;
    var mid = Math.floor(end / 2);
    if (target === array[mid]) { // target found
        return true;
    }
    else if (target < array[mid]) { // target might be in first half
        end = mid;
    }
    else { // target might be in second half
        start = mid;
    }
    // Start search with half of current array
    return binarySearch(array.slice(start, end), target);
}

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
// Description: Divide the array into halves, sort each half, and merge them.
// Time Complexity: O(nlog⁡n) for all cases.
// Space Complexity: O(n) (requires auxiliary space).
function mergeSort(array) {
    var half = array.length / 2;
    if (array.length < 2) {
        return array;
    }
    var left = array.splice(0, half);
    return merge(mergeSort(left), mergeSort(array));
}
function merge(left, right) {
    var arr = [];
    console.log("New Merge");
    console.log("Left: " + left);
    console.log("Right: " + right);
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        }
        else {
            arr.push(right.shift());
        }
        console.log("Merge arr: " + arr);
    }
    return __spreadArray(__spreadArray(__spreadArray([], arr, true), left, true), right, true);
}
// Quick Sort
// Heap Sort
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

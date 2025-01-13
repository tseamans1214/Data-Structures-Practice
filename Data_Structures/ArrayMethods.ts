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
// Description:


export function mergeSort(arr: Number[]) {

}

// Quick Sort
// Heap Sort

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
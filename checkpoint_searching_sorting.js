// Insertion Sort Implementation in JavaScript

// Function to perform insertion sort
function insertionSort(arr) {
    // Loop through each element in the array
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];  // Element to be placed at the correct position
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        // Place key at the correct position
        arr[j + 1] = key;
    }

    return arr;
}

// Example usage
let array = [12, 11, 13, 5, 6];
console.log("Original array:", array);
let sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);

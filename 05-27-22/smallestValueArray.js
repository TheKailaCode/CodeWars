// Instructions

/* Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.*/

function min(arr, toReturn) {

    let minValue = Number.MAX_SAFE_INTEGER
    let index = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i]
            index = i
        }
    }
    if (toReturn === 'value') {
        return minValue
    } else {
        return index
    }
}
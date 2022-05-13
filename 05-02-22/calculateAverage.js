// Instructions

// Write a function which calculates the average of the numbers in a given list.

function find_average(array) {
    // your code here
    let add = array.reduce((acc, c) => acc + c, 0)
    let average = add / array.length
    if (array.length === 0) {
        return 0
    } else {
        return average;
    }
}
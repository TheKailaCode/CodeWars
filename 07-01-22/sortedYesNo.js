// Instructions

/* Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise */

function isSortedAndHow(array) {
    if (Math.min(...array) === array[0]) {
        return "yes, ascending"
    } else if (Math.max(...array) === array[0]) {
        return "yes, descending"
    } else {
        return "no"
    }
}
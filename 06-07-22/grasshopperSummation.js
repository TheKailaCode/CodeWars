// Instructions

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
    // Code here
    let newArr = []
    for (let i = 1; i <= num; i++) {
        newArr.push(i)
    }
    return newArr.reduce((acc, c) => acc + c)
}
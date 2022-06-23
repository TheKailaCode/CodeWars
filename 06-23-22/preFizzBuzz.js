// Instructions

// Your expected output is an array of positive integers from 1 to n (inclusive). Y our job is to write an algorithm that gets you from the input to the output.

function preFizz(n) {

    let newArr = []

    for (let i = 1; i <= n; i++) {
        if (i >= 0) {
            newArr.push(i)
        }
    }
    return newArr
}
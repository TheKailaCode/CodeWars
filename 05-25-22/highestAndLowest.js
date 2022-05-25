// Instructions

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// function highAndLow(numbers) {
//     // ...
//     let arr = numbers.split(' ')
//     let newArr = arr.sort((a, b) => a - b)
//     let firstDig = arr[0]
//     let lastDig = arr[arr.length - 1]
//     return `${lastDig} ${firstDig}`
// }

// Refactored Code Once challenge was passed

// New Solution

function highAndLow(numbers) {
    // ...
    let arr = numbers.split(' ').sort((a, b) => a - b)
    let firstDig = arr[0]
    let lastDig = arr[arr.length - 1]
    return `${lastDig} ${firstDig}`
}
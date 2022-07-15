// Instructions

// Write a function that produces an array with the numbers 0 to N-1 in it.

const arr = N => {
    let newArr = []
    for (let i = 0; i <= N - 1; i++) {
        newArr.push(i)
    }
    return newArr
};
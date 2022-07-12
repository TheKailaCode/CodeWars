// Instructions

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
    let str = String(n).split('')
    let descend = str.sort((a, b) => b - a)

    return Number(descend.join(''))
}
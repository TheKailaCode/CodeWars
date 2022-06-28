// Instructions

/* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered! */

function getSum(a, b) {
    let sum = []
    if (a < b) {
        for (let i = a; i <= b; i++) {
            sum.push(i)
        }
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            sum.push(i)
        }
    }
    if (a != b) {
        return sum.reduce((curr, next) => curr + next)
    } else {
        return a
    }
}
// Instructions

// Given an integral number, determine if it's a square number:

var isSquare = function (n) {
    let root = Math.sqrt(n)

    if (root % 1 === 0) {
        return true;
    } else {
        return false;
    }
}
// Instructions 

// Given a non-empty array of integers, return the result of multiplying the values together in order. 

function grow(x) {
    let multiple = x.reduce((x, y) => x * y)
    return multiple
}
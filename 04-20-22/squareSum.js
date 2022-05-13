// Instructions

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers) {
    let numSquared = numbers.map((i) => i * i)

    let numAdd = numSquared.reduce((acc, c) => acc + c, 0)

    return numAdd
}

    // map over the numbers array passing in i as the parameter
    // multiply i times itself to square it
    // map will return the array of squared elements
    // use reduce method to add each element for a grand total
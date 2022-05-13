// Instructions

// Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
    let newArr = []
    let reversedNewArr = newArr.reverse()
    for (let i = n; i >= 1; i--) {
        newArr.push(i)
    }
    return reversedNewArr;
};
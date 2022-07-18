// Instructions

/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.*/

function countPositivesSumNegatives(input) {

    if (input == null) {
        return []
    } else if (!input.length) {
        return []
    } else {
        let pos = input.filter(el => el > 0)
        let neg = input.filter(el => el < 0)
        let sumNeg = neg.reduce((a, b) => a + b)
        return [pos.length, sumNeg]

    }
}
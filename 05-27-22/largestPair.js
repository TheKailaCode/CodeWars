// Instructions

// Given a sequence of numbers, find the largest pair sum in the sequence.

function largestPairSum(numbers) {
    //TODO: Write your Code here
    let sort = numbers.sort((a, b) => b - a)
    return sort[0] + sort[1]
}


  // sort array in ascending order
  // grab values from index 0 and 1
  // sreturn sum of values 
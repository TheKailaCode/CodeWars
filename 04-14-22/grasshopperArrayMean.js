//Instructions

//Find the mean (average) of a list of numbers in an array.

var findAverage = function (nums) {
    // Code here
    let sum = nums.reduce((acc, c) => acc + c)
    let bottomNum = nums.length
    let avg = sum / bottomNum

    return avg
}

  //the reduce method is used to add values in an array and get the sum
  //the length of the array is the amount of numbers that the sum will be divided by
  //the formula for average is sum / total amount 
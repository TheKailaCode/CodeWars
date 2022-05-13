// Instructons

// You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array.

function sumSquares(array) {

    return array.reduce((acc, c) => acc + c ** 2, 0);
}

/*var result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i] ** 2;
  }*/
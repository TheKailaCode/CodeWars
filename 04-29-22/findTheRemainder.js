// Instructions

// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

function remainder(n, m) {
    // Divide the larger argument by the smaller argument and return the remainder
    if (n > m) {
        return n % m
    } else if (n < m) {
        return m % n
    } else if (n === 0 || m === 0) {
        return NaN
    } else if (n === m) {
        return 0
    }
}

/*else if(n < 0 || m < 0 && n > m){
   return n % m
  }else if(n < 0 || m < 0 && m > n){
   return m % n
    }*/
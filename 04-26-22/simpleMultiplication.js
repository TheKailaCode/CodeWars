// Instructions 

// This kata is about multiplying a given number by eight if 
//it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    // your code........
    if (number % 2 === 0) {
        number *= 8
    } else {
        number *= 9
    }
    return number
}
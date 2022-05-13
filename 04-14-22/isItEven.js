//Instructions

/*In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.*/

function testEven(n) {
    //Your awesome code here!
    if (n % 2 === 0) {
        return true
    } else {
        return false
    }
}

//use modulo to divide a number and get a remainder
//since all even numbers are divisible by 2, the remainder from an even number should equal 0
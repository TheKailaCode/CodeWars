// Instructions

// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

function numberToPower(number, power) {
    // Code here
    let newNumber = 1
    for (let i = 0; i < power; i++) {
        newNumber = newNumber * number
    }
    return newNumber

}
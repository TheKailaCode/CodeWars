// Instructions

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

function squareDigits(num) {
    const arrayOfDigits = Array.from(String(num))
    let result = arrayOfDigits.map(x => x ^ 2)


    return Number(result)
}

/*function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};*/

  // I did not complete this kata but I understand the solution and will try again in the future
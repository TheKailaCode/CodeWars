// Instructions

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x) {
    //your code here
    let expression = (x * 50) + 6
    if (typeof x === 'string') {
        return "Error"
    } else {
        return expression
    }
}

  // set variable to create expression of multiply by 50 and add 6
  // use typeof function to check if parameter is string or number
// Instructions

// Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.

function greet(name) {
    if (name == null || name == '') {
        return null
    } else {
        return `hello ${name}!`
    }
}
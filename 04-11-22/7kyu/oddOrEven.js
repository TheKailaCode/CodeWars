//Instuctions

//Given a list of integers, determine whether the sum of its elements is odd or even.

//Give your answer as a string matching "odd" or "even".

function oddOrEven(array) {
    //enter code here
    let sum = array.reduce((acc, c) => { return acc + c }, 0)

    if (sum % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
}
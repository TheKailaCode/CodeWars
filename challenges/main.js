//Simple Pig Latin

// PARAMETERS - Given a string with varying number of words in it. Words may have punctuation marks separated by a space
//RESULT - A string of 1 or multiple words separated by spaces with 'ay' appended to the end of each word unless that word is a punctuation mark
// EXAMPLES - pigIt('Pig latin is cool'),'igPay atinlay siay oolcay' || pigIt('This is my string'),'hisTay siay ymay tringsay'
// PSEUDOCODE - spilt the string into individual words then split each word into two parts - the first letter and the rest of the string. Reverse the order of these parts, and concatinate them back together. Check if a word is actually a punctuation mark and if it is not then add 'ay' to the end. Concatenate the individual words back into a single string and return.

// push, slice, charCodeAt, split, join, map, reverse, match

function pigIt(string) {
    let marks = ['.', '!', '?', '"', ',']
    result = string.split(' ').map(word => word.slice(1) + word[0] + (marks.includes(word) ? '' : 'ay')).join(' ')
    console.log(result)
}
//pigIt('Hello World !')

// Moving Zeros to the End

// PARAMETERS - Given a single array with multiple types of elements including numbers, strings, and booleans. 
// RESULT - A single array with same elements but the zeros are moved to the end of the array. Other elements should remain in the same location of the array.
// EXAMPLES - 
//moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
//moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
// PSEUDOCODE - Iterate over starting array and identify zeros. Take the existing zeros and move them to the end of the array or count zeros, remove them, append the correct amount of zeros to the end of the array. 
//Iterate through oriiginal array and assign each value to new array bucket depending if zero or not. Join array buckets together and output. 

function moveZeros(arr) {
    let catchAll = []
    let zeros = []
    for (let i = 0; i < arr.length; i++) {
        arr[i] === 0 ? zeros.push(arr[i]) : catchAll.push(arr[i])
    }
    return ([...catchAll, ...zeros])
}

//moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])
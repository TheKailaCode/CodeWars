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

// Human Readable Time

// PARAMETERS - Given a positive integer indicating a count of seconds which are the basic unit on our clock.The max number of seconds will be 359999 or less
// RETURN - A clock value containing hours minutes seconds with the specific format of HH:MM:SS with values 9 and below having a leading zero.
// EXAMPLES - 
// (humanReadable(0), '00:00:00', 'humanReadable(0)')
// (humanReadable(59), '00:00:59', 'humanReadable(59)')
// (humanReadable(60), '00:01:00', 'humanReadable(60)')
// (humanReadable(90), '00:01:30', 'humanReadable(90)')
// (humanReadable(3599), '00:59:59', 'humanReadable(3599)')
// (humanReadable(3600), '01:00:00', 'humanReadable(3600)')
// (humanReadable(45296), '12:34:56', 'humanReadable(45296)')
// (humanReadable(86399), '23:59:59', 'humanReadable(86399)')
// (humanReadable(86400), '24:00:00', 'humanReadable(86400)')
// (humanReadable(359999), '99:59:59', 'humanReadable(359999)')
// PSEUDOCODE - Take in integer and divide by 60the appropriate amount of times and assign the result to hours, minutes, and seconds. Pad leading zeros where needed, and print hours, minutes, seconds with a colon between them.

function humanReadable(seconds) {
    let hours = Math.floor(seconds / 3600)
    seconds = seconds - hours * 3600
    hours = hours.toString().padStart(2, '0')
    let minutes = Math.floor(seconds / 60)
    seconds = (seconds - minutes * 60).toString().padStart(2, '0')
    minutes = minutes.toString().padStart(2, '0')

    return `${hours}:${minutes}:${seconds}`
}

//humanReadable(359999)

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


// Abbreviate a Two Word Name

// PARAMETERS - Given a first and last name separated by a space. Possible hyphenated names.

// RESULTS - Two letters separated by a period. The first letter of the first word in the input and the first letter of the second word in the input. Should be capitalized.

// EXAMPLES - 

// (abbrevName("Sam Harris"), "S.H");
// (abbrevName("Patrick Feenan"), "P.F");
// (abbrevName("Evan Cole"), "E.C");
// (abbrevName("P Favuzzi"), "P.F");
// (abbrevName("David Mendieta"), "D.M");

// PSEUDOCODE - Split the name input into an array with a legnth of 2. Use a template literal to grab the first letter of the first array element and the first letter of the second array element separated by a period.

function abbrevName(name) {
    let abbr = name.split(' ')
    console.log(`${abbr[0][0].toUpperCase()}.${abbr[1][0].toUpperCase()}`)

}
// abbrevName('sam harris')


// Create Phone Number

// PARAMETERS - A flat array containing 10 non-negative integers

// RESULTS - A 10 digit string of numbers in format of a phone number where the first 3 integers are wrapped in parentheses, separated by a space followed by the following three digits then a dash before the last four digits. 

// EXAMPLES - 

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111"
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890"

// PSEUDOCODE - Use the slice method to grab correct format of numbers from the array and save them into three variables. Join each array to turn into string of integers. Use template literal to add parentheses and dash in respective areas in integer sequence. 

function createPhoneNumber(numbers) {
    let areaCode = numbers.slice(0, 3).join('')
    let firstSet = numbers.slice(3, 6).join('')
    let lastSet = numbers.slice(-4).join('')

    return `(${areaCode}) ${firstSet}-${lastSet}`
}

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])


// Valid Parentheses

// PARAMETERS - A string containing opening a closing parentheses in any order and any amount
// RESULTS - A boolean based on whether the string of parentheses are valid. Does each set have a closing parenthese to accompany it. Empty string should return false.
// EXAMPLES - 
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// PSEUDOCODE - Split string of parentheses into an array. Filter the array for both opening parentheses and closing parentheses and save each into their own variables. Do a conditional to see if the legnth of the filtered opening parenthese array is equal in legnth to the closing parentheses array. Return true if so or if empty return false otherwise. 

function validParentheses(parens) {
    let openCount = 0
    let closeCount = 0
    for (let i = 0; i <= parens.length; i++) {
        if (parens[i] == '(') {
            openCount = openCount + 1
        } else if (parens[i] == ')') {
            closeCount = closeCount + 1
        }
    }

    if (openCount === closeCount) {
        console.log(true)
    } else if (parens.length === 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}

// validParentheses('))(')


// Multiples of 3 or 5

// PARAMETERS - An integeger either positive or negative. Can be zero. 
// RESULTS -  A single integer that is the sum of all the multiples of 3 and 5 below the given integer parameter. Return 0 if the parameter is negative. When a number is a multiple of both 3 and 5, it should only be counted once in the sum. 
// EXAMPLES - test(10,23)
// PSEUDOCODE - Create an empty variable for sum of multiples. Create a for loop from 0 to number. Use an if then statement to see if i is negative. If not create nested if then state to see if i mod 3 & 5 is equal to zero. If false is return continue to find if i mod 3 equals 0 then if i mod 5 is equal to zero. In each statement make make the variable equal to the current value of i plus the previous value of i. 

function solution(number) {
    let sum = 0

    if (number <= 0) {
        console.log(0)
    } else {
        for (let i = 0; i < number; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                sum = sum + i
            } else if (i % 3 === 0) {
                sum = sum + i
            } else if (i % 5 === 0) {
                sum = sum + i
            }
        }
    }
    console.log(sum)
}

// solution(10)


// Who Likes it?

// PARAMETERS - An array of string names. Array may be empty.
// RESULTS - A string telling who likes this. If array length is 4 or more, the first two indexes should be named only followed by the amount of other indexes in the array as others. If array is empty 'no one' returned.
// EXAMPLES - 
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// PSEUDOCODE - create if then statement to check if length is greater than 3 if so, return template literal with index 0 and 1 plus the array length minus 2 that like. If array legnth is equal to zero, return no one. Else if array is less than three use a for loop to loop through each array element and append it to the sentence.

function likes(names) {
    if (names.length === 0) {
        return "no one likes this"
    } else if (names.length > 3) {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    } else if (names.length === 1) {
        return `${names} likes this`
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`
    } else {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
}
//likes(["Jacob", "Alex"])

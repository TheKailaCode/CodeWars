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


// Array.diff

// PARAMETER - Given two arrays of various lengths. 
// RESULTS - An array of the result of subtracting the the second array parameter from the first array parameter
// EXAMPLES - 
// (arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]")
// (arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]")
// (arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]")
// (arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []")
// (arrayDiff([], [1,2]), [], "a was [], b was [1,2]")
// (arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
// PSEUDOCODE - Set a variable to filter the first array to subtract each array element that does not equal the array element in the second array

function arrayDiff(a, b) {
    let newArr = []
    if (b.length === 0) {
        newArr = a
    } else if (a.length === 0) {
        newArr = []
    } else {
        for (let i = 0; i <= a.length; i++) {
            for (let j = 0; j <= b.length; j++) {
                if (i != j) {
                    newArr = [i]
                }
            }
        }
    }
    console.log(newArr)
}

// arrayDiff([1, 2, 2], [1])


// Stop gninnipS My sdroW!

// PARAMETERS - Given a sentence string with at lease one word
// RESULTS - The same sentence string but where words that contain five or more letter are reversed. Capital letters remain uppercase.
// EXAMPLES - 
// (spinWords("Welcome"), "emocleW");
// (spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
// (spinWords("This is a test"), "This is a test");
// (spinWords("This is another test"), "This is rehtona test");
// (spinWords("You are almost to the last test"), "You are tsomla to the last test");
// (spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
// (spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");// 
// PSUEDOCODE - Split the string into an array of words. Map through array to find words that are 5 chars or more with the length property and split reverse join them. join the entire array on the commas to reform the string with the backwards words.

function spinWords(string) {
    let newArr = string.split(' ')
    newArr = newArr.map(el => el.length >= 5 ? el.split('').reverse().join('') : el)
    console.log(newArr.join(' '))
}
//spinWords("This is a test")


// The Hashtag Generator

// PARAMETER - A string of words and spaces. Can be an empty string as well. 
// RESULTS - If the input string is empty, or more than 140 chars, return false. Else, the same string should be returned with a hashtag in front and the words in the string together without spaces in between. The first lettler of each word in the string should be capitalized.
// EXAMPLES - 
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "       =>  "#HelloWorld"
// ""            =>  false
// PSEUDOCODE - Split the string at the spaces. Map over the array of words to capitalize the char at index 0 in each word. Split the string again and rejoin it so that it is one long string. Unshift a hashtag character at the beginning of each string. Find the legnth of the string and use an if then statement to find if the legnth is 0 or 140 chars and return false for either result. 

function generateHashtag(str) {
    let newArr = str.split(' ').join('')
    if (str.length === 0) {
        console.log(false)
    } else if (newArr.length > 140) {
        console.log(false)
    } else {
        console.log('#' + newArr)
    }
}

//generateHashtag("       ")


// Find The Parity Outlier

// PARAMETER - An array of integers either entirely even with an odd outlier or entirely odd with an even outlier. The array as a length of at least 3. We should assume zero is an even number.
// RESULT - A single integer, the outlier of the sequence of integers from the array.
// EXAMPLES - 
//     findOutlier([0, 1, 2]), 1
//     findOutlier([1, 2, 3]), 2
//     findOutlier([2,6,8,10,3]), 3
//     findOutlier([0,0,3,0,0]), 3
//     findOutlier([1,1,0,1,1]), 0
// PSEUDOCODE - Filter the array for values modulo 2 equal to zero. Also filter the array for values modulo 2 greater than zero. Compare the length of each new array. The array that returns only 1 element should be converted to single integer and returned. 

function findOutlier(integers) {
    let evens = integers.filter(el => el % 2 === 0)
    let odds = integers.filter(el => el % 2 != 0)
    if (evens.length === 1) {
        return evens[0]
    } else if (odds.length === 1) {
        return odds[0]
    }
}

//findOutlier([0, 1, 2])

// Well of Ideas - Easy Version

// PARAMETER - An array of good or bad strings
// RESULT - A string. 'Fail' if good is not in array. 'Publish' if 1 or 2 goods. 'i smell..' if more than 2 goods.
// EXAMPLE - 
// well(['bad', 'bad', 'bad']), 'Fail!'
// well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!'
// well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!'
// PSEUDOCODE - Filter the input array for elements that match 'good'. Use if then statement to check the length of the output array to determing the return string.

function well(x) {
    let goods = x.filter(el => el === 'good')
    if (goods.length === 0) {
        console.log('Fail!')
    } else if (goods.length === 1 || goods.length === 2) {
        console.log('Publish!')
    } else if (goods.length > 2) {
        console.log('I smell a series!')
    }
}

// well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])


// Convert string to camel case

// PARAMETER - A string containing dash or underscore delimeters. Beginning of words may be upper or lowercase.
// RESULT - A string without spaces or delimeters in camel case where the beginning of each new word is capitalized. The first word should only be capitalized if the original word was capitalized in the input. 
// EXAMPLES - 
// toCamelCase(''), '', "An empty string was provided but not returned")
// toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
// toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
// toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
// PSEUDOCODE - Create a variable holding the possible delimeters. Split the string on the delimeter. Filter the split string for chars that are not equal to the variable holding the delimeter. Join the string. split the string by each word. Create variables to hold each word with the first letter capitalized. Return each varable concatenated without spaces.

function toCamelCase(str) {
    let strDelims = ['-', '_']
    let newStr = str.map(el => el.includes(strDelims) ? '' : el)
    console.log(newStr)
}
// toCamelCase("the_stealth_warrior")


// Vowel Count

function getCount(str) {
    let newStr = str.split('')
    let count = 0
    for (let i = 0; i <= newStr.length; i++) {
        if (newStr[i] === 'a' || newStr[i] === 'e' || newStr[i] === 'i' || newStr[i] === 'o' || newStr[i] === 'u') {
            count += 1
        } else {
            count += 0
        }
    }

    return count
}


// Four/Seven

// PARAMETER - An integer
// RESULT - If the integer iis 4 return 7. If the integer is 7 return 4. If anything else, return 0. Cannot use if/then, ternary, or switch statement.
// EXAMPLE - 
// fourSeven(4), 7, "n = 4 should return 7"
// fourSeven(7), 4, "n = 7 should return 4"
// PSEUDOCODE - Return 28 divided by n to get either 4 or 7. Set a variable to hold 28 divided n != 4 or 7. reassign that false variable to equal 0.


function fourSeven(n) {
    let negatives = 28 / n < 0
    negatives = 0
    let falseResult = 28 / n !== 4 && 28 / n !== 7
    falseResult = 0
    let idealResult = 28 / n === 4 || 28 / n === 7
    idealResult = 28 / n
    return idealResult || falseResult || negatives
}
// fourSeven(4)


// Keep Hydrated!

function litres(time) {
    return Math.floor(time * .5);
}

// Get Planet Name By ID

function getPlanetName(id) {
    var name = ''
    switch (id) {
        case 1:
            name = 'Mercury';
            break;
        case 2:
            name = 'Venus';
            break;
        case 3:
            name = 'Earth';
            break;
        case 4:
            name = 'Mars';
            break;
        case 5:
            name = 'Jupiter';
            break;
        case 6:
            name = 'Saturn';
            break;
        case 7:
            name = 'Uranus';
            break;
        case 8:
            name = 'Neptune'
    }

    return name;
}


// Calculate BMI

function bmi(weight, height) {
    let bmiResult = weight / (height * height)

    if (bmiResult <= 18.5) {
        return "Underweight"
    } else if (bmiResult > 18.5 && bmiResult <= 25.0) {
        return "Normal"
    } else if (bmiResult <= 30.0) {
        return "Overweight"
    } else if (bmiResult > 30) {
        return "Obese"
    }
}

//A Needle in the Haystack

function findNeedle(haystack) {
    for (let i = 0; i <= haystack.length; i++) {
        if (haystack[i] === 'needle') {
            return `found the needle at position ${i}`
        }
    }
}



//Disemvowel Trolls

// PARAMETERS - A string of any length that contains words with consants and vowels and capital and lowercase letters
// RESULTS - A string with all vowels removed from it. Letters and punctuation should remain in the same order. **Y is not a vowel.
// EXAMPLE - 
//disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
//disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
//disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
// PSEUDOCODE - Split the string into an array or letters. Create an array of vowels. Map over the array of letters to see if it includes any of the letters from the vowel array. If it does, return an empty string space if not, return that letter. Then join the string back together.

function disemvowel(str) {
    let lettersArr = str.split('')
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let result = lettersArr.map(letter => letter === vowels ? '' : '').join('')
    console.log(result)
}
//disemvowel("What are you, a communist?")


// Are You Playing Banjo?

function areYouPlayingBanjo(name) {
    let nameCheck = name.split('')

    if (nameCheck[0] === 'R' || nameCheck[0] === 'r') {
        return `${name} plays banjo`
    } else {
        return `${name} does not play banjo`
    }
}
// areYouPlayingBanjo('Ringo')


// Fake Binary

let fakeBin = x => {
    let newStr = ''
    for (let i = 0; i <= x.length; i++) {
        if (x[i] < 5) {
            newStr += '0'
        } else if (x[i] >= 5) {
            newStr += '1'
        }
    }
    return newStr
}


// Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
    let newArr = numbers.sort((a, b) => a - b)
    return newArr[0] + newArr[1]
}


// Binary Addition

function addBinary(a, b) {
    let add = a + b
    return add.toString(2)
}

// Is he gonna survive?

// PARAMETER - Given 2 integers. The number of bullets and the number of dragons. Two bullets will kill a dragon. Input will not be negative and no maximum.
// RESULT - A boolean based on if there is enough bullets to kill all of the dragons. True if there is and false if not.
// EXAMPLE - 
// (hero(7, 4), false);
// (hero(10, 5), true);
// (hero(4, 5), false);
// (hero(100, 40), true);
// (hero(1500, 751), false);
// (hero(0, 1), false);
// PSEUDOCODE - Multiply dragons times 2. Subtract dragons from bullets. If the answer is greater than or equal to 0 return true if the answer is less than 0 return false. 

function hero(bullets, dragons) {
    let result = bullets - (dragons * 2)
    console.log(result >= 0 ? true : false)
}
// hero(1500, 751)


// Basic Mathematical Operations

// function basicOp(operation, value1, value2) {

//     let sum = value1 + value2
//     let sub = value1 - value2
//     let multiply = value1 * value2
//     let divide = value1 / value2

//     if (operation === '+') {
//         console.log(sum)
//     } else if (operation == '-') {
//         console.log(sub)
//     } else if (operation == '*') {
//         console.log(multiply)
//     } else if (operation == '/') {
//         console.log(divide)
//     }
// }

// basicOp('-', 15, 18)


// How good are you really?

function betterThanAverage(classPoints, yourPoints) {
    let sum = classPoints.reduce((a, b) => a + b, 0)
    let entireClass = sum + yourPoints
    console.log(entireClass)
    let divisor = classPoints.length + 1
    console.log(entireClass / divisor)
    if (yourPoints > entireClass / divisor) {
        console.log(true)
    } else {
        console.log(false)
    }

}

// betterThanAverage([2, 3], 5)


// Invert values

function invert(array) {
    return array.map(el => -(el))
}

// invert([1,-2,3,-4,5]), [-1,2,-3,4,-5])


// Beginner Series #1 School Paperwork

// PARAMETER - Given two integer numbers that can possibly be negative or 0. 
// RESULT - An integer greater than or equal to 0. We will receive 0 if either of the inputs are negative or equal to zero.
// EXAMPLE - 
//(paperwork(5,5), 25, 'Failed at paperwork(5, 5)');
//(paperwork(5,-5), 0, 'Failed at paperwork(5, -5)');
//(paperwork(-5,-5), 0, 'Failed at paperwork(-5, -5)');
//(paperwork(-5,5), 0, 'Failed at paperwork(-5, 5)');
//(paperwork(5,0), 0, 'Failed at paperwork(5, 0)');
// PSEUDOCODE - We need five blank sheets of paper per student. Multiply the amount of paper that needs to be copied by the amount of students that need work copied.

function paperwork(n, m) {
    if (m < 0 || n < 0) {
        return 0
    } else {
        return m * n
    }
}

// paperwork(-5, -5)
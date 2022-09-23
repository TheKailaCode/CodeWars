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


// Count by X

// PARAMETER - Given 2 positive integers. The first integer will be the number to count by. The second integer will be the number to count up to.
// RESULT - An array of integers counting by the first integer up to the second integer parameters
// EXAMPLE - 
//countBy(1,10), [1,2,3,4,5,6,7,8,9,10], "Array does not match"
// countBy(2,5), [2,4,6,8,10], "Array does not match"
// PSEUDOCODE - Create an empty array variable. Create a for loop where i starts at 0 and ends at the second parameter and each iteration will increase by the first integer parameter. Within the loop, push each iteration to the empty variable array that was created. Return the variable once the loop is broken.

function countBy(x, n) {
    let z = [];
    let y = n * x
    for (let i = x; i <= y; i++) {
        if (i % x === 0) {
            z.push(i)
        }
    }
    console.log(z)
}
// countBy(1, 10)


// DNA to RNA Conversion

// PARAMETER - A striing with the letters GCAT
// RESULT - A string where all of the T's are replaced with U's
// EXAMPLE -
//DNAtoRNA("TTTT"), "UUUU")
//DNAtoRNA("GCAT"), "GCAU")
//DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
// PSEUDOCODE - Split the string into individual letters. Map over the array of letters and if a letter is T return U else return the letter.

function DNAtoRNA(dna) {
    let result = dna.split('').map(el => el === 'T' ? 'U' : el).join('')
    console.log(result)
}

// DNAtoRNA("GACCGCCGCC")


//Sum The Strings

function sumStr(a, b) {
    return String(Number(a) + Number(b))
}



// Stringy Strings

// PARAMETER - An iinteger that reflects the size or length of what the string should be. The input will always be positive whole numbers.
// RESULT - A string with a length based on the parameter filled with alternating 1's and 0's. Should begin with 1.
// EXAMPLE - 
// a string with size 6 should return :'101010'.
// with size 4 should return : '1010'.
// with size 12 should return : '101010101010'.
// PSEUDOCODE - Create an empty string variable. Create a traditional for loop beginning at 0 up to the input parameter size. On each iteration concatenate 10 to the previous interation on the string variable. Return the string variable.

function stringy(size) {
    let bin = ''
    for (let i = 1; i <= size; i++) {
        if (i % 2 === 0) {
            bin += '0'
        } else {
            bin += '1'
        }
    }
    console.log(bin)
}
// stringy(20)


// String cleaning

// PARAMETER - A string containing letters, numbers, and/or punctuation marks
// RESULT - A string with all numbers removed
// EXAMPLE - 
// stringClean(""), ""
// stringClean("! !"), "! !"
// stringClean("123456789"), ""
// stringClean("(E3at m2e2!!)"), "(Eat me!!)"
// stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"), "Dsa cdsc csa!!! I Am cool!"
// stringClean("A1 A1! AAA   3J4K5L@!!!"), "A A! AAA   JKL@!!!"
// stringClean("Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@"), "Adgre Asad! AAA fvfdvJKL@"
// stringClean("Ad2dsad3ds21 A  1$$s122ad! A2A3Ae24 f44K5L@222222 "), "Addsadds A  $$sad! AAAe fKL@ "
// stringClean("33333Ad2dsad3ds21 A3333  1$$s122a!d! A2!A!3Ae$24 f2##222 "), "Addsadds A  $$sa!d! A!A!Ae$ f## "
// stringClean("My \"me3ssy\" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?"), "My \"messy\" data issues! Will they ever, ever be solved?"
// stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3"), "Why can't we buy the good software? #cheapskates"
// PSEUDOCODE - Split the string into individual characters. Map over the array of letters and if the type of char is a number, replace it with an empty string space otherwise return the char. Join the array back together and return.

function stringClean(s) {
    let arr = s.split('')
    let newArr = arr.map(el => el.split(' '))
    let iter = newArr.filter(x => x != Number(x))
    console.log(iter)
}

// stringClean("(E3at m2e2!!)")


// Training JS #3: Basic data types--String

var a1 = "A", a2 = "a", b1 = "B", b2 = "b", c1 = "C", c2 = "c", d1 = "D", d2 = "d", e1 = "E", e2 = "e", n1 = "N", n2 = "n"
function Dad() {
    return d1 + a2 + d2;
}
function Bee() {
    return b1 + e2 + e2;
}
function banana() {
    return b2 + a2 + n2 + a2 + n2 + a2;
}

function answer1() {
    return "no";
}
function answer2() {
    return "no";
}
function answer3() {
    return "yes";
}


// Training JS #18: Methods of String object--concat() split() and its good friend join()

function splitAndMerge(string, separator) {
    let words = string.split(' ').
        console.log(words)



}

//splitAndMerge("My name is John", "-");



// ES6 string addition

function joinStrings(string1, string2) {
    return `${string1} ${string2}`
}


// Thinkful - Logic Drills: Traffic light

function updateLight(current) {
    switch (current) {
        case 'green':
            return 'yellow';
            break;
        case 'yellow':
            return 'red'
            break;
        case 'red':
            return 'green'
    }
}


// Jaden Casing Strings

// PARAMETER - A string of any legnth with some words where the first letter is lowercase and some uppercase.
// RESULT - A string where the beginning of each word is uppercase
// EXAMPLE - 
//Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
//Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// PSEUDOCODE - Split the input string with the space as the delimeter. Map over the string and capitalize the 0 index on each element. Join the string back into a sentence.

String.prototype.toJadenCase = function () {
    let caseStr = str.split(' ').map(el => el[0].toUpperCase).join(' ')
    //console.log(caseStr)

};


// Even numbers in an array

// PARAMETERS - an array of even or odd and positive or negative digits. A number that determines the legnth of output
// RESULT - An array with a length based on the number parameter containing the final even numnbers from the array
// EXAMPLE -
// Test.assertDeepEquals(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
// Test.assertDeepEquals(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]);
// Test.assertDeepEquals(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);
// PSEUDOCODE - filter the original array for numbers where mod 2 is equal to 0. Slice the filtered array for .legnth - the number parameter and return

function evenNumbers(array, number) {
    let evensArr = array.filter(el => el % 2 === 0)
    console.log(evensArr)
    let result = evensArr.slice(evensArr.length - number)
    console.log(result)
}
// evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)


// Contamination #1 -String-

// PARAMETERS - A string containing either numbers, letters, punctuation, or empty. Can be any length. Also a char to mutate the string. The char can also be an emoty string.
// RESULT - The original string mutated with the input char parameter. If the char is empty ithe string should be mutated times the length of the original string. If the input text string is empty, an empty string should be returned no matter what. 
// EXAMPLE - 
// Test.assertEquals(contamination("abc","z"), "zzz")
// Test.assertEquals(contamination("","z"), "")
// Test.assertEquals(contamination("abc",""), "")
// Test.assertEquals(contamination("_3ebzgh4","&"), "&&&&&&&&")
// Test.assertEquals(contamination("//case"," "), "      ")
// PSEUDOCODE - Do a if statement to see if the original string text is an empty string. if so, return an empty string. If not, do a traditional for loop. On each iteration, replace i with i with the char parameter up until the length of the original string. Return the string.

const contamination = (text, char) => text === '' ? '' : text.split('').map(el => el.replace(el, char)).join('')

// contamination("", "z")

// function contamination(text, char) {
//     if (text === '') {
//         return ''
//     } else {
//         let result = text.split('').map(el => el.replace(el, char)).join('')
//         return result
//     }
// }



// Get number from string

// PARAMETER - A string containing letters, digits, and punctuation
// RESULT - The number contained in the string parsed into a number
// EXAMPLE - 
// (getNumberFromString("1"), 1);
// (getNumberFromString("123"), 123);
// (getNumberFromString("this is number: 7"), 
// PSEUDOCODE -  Set an empty string variable. Split the input string. Do a for loop and and if statement within to see if any value of i is equal to numbers 0 through 9. if so, push them to the empty string. join the empty string. Return the string to Number.


function getNumberFromString(s) {
    let digs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let result = s.split('').map(el => digs.includes(el) ? el : '').join('')

    console.log(Number(result))
}
// getNumberFromString("hello123")



// Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

// PARAMETER - A string containing letters, maybe numbers and punctuation, and exclamation marks throughout
// RETURN - A string with all exclamation marks moved except for one at the end as the final character in the string
// EXAMPLES - 
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("Hi!") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi 
// PSEUDOCODE - Split the string by individual characters. Map over the string and return only the characters that are not an exclamation mark. Join the string. Return the string with an exclamation mark concatenated to the end of it.


function remove(string) {
    let result = string.split('').map(el => el === '!' ? '' : el).join('')
    console.log(`${result}!`)
}

// remove("Hi! Hi!")



// Limit string length - 1

// PARAMETERS - A string containing spaces, uppercase and lowercase letters, maybe numbers. Second parameter is an integer.
// RESULT - A string with the length provided by the limit parameter with elipses attached to the end.
// EXAMPLE - 
//solution('Testing String', 3) --> 'Tes...'
//solution('Testing String', 8) --> 'Testing ...'
//solution('Test', 8)           --> 'Test'
// PSEUDOCODE - 

function solution(string, limit) {
    if (limit > string.length) {
        console.log(string)
    } else {
        console.log(`${string.substring(0, limit)}...`)
    }

}

// solution('Test', 8)



// String repeat

function repeatStr(n, s) {
    return s.repeat(n);
}


// SpeedCode #2 - Array Madness

// PARAMETERS - Two arrays with at least one element in each.
// RESULTS - A boolean true if the sum of all elements squared in the first array are striclty greater to than the sum of the elements cubed in the second array
// EXAMPLES - 
// arrayMadness([4,5,6],[1,2,3]), true
// arrayMadness([5,6,7],[4,5,6]), false
// arrayMadness([4,5,6],[3,4,5]), false
// arrayMadness([3,4,5],[2,3,4]), false
// arrayMadness([2,3,4],[1,2,3]), false
// arrayMadness([1,2,3],[0,1,2]), true
// arrayMadness([5,3,2,4,1],[15]), false
// arrayMadness([2,5,3,4,1],[3,3,3,3,3]), false
// arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]), false
// arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), true
// arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), false
// PSEUDOCODE - Map over each array to multiply the elements in first array by themselves and cube the elements in the second. compare each element for greater than in a double for loop. Return true if the elements in the first array are greater than those in the second

function arrayMadness(a, b) {
    let double = a.map(el => el ** 2)
    let triple = b.map(el => el ** 3)
    let result = []
    for (let i = 0; i <= double.length; i++) {
        for (let j = 0; j <= triple.length; j++) {
            if (double[i] > triple[j]) {
                result.push(true)
            } else {
                result.push(false)
            }
        }
    }
    console.log(result)
    console.log(result.every(x => x === true))
}

//arrayMadness([4, 5, 6], [1, 2, 3])


// Find the position!

function position(letter) {
    let alphabet = ' abcdefghijklmnopqrstuvwxyz'

    return `Position of alphabet: ${alphabet.indexOf(letter)}`
}


// SpeedCode #2 - Array Madness

// PARAMETERS - Two arrays with at least one element in each.
// RESULTS - A boolean true if the sum of all elements squared in the first array are striclty greater to than the sum of the elements cubed in the second array
// EXAMPLES - 
// arrayMadness([4,5,6],[1,2,3]), true
// arrayMadness([5,6,7],[4,5,6]), false
// arrayMadness([4,5,6],[3,4,5]), false
// arrayMadness([3,4,5],[2,3,4]), false
// arrayMadness([2,3,4],[1,2,3]), false
// arrayMadness([1,2,3],[0,1,2]), true
// arrayMadness([5,3,2,4,1],[15]), false
// arrayMadness([2,5,3,4,1],[3,3,3,3,3]), false
// arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]), false
// arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), true
// arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), false
// PSEUDOCODE - Map over each array to multiply the elements in first array by themselves and cube the elements in the second. compare each element for greater than in a double for loop. Return true if the elements in the first array are greater than those in the second

function arrayMadness(a, b) {
    let double = a.map(el => el ** 2)
    let triple = b.map(el => el ** 3)
    let result = []
    for (let i = 0; i <= double.length; i++) {
        for (let j = 0; j <= triple.length; j++) {
            if (double[i] > triple[j]) {
                result.push(true)
            } else {
                result.push(false)
            }
        }
    }
    console.log(result)
    console.log(result.every(x => x === true))
}

//arrayMadness([4, 5, 6], [1, 2, 3])

// Shortest Word

// PARAMETER - A sting containing any data type of any legnth.
// RESULTS - An integer representing the legnth of the shortest word or words in the given input string.
// EXAMPLES - 
// (findShort("bitcoin take over the world maybe who knows perhaps"), 3);
// (findShort("turns out random test cases are easier than writing out basic ones"), 3); 
// (findShort("Let's travel abroad shall we"), 2);
// PSEUDOCODE - Split the input string by the spaces in between each word. Set an empty variable to hold the length of the shortest words. Do a for each loop where i represents each word in the array. Compare the length of i to the next length of i to determine if it is greater or less than the previous i. If it is less than the previous i, the empty variable is not equal to the length of the smallest i. Once the iteration is complete, return the empty variable.

function findShort(s) {
    let shortLength = s.split(' ').map(el => el.length)
    let result = shortLength.sort((a, b) => a - b)

    console.log(Math.min(...result))
}

// findShort("bitcoin take over the world maybe who knows perhaps")



// Sum of Array Averages

// PARAMETER - A multilevel array with a maximum of 50 subarrays
// RESULTS - The sum of the average of each subarray rounded down to the nearest whole number
// EXAMPLE - 
// (sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]), 44);
// (sumAverage([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]]), -6)
// PSEDOCODE - Create an empty variable to hold to sum of the averages. Map over the array and use the reduce method on each element to get the sum of the elements in the subarray and then divide it by the legnth of the element. Use the empty variable to reduce over the array that was returned from mapping over the array. Return that variable.

// const sumAverage = (arr) => {
//     let avg = arr.map(el => el.reduce((acc, c) => acc + c) / el.length)
//     console.log(avg)
//     let result = avg.reduce((acc, c) => acc + c)
//     console.log(Math.floor(result))
// }

// sumAverage([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]])



// Use map() to double the values in an array

// PARAMETER - An array containing positive and negative numbers of any size
// RESULT - An array containing the numbers doubled from the original array
// EXAMPLE -
// double(test1), [2,4,6,8,10]
// double(test2), [142,-1096,24.6,62830]
// PSEUDOCODE - Us the map function to multiple each element in the array by 2. Return the new array that is created. 

//function double(array) {
//console.log(array.map(el => el * 2))
//}

// double([71, -548, 12.3, 31415])



// Product of Array Items

// PARAMETER - An array containing positive numbers, negative numbers, zeros, empty, or null.
// RESULT - The product of all of the numbers in the array or null if the array is null or empty.
// EXAMPLE - 
// product([5, 4, 1, 3, 9]), 540)
// product([-2, 6, 7, 8]), -672)           
// product([10]), 10);
// product([0, 2, 9, 7]), 0)       
// product(null), null)
// product([]), null)
// PSEUDOCODE - Use a ternaray operation to use the reduce method but with multiplication which will return the product of each digit or return null


// function product(values) {
//     if (values === null) {
//         console.log(null)
//     } else if (values.length === 0) {
//         console.log(null)
//     } else {
//         console.log(values.reduce((acc, c) => acc * c))
//     }
// }

function product(values) {
    console.log((values === null || values.length === 0) ? null : values.reduce((acc, c) => acc * c))
}

// product(null)



// Array comparator

// PARAMETERS - Two array each with unique elements of any length
// RESULTS - An integer reflecting the number of elements in the second array that are also in the first array
// EXAMPLE - 
// matchArrays(['Perl','Closure','JavaScript'], ['Go', 'C++','Erlang']),0);
// matchArrays(['incapsulation','OOP','array'], ['time', 'propert','paralelism','OOP']),1
// PSEUDOCODE - Use a variable to filter the second array by the first array and return 

function matchArrays(v, r) {
    let newArr = []
    for (let i = 0; i <= v.length; i++) {
        for (let j = 0; r <= j.length; j++) {
            if (v[i] === r[j]) {
                newArr.push(i)
            }
        }
    }
    console.log(newArr)
}
// matchArrays(['incapsulation', 'OOP', 'array'], ['time', 'propert', 'paralelism', 'OOP'])


// Be Concise IV - Index of an element in an array

const find = (array, element) => array.indexOf(element) > -1 ? array.indexOf(element) : "Not found"




// Sort array by string length

// PARAMETERS - An array of string words of multiple lengths and casing
//  RESULTS - The same input array sorted in increasing order from the shortest word to the longest word in the array
// EXAMPLES - 
// sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]
// sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]
// sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]
// PSEUDOCODE - 

function sortByLength(array) {
    let result = array.sort((a, b) => a.length - b.length)
    console.log(result)
}

// sortByLength(["Longer", "Longest", "Short"])


// Sum of two lowest positive integers

// PARAMETERS - An array with at least 4 integers of any size integers. No floats or negative integers wiill be iincluded.
// RESULTS - An integer representing the sum of the two smallest integers in the input array.
// EXAMPLES -
// sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13"
// sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6"
// sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10"
// sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24"
// PSEUDOCODE - Sort the orginal array in increasing order. Return the sum of array at index 0 plus the array at index 1.

function sumTwoSmallestNumbers(numbers) {
    let s = numbers.sort((a, b) => a - b)
    //console.log(s[0] + s[1])
}

// sumTwoSmallestNumbers([23, 71, 33, 82, 1])


// Odd or Even?

// PARAMETERS - An array of integers of any length. An empty array should be considered an array with integer 0.
// RESULTS - A string "even" or "odd" based on the sum of the integers in the input array
// EXAMPLES - 
// oddOrEven([0]), 'even'
// oddOrEven([1]), 'odd'
// oddOrEven([]), 'even'
// PSEUDOCODE - return a ternary operation to reduce the input array and modulo it by 2 to strictly equal 0 and if true return even and if false return odd

const oddOrEven = array => (array.length === 0 || array.reduce((acc, c) => acc + c) % 2 === 0) ? "even" : "odd"

// console.log(oddOrEven([]))


// The highest profit wins!

// PARAMETERS - An array of integers with the length of at least 1. 
// RESULTS - An array of two integers reflecting the largest number and smallest number in the input array.
// EXAMPLES - 
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// PSEUDOCODE - Return the minimum integer using the spread syntax with Math.min for the element at index 0 in the returned array and Math.max for the element at index 1 in the returned array.
function minMax(arr) {
    //console.log([Math.min(...arr), Math.max(...arr)])
}
// minMax([1])


// JavaScript Array Filter

// PARAMETERS - An array of integers of any length with odd, even, negative, or postive integers
// RESULTS - An array of integers containing all of the even numbers that were in the input array
// EXAMPLES - 
// getEvenNumbers([1,2,3,6,8,10]), [2,6,8,10])
// getEvenNumbers([1,2]), [2])
// getEvenNumbers([12,14,15]), [12,14])
// getEvenNumbers([13,15]), [])
// getEvenNumbers([1,3,9]), [])
// PSEUDOCODE - Return a function using the map method where the elements being interated over are modulo by 2 and returned if the result of the equation is 0. 

const getEvenNumbers = numbersArray => numbersArray.filter(el => el % 2 === 0)

// console.log(getEvenNumbers([1, 3, 9]))


// Smallest value of an array

// PARAMETERS - An array of integers of any value and length. 
// RESULTS - The smallest integer from the input array
// EXAMPLES - 
// (min([1,2,3,4,5], 'value'), 1
// (min([1,2,3,4,5], 'index'), 0
// PSEUDOCODE - Return the input array spread into the Math.min operation 

const min = (arr, toReturn) => toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr))

// console.log(min([1, 2, 3, 4, 5], 'index'))


// Use map() to double the values in an array

// PARAMETERS - An array of integers that may be negative or positive or odd or even
// RESULTS - Each number in the input array multiplied by two. Must use the map function
// EXAMPLES - 
// var test1 = [1,2,3,4,5]
// var test2 = [71,-548,12.3,31415]

// double(test1), [2,4,6,8,10]
// double(test2), [142,-1096,24.6,62830]
// PSEUDOCODE - Use the map function to map over each element in the array and return each element multiplied times two

const double = array => array.map(el => el * 2)

//console.log(double([71, -548, 12.3, 31415]))


// Sum of Array Averages

// PARAMETERS - An array containing up to 50 subarrays with integers ranging from -100 to 100.
// RESULTS - An integer representing the sum of the average of all of the subarrays from the input array.
// EXAMPLES - 
// sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]), 44
// sumAverage([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]]), -6
// PSEUDOCODE - return the result from mapping over the input array. As each element is iterated over, the array that is being held at each index will be reduced using the sum operator then divided by the length of the element. The entire map function will be reduced using the sum operator as well because the map will return an array of integers that need to be added together to produce the result. 

const sumAverage = (arr) => {
    console.log(Math.floor((arr.map(el => el.reduce((a, b) => a + b) / el.length).reduce((a, b) => a + b))))
}

// sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]])



// Is every value in the array an array?

// PARAMETERS - An array of any length with multiple dimensions.
// RESULTS - A boolean true or false based on whether the second dimension of the array is also an array
// EXAMPLE - 
// arrCheck([]), true
// arrCheck([['string']]), true
// arrCheck([[],{}]), false
// arrCheck([[1],[2],[3]]), true
// arrCheck(['A', 'R', 'R', 'A', 'Y']), false
// PSEUDOCODE - Use the every array method to check if each element in the array is also an array by using the isArray method which will return true or false.

const arrCheck = value => value.every(el => el.isArray ? true : false)

//console.log(arrCheck([[1], [2], [3]]))


// The maximum sum value of ranges -- Simple version


// PARAMETERS - Two arrays. the first array parameter contains a list of integers positive negative or 0 with at least 5 elements. The second parameter is an array with nested arrays containing two elements that reflect the range. There will be at least one element in the second array parameter.
// RESULTS - An integer reflecting the highest sum amongst the range of inters from the input arrays.
// EXAMPLES - 
// maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3],[0,4],[6,8]]) === 6
// maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3]]) === 5
// maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,4],[2,5]]) === 0
// PSEUDOCODE - Create a new variable to hold the sorted input array of integers in increasing order. 



// Reverse words

function reverseWords(str) {
    let strArray = str.split(' ')
    console.log(strArray)
    let result = strArray.map(word => word.split('').reverse().join('')).join(' ')
    console.log(result)
}

// reverseWords('double  spaced  words')
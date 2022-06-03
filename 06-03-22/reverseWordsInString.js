// Instructions

// You need to write a function that reverses the words in a given string. A word can also fit an empty string. 

function reverse(string) {
    //your code here
    return string.split(' ').reverse().join(' ')
}
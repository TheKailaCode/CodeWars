// Instruction

/* My PC got infected by a strange virus. It only infects my text files and replaces random letters by *, li*e th*s (like this).

Fortunately, I discovered that the virus hides my censored letters inside root directory.

It will be very tedious to recover all these files manually, so your goal is to implement uncensor function that does the hard work automatically.*/

function uncensor(str1, str2) {
    str2 = str2.split('')
    let arr = []
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] == '*') {
            arr.push(str2[0])
            str2.shift()
        } else {
            arr.push(str1[i])
        }
    }
    return arr.join('')
}
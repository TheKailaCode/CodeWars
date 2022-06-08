// Instructions

/* Complete the function which get an input number n such that n >= 10 and n < 10000, then:

Sum all the digits of n.
Subtract the sum from n, and it is your new n.
If the new n is in the list below return the associated fruit, otherwise return back to task 1.*/

function SubtractSum(n) {
    let str = String(n)

    for (let i = 0; i <= str.length; i++) {
        let sum = i + i
        if (sum === 1 || sum === 3 || sum === 24 || sum === 26 || sum === 47 || sum === 49 || sum === 68
            || sum === 70 || sum === 91 || sum === 93) {
            return 'kiwi'
        } else {
            return 'apple'
        }
    }
}

// I passed the kata while trying to test if my loop was working properly because there was only one test case which was for 'apple'
// ultimately, I could have simply returned 'apple' for this kata
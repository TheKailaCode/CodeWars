// Instructions

// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

function consecutive(arr, a, b) {
    let newArr = []
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === a && arr[i + 1] === b || arr[i] === b && arr[i + 1] === a) {
            return true
        } else if (arr[i] === a && arr[i + 1] !== b) {
            return false
        }
    }
}
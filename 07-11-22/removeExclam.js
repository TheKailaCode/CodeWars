// Instructions

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    let arr = s.split('')
    let remove = arr.filter(el => el != '!')
    return remove.join('')
}
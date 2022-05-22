// Instructions

// I've written five function, each function receives a parameter: arr(an array), you should code something with arr.

function getLength(arr) {
    //return length of arr
    return arr.length
}
function getFirst(arr) {
    //return the first element of arr
    return arr.shift()
}
function getLast(arr) {
    //return the last element of arr
    return arr.pop()
}
function pushElement(arr) {
    var el = 1;
    //push el to arr
    let push = arr.push(el)
    return arr
}
function popElement(arr) {
    //pop an element from arr
    let pop = arr.pop(3)
    return arr
}
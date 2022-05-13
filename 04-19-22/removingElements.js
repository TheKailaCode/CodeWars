// Instructions

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr) {
    //your code here
    for (let i = 1; i < arr.length; i++) {
        arr.splice(i, 1)
    }
    return arr
}

  // the splice method will remove an element at the specified index
  // through each iteration of the for loop, i is removed
  // the loop begins at index 1 to skip the first index and remove elements beginning at the second index
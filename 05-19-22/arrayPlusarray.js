// Instructions

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

function arrayPlusArray(arr1, arr2) {
    //something went wrong
    let newArr = arr1.concat(arr2)

    return newArr.reduce((acc, c) => acc + c, 0)

}
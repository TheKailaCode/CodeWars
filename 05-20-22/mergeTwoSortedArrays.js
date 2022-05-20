// Instructions

// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

function mergeArrays(arr1, arr2) {
    let mergedArray = arr1.concat(arr2)
    let sorted = mergedArray.sort((a, b) => a - b)
    return sorted.filter((curr, next) => {
        sorted.indexOf(curr) === next
    })

} 
//Instructions

//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you 
    let result = arrayOfSheep.filter(word => word == true)

    return result.length
}

  //use the filter method to iterate over the arrayOfSheep array to find if each boolean is true 
  //return the array of all of the true index
  //get the length of the results array to find out how many sheep are present
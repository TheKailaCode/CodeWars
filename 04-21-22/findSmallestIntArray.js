// Instructions

// Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let min = args.sort((a, b) => a < b ? -1 : 1)
        return min[0]
    }
}

  // sort the items in the array into ascending order
  // get the value out of index zero which should be the smallest value in the returned array
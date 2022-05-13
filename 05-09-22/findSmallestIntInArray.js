// Instructions

// Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}
  // spread syntax breaks apart the single array object into individual numbers which is what is accepted by Math.min to grab the smallest value
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.


// SOLUTION 1

class smallestNumberFinder{
    findSmallest(args){
        return Math.min(...args)
    }
}

// SOLUTION 2

class smallestIntFinder{
    findsmallest(args){
        return args.reduce(function(prev, curr, index, array){
            return prev < curr ? prev : curr;
        })
    }
}
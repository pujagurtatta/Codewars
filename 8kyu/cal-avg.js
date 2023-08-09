
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    // your code here
     if(array.length === 0){
      return 0;
    }
    
    let sum = 0;
    array.forEach(function(item, index){
      sum+=item
    })
    return sum/array.length
  }




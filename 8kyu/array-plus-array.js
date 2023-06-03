// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// SOLUTION 1

  function arrayPlusArray(arr1, arr2){
    let sum1 = 0

    for (i=0; i<arr1.length; i++){
        sum1+=arr1[i]
    }

    let sum2 = 0

    for (i=0; i<arr2.length; i++){
        sum2+=arr2[i]
    }

    return sum1 + sum2
  }

  // SOLUTION 2

  function arrayPlusArray(arr1, arr2){
    return arr1.concat(arr2).reduce((acc, curVal => acc + curVal))
  }
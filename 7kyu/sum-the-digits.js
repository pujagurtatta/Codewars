// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.


function sumOfDigits(number){

let sum = Math.abs(number).toString().split('').reduce((acc, curr) => acc + +curr,0)

return sum;
}

// SOLUTION 2 

function sumDigits(number) {
  
    return Math.abs(number).toString().split('').reduce((acc, curr) => acc + Number(curr),0)
  }

// SOLUTION 3 

function sumOfDigits(number){

let result = 0

let arr = Math.abs(number).toString().split('')

arr.forEach(num => {
    result += parseInt(number)

})

return result;

}





// Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

// The list will never be empty and will only contain values that are greater than or equal to zero.

// Good luck!


const sumSquarre = ns => {

let newArr = []

for(let i of ns){
    if(i % 2 === 0){
    newArr.push (i**2)
}else{
    newArr.push(i**0.5)
}
}

return +newArr.reduce((a,b) => a + b ).toFixed(2)

}

// SOLUTION 2 

const sumSquareEvenRootOdd = ns => +ns.map(el => el%2 ? Math.sqrt(el) : el**2).reduce((a,b)=> a+b).toFixed(2)

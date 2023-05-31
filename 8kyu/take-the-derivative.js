// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2.


// SOLUTION 1

function derive(coefficient, exponent){
    let derivation = coefficient*exponent
    exponent-=1
    return  `${derivation}x^${exponent}`
}

// SOLUTION 2

derive = (coefficient, exponent) => `${coefficient*exponent}x^${exponent - 1}`
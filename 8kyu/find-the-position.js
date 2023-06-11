// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

function posit(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return 'Position of alphabet :' + (alphabet.indexOf(letter) + 1)
}

// SOLUTION 2

let posit = d => `Position of alphabet: ${d.charCodeAt()-96}` 


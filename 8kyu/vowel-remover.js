// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Solution 1

function shortcut(str){
    return str.replace(/[aeiou]/g, '')
}

//Solution 2

function shortcut(str){
    return str
    .split('')
    .filter( st => !'aeiou'.includes(str))
    .join('')
}

// Solution 3

const shortcut = string => string.replace(/[aeiou]/g, '')
    // An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

    // Example: (Input --> Output)

    // "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)


// SOLUTION 1

function isIsogram(str){
    return !str || (str.length === new Set(str.toLowerCase()).size)
}

// SOLUTION 2

function isIsogram(str){
    let arr = str.split('').map(function(el){
        return el.toUpperCase()
    })

    return arr.every(function(el){
        return arr.indexOf(el) === arr.lastIndexOf(el)
    })
}

// SOLUTION 3

function isIsogram(str){
    return new Set(str.toLowerCase()).size == str.length
}
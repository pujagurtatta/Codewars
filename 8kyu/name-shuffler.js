// Write a function that returns a string in which firstname is swapped with last name.

// MY SOLUTION 

function nameShuffler(str){
    return str.split(" ").reverse().join(" ")
}


// ANOTHER SOLUTION

function nameShuffler(str){
    const fullName = str.split(" ")
    return [fullName[1], fullName[0]].join(" ")
}
// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).


const remove = (arr) => {
    arr = arr.split(',')
    arr.pop()
    arr.shift()
    return arr.join(' ') === ''? null : arr.join(' ')
}


function array(arr){
     let data = arr.split(',')
     data.pop()
     data.shift()
     return data.length ? data.join(' ') : null;
}

function array(arr){
    arr = arr.split(',');

    if (arr.length < 3){
        return null;
    }

    return arr.slice(1, arr.length - 1).join(' ');
    
}

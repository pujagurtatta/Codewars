// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


// SOLUTION 1

function abbrevName(name){

    const [firstName, lastName] = name.split(" ")
    const firstInitial = firstName.charAt(0).toUpperCase()
    const lastInitial = lastName.charAt(0).toUpperCase()
    return firstInitial + '.' + lastInitial
}

// SOLUTION 2


function abbrevName(name){
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}


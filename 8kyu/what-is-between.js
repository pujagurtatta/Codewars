// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]


// SOLUTION 1

function between(a, b){
    let newArr = []

    for(let i = a; i <= b; i++){
        newArr.push(i)
    }

    return newArr
}

// SOLUTION 2

function between(a, b){

    const newArr = []
    while(a <= b){
        newArr.push(a)
        a++;
    }
}
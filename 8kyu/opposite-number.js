// Very simple, given an integer or a floating-point number, find its opposite.

// SOLUTION 1

function opposite(number){
    return number > 0 ? -Math.abs(number) : Math.abs(number)
}

// SOLUTION 2

function opposite(number){
    return -number
}

// SOLUTION 3

function opposite(number){
    if (number>0){
        return -Math.abs(number)
    }
    if (number<0){
        return Math.abs(number)
    }
    if (number == 0){
        return 0
    }
}
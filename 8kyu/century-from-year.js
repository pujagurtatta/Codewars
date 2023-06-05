// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// 
// Task
// Given a year, return the century it is in.

//SOLUTION 1

function century(year){
    let cen = Math.ceil(year/100)
    return cen
}


//SOLUTION 2

function century(year){

    let cen = 0;

    for(i = 0; i < year; i++){
        if(i % year == 0){
            return cen++
        }
    }
    return cen
}

// SOLUTION 3

function century(year){
    if(year <= 100){
        return 1;
    }

    let cen = parseInt(year/100)
    let rem = year % 100

    return rem === 0 ? cen : cen + 1;
}

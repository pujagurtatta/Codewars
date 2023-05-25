// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

// MY SOUTION

array = [1,2,3,4,5];

function calculateAverage(array){
    if (array.length == 0){
        return 0;
    }

    let sum = 0;
    for( i = 0; i < array.length ; i++){
        sum +=array[i]
    }

    return sum / array.length;
}


// another solution

function findaverage(array){
    if (array.length === 0){
        return 0;
    }

    return array.reduce((previousValue, currentValue) => previousValue + currentValue, 0) / array.length
}



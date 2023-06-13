// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".


// SOLUTION 1

function problem(x){
    //your code here
    
    if(x === x.toString()){
      return "Error"
    }else{
      return (x*50)+6
    }
  }

// SOLUTION 2

const problem = x = typeof x === "number" ? (x*50)+6 : "Error";

// SOLUTION 3

const problem = x =>
  Number.isFinite(x) ? x * 50 + 6 : `Error`;

  // SOLUTION 4

  function problem(x){
    let sum = x * 50 + 6;
    if(x > 0 || x < 0 || x === 0)
    return sum
    else {
    return "Error"
  }
  }
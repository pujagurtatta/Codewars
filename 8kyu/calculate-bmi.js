// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// SOLUTION 1

function bmi(weight, height) {
    let calBMI = weight/Math.pow(height,2) 
    
    if (calBMI <= 18.5) {
      return "Underweight";
    } else if (calBMI <= 25) {
      return "Normal";
    } else if (calBMI <= 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }

  // SOLUTION 2

  function bmi(weight, height) {
  
    let calBMI  = weight/(height*height);
    
     return calBMI < 18.5 ? "Underweight" : calBMI <=25 ? "Normal" : calBMI <= 30 ? "Overweight" : "Obese";
    
    }

    // SOLUTION 3 

    function bmi(weight, height) {
        var calBMI = (weight / Math.pow(height, 2));
        switch (true) {
          case calBMI <=18.5:
          return 'Underweight';
          case calBMI <=25.0:
          return 'Normal';
          case calBMI <=30:
          return 'Overweight';
          default:
          return 'Obese';
          
        }
      }
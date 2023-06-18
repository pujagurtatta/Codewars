// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD


function alternateCase(s) {
    return s.split('').map(function(sayhello) {
      return sayhello === sayHello.toUpperCase() ? sayHello.toLowerCase() : sayHello.toUpperCase();
    }).join('');
  }

  // SOLUTION 2 

  alternateCase = (s) => s.split('').map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase() ).join('');

  // SOLUTION 3 

  alternateCase = s => [...s].map(x => x == x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('')
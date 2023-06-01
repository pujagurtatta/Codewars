// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// solution 1

function greet(name){
    return `Hello, ${name} how are you doing today?`
}

// solution 2

function greet(name){
    return "Hello, " + name + " how are you doing today?"
}

// solution 3

function greet(name){
    return "Hello, <name> how are you doing today?".replace("<name>", name);
}
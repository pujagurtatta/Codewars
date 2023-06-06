// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

//SOLUTION 1

function greet(name){
    if(name === "JOHNNY")
        return "Hello, my love!"
    else
        return "Hello" + name + '!'
}

// SOLUTION 2 

function greet(name){
    return "Hello, " + (name == "JOHNNY" ? "my love" : name) + "!"
}

// SOLUTON 3

let greet = name => `Hello, ${name == "JOHNNY" ? "my love" : name}!`
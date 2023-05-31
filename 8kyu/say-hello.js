// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish


// SOLUTION 1

const validateHello = greetings => /ciao|hello|salut|hallo|hola|ahoj|czech/i.test(greetings)



// SOLUTION 2

const hellos = {
    ciao: 'italian',
    hello: 'english',
    salut: 'french',
    hallo: 'german',
    hola: 'spanish',
    ahoj: 'czesc republic',
    czesc: 'polish',
}

const validateHellos = greetings => {
    for(key in hellos){
        if (greetings.toLowerCase().includes(key)){
            return true
        }
    }
    return false
}



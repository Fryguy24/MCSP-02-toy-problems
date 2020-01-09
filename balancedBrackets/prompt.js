// Given a string, return true if it contains all balanced parenthesis (),
// curly-brackets {}, and square-brackets [].

//                        Examples
//               Input	                       Output
// str: "(x + y) - (4)"           |   true
// str: "(x + y) - (4)"           |   true
// str: "(((10 ) ()) ((?)(:)))"   |   true
// str: "[{()}]"                  |   true
// str: "(50)("                   |   false
// str: "[{]}"                    |   false
const isBalanced = str => {
    let array = [];
    let correspond = {
        // Making sure each opening brace is the same as the corresponding closing brace.
        '(': ')',
        '[': ']',
        '{': '}'
    }
    // There is a function that takes in a parameter, which is a string.
    // Returns a boolean.
    // Check if all parenthesis, curly-brackets, and square-brackets are balanced.
    // Put into an array.
    // Iterate through str.

    for (let i = 0; i < str.length; i++) {

        // If character is an opening brace add it to a stack/array
        if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
            array.push(str[i]);
        }
        //  If that character is a closing brace, pop from the stack/array.
        else {
            let last = array.pop();

            //  If the popped element from the stack doesn’t match the corresponding closing brace in the object, then return false.
            if (str[i] !== correspond[last]) {return false};
        }
    }
        // If the stack is not empty then false.
        if (array.length !== 0) {return false};

    return true;

};




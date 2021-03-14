let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Jan';

// userName = userInput; esto no se puede tendrias que: 

if ( typeof userInput === 'string'){
    userName = userInput;
}

function generateError(message: string, code:number): never {
    throw {message: message, errorCode: code}
}

const result = generateError('An error ocurred!', 500)
console.log(result);

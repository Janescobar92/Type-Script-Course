var userInput;
var userName;
userInput = 5;
userInput = 'Jan';
// userName = userInput; esto no se puede tendrias que: 
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('An error ocurred!', 500);
console.log(result);

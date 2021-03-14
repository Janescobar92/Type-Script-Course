function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    // esta funcion es de tine un return type void
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
var someValue; // esto es una variable de tipoe undefined siempre retornara undefined
// let combinedValues: Function;
var combinedValues;
combinedValues = add;
// combinedValues = printResult;
console.log(combinedValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});

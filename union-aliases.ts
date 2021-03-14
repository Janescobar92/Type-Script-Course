type Combinable = number | string; // esto es un tipo alias

function combine(
  input1: number | string,
  input2: Combinable, // ejemplo de uso del type alias
  resultConversion: "as-text" | "as-number" // este type es un literal
) {
  let result;
  if (
    typeof input1 === "number" &&
    typeof input2 === "number" &&
    resultConversion === "as-number"
  ) {
    result = input1 + input2;
    console.log(resultConversion);
  } else {
    result = input1.toString() + " " + input2.toString();
    console.log(resultConversion);
  }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combineNames = combine("Luis", "Carlos", "as-text");
console.log(combineNames);

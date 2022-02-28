// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

input = 15;
const output = fizzBuzz(input);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return "Not a number";

  let output = "";
  if (input % 3 === 0) output += "Fizz";
  if (input % 5 === 0) output += "Buzz";

  return output === "" ? input : output;
}

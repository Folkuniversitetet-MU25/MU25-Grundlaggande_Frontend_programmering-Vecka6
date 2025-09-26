// // En funktion som simulerar en asynkron operation, t.ex. en HTTP-begäran

// function simulateAsyncOperation(callback) {
//   // Simulera en fördröjning på 2 sekunder
//   setTimeout(function () {
//     // När operationen är klar, anropa callback-funktionen
//     callback("Operationen är klar!");
//   }, 1000);
// }

// // En callback-funktion som loggar meddelandet till konsolen

// function logMessage(message) {
//   console.log(message);
// }

// // Anropa funktionen simulateAsyncOperation med callback-funktionen logMessage
// simulateAsyncOperation(logMessage);

// console.log("1111Väntar på att den asynkrona operationen ska slutföras...");

// setTimeout(function () {
//   console.log("22222Väntar på att den asynkrona operationen ska slutföras...");
// }, 2000);

// Rest operator =  modulus-operator: %
// console.log(10 % 3);
// console.log(15 % 4);
// console.log(8 % 2);

// const person = {
//   firstName: "Mandus",
//   age: 40,
// };

// if (person.age % 2 === 0) {
//   console.log("Jämnt");
// } else {
//   console.log("Udda");
// }

// Spread operator (...)

//  slå ihop 2 arrayer
const fruits = ["äpple", "banan"];
const moreFruits = ["melon", "kiwi"];

// console.log(fruits + moreFruits);
const allFruits = [...fruits, ...moreFruits];

// console.log(allFruits);

// ... kopiera object
// const person = {
//   firstName: "Mandus",
//   age: 40,
// };

// const copyMandus = { ...person };

// copyMandus.age = 38;

// person.age = 39;

// console.log(person);

// console.log(copyMandus);

// const copyMandus2 = { ...person, city: "Övik" };

// console.log(copyMandus2);

// Rest operator (...)

// let nyData = ["Hej", 123, true];

// function logAll(...values) {
//   console.log(values);
// }

// // logAll(nyData);
// // logAll("johooo", "trevligt", false, 22);

// function greet(greeting, ...names) {
//   names.forEach((firstName) => console.log(`${greeting}, ${firstName}`));
// }

// greet("hej", "Mandus", "chatti", "björn");

// function multiply(...nums) {

//   console.log(nums);
//   return nums.reduce((a, b) => a * b );
// }

// let result = multiply(2, 3, 4);

// console.log(result);

// let result = [].reduce((a, b) => a + b, 0);
// let result2 = [].reduce((a, b) => a + b);

// console.log(result);
// console.log(result2);

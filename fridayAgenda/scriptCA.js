// Spread operator (...)
// Sprider ut innehållet i en array eller ett objekt. Perfekt för att kopiera, slå ihop eller bygga nytt.”
// – slå ihop två arrayer
const fruits = ["äpple", "banan"];
const moreFruits = ["päron", "melon"];
const allFruits = [...fruits, ...moreFruits];
console.log("All fruits:", allFruits);

// Spread operator (...) – kopiera objekt och lägga till ny key
const user = { name: "Anna", age: 25 };
const newUser = { ...user, city: "Stockholm" };
console.log("New user:", newUser);

// Rest operator (...)
// Samlar ihop flera argument till en array. Används i funktionsparametrar.
// – samla argument i en funktion
function logAll(...values) {
  console.log(values);
}
logAll("hej", 123, true);
// → ["hej", 123, true]

function greet(greeting, ...names) {
  names.forEach((firstName) => console.log(`${greeting}, ${firstName}!`));
}
greet("Hej", "Anna", "Bo", "Sara");
// → "Hej, Anna!" "Hej, Bo!" "Hej, Sara!"

// reduce kör en funktion på varje element i arrayen och bygger ihop det till ett enda värde.
// Syntaxen är:
// array.reduce((ackumulator, nuvarandeVärde) => { ... }, startvärde)

function multiply(...nums) {
  return nums.reduce((a, b) => a * b, 1);
}
console.log("Multiply:", multiply(2, 3, 4)); // 24

// Vad betyder 0 här?
// a = ackumulatorn (börjar på 1 här).

// b = nästa element i arrayen.

// 1 = startvärdet för ackumulatorn.

// Om du inte sätter ett startvärde så börjar reduce automatiskt med arrayens första element, och då kan du få problem om arrayen är tom →
// [].reduce((a, b) => a + b, 0); // → 0
// [].reduce((a, b) => a + b);    // → Error!

// Repetition – bygg en lista i DOM med map
const todos = ["Handla", "Plugga", "Träna"];
const ul = document.createElement("ul");
ul.innerHTML = todos.map((todo) => `<li>${todo}</li>`).join("");
document.body.appendChild(ul);

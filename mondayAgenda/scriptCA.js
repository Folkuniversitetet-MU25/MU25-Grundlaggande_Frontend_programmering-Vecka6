// DEL 1 – En första funktion
// Funktion som adderar två tal
function add(a, b) {
  return a + b;
}

// Test
console.log("add(2, 3) =", add(2, 3));

// 🗣️ Talarmanus:
// ”Vi börjar med en enkel funktion add som tar två parametrar a och b och returnerar summan.
// När vi anropar add(2,3) får vi 5 tillbaka. Lägg märke till att vi måste skriva return – annars kommer funktionen inte ge något värde.”

// DEL 2 – Function expression
// Function expression
const multiply = function (x, y) {
  return x * y;
};

console.log("multiply(4, 5) =", multiply(4, 5));

// 🗣️ Talarmanus:
// ”Här skapar vi en funktion och sparar den i en variabel. Det kallas function expression.
// Skillnaden mot function declaration är att den här varianten inte kan användas innan raden körts.”

// DEL 3 – Arrow function
// Arrow function
const subtract = (x, y) => x - y;

console.log("subtract(10, 3) =", subtract(10, 3));

// 🗣️ Talarmanus:
// ”Arrow functions är en kortare syntax. Om funktionen bara returnerar ett värde kan vi skriva allt på en rad. Det här används ofta i modern JS.”

// DEL 4 – Funktion med parameter + utskrift
// Funktion som hälsar
function greet(name) {
  return "Hej, " + name + "!";
}

console.log(greet("Anna"));

// DEL 5 – Loop: for
// Array
const fruits = ["äpple", "banan", "apelsin"];

// For-loop
for (let i = 0; i < fruits.length; i++) {
  console.log("Frukt nr " + i + ":", fruits[i]);
}

// 🗣️ Talarmanus:
// ”En for-loop består av tre delar: startvärde, villkor och ökning.
// Här loopar vi från 0 till arrayens längd minus 1 och skriver ut varje frukt.”

// DEL 6 – Loop: for…of
for (const fruit of fruits) {
  console.log("Frukt via for…of:", fruit);
}

// 🗣️ Talarmanus:
// ”for…of är enklare när vi bara vill gå igenom varje värde i en lista. Här behöver vi inte bry oss om index.”

// DEL 7 – Loop: while
let counter = 0;
while (counter < 3) {
  console.log("While-loop varv:", counter);
  counter++;
}

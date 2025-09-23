// 🟡 Startdata
const numbers = [1, 2, 3, 4, 5];
const names = [
  "Eva",
  "Bo",
  "Anna",
  "Li",
  "Kalle",
  "Mohammad",
  "Kung Carl-Gustav 8",
];

// 1) forEach – gör något för varje (ingen retur-array)
console.log("forEach:");

numbers.forEach((n) => {
  // Talarmanus: här hade man kunnat uppdatera DOM, skicka analytics, etc.
  console.log("  värde:", n);
});

// 2) map – transformera → ny array
const doubled = numbers.map((n) => n * 2);

console.log("map (dubbla):", doubled); // [2,4,6,8,10]

// 3) filter – behåll bara de som uppfyller villkor → ny array
const longNames = names.filter((n) => n.length >= 4);

console.log("filter (>=4 tecken):", longNames);

// 4) Destrukturering – objekt
const person = { firstName: "Anna", age: 25, city: "Göteborg" };

const { firstName, age } = person; // plocka ut

console.log("destrukturering (obj):", firstName, age);

// 5) Destrukturering – array
const rgb = [255, 128, 0];

const [r, g, b] = rgb;

console.log("destrukturering (arr):", r, g, b);

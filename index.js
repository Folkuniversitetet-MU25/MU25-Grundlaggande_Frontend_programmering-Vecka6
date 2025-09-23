// TODO data
const numbers = [1, 2, 3, 4, 5];
const names = ["Eva", "Adam", "Bo", "Kalle", "Mohammad", "Kung Carl-Gustav 8"];

// TODO forEach – gör något för varje (ingen retur-arraTODO
// console.log("forEach startar här: ");

// numbers.forEach((number) => {
//   number = number * 2;
//   console.log("Värde för detta element i arayen är: ", number);
//   console.log("Värde för arayen är: ", numbers);
// });

// console.log("forEach SLUTAR här: ");

// TODO map – transformera → ny array
// const double = numbers.map((number) => {
//   console.log("number", number);
//   return number * 2;
// });

// console.log("double2", double);

// TODO filter – behåll bara de som uppfyller villkor → ny array

// const shortNames = names.filter((firstName) => firstName.length <= 4);

// console.log("names", names);
// console.log("shortNames", shortNames);

// TODO Destrukturering – objekt
// const person = {
//   firstName: "Mandus",
//   age: 40,
//   city: "Örnsköldsvik",
// };

// console.log("person", person);

// const { firstName, age } = person;

// console.log("firstName", firstName);

// const person = [
//   { firstName: "Mandus", age: 40, city: "Örnsköldsvik" },
//   { firstName: "Hans", age: 41, city: "Örnsköldsvik" },
//   { firstName: "Kristian", age: 40, city: "Örnsköldsvik" },
// ];

// console.log("person", person);

// const { firstName, age } = person[1];

// console.log("firstName", firstName);

// TODO Destrukturering – array
// const rgb = [255, 128, 0];

// const [r, g, b] = rgb;

// console.log(r);
// console.log(g);
// console.log(b);

// TODO - Extra map – skapa en p tag för varje element i arrayen/listan med content från arrayen, appenda det till html

const pTagWithNameAsContent = names.map((name) => {
  let pName = document.createElement("p");

  pName.textContent = `Mitt namn är: ${name} och jag gillar att koda!`;

  let divWithH2AndPTags = document.querySelector(".p-Name");

  divWithH2AndPTags.appendChild(pName);

  document.querySelector(".hej").textContent += name;
});

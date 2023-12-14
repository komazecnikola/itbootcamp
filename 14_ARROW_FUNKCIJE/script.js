// Klasične (imenovane) funckije

function sum(a, b) {
  return a + b;
}

let rez = sum(1, 2); // poziv funkcije (po imenu, iza koga se navode argumenti)
console.log(rez);

// Anonimne funkcije (bez imena)
let suma = function (a, b) {
  return a + b;
};

console.log(suma(1, 2)); // poziv anonimne funkcije

// Arrow funckije - poseban vid anonimnih funkcija
// Anonimne funckije koje imaju dva specifična svojstva:
// 1. Imaju skraćen zapis
// 2. Značenje ključne reči "this"

let suma2 = (a, b) => {
  return a + b;
};

console.log(suma2(1, 2));

// Primer 1

let hello = () => {
  console.log("Hello World!");
};

hello();

// Primer 2

let echo = (s1, s2) => {
  let result = s1 + ", " + s2;
  console.log(result);
};

echo("Nikola", "Komazec");

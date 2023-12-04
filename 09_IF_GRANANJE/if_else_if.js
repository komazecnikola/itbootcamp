let datum = new Date();

// Zadatak 8

/* 
09:00 - firma je otvorena
17:00 - firma je zatvorena
*/

let sati = datum.getHours();

if (sati < 9) {
  console.log("Firma trenutno ne radi");
} else if (sati >= 17) {
  console.log("Firma trenutno ne radi");
} else {
  console.log("Firma radi");
}

// Zadatak 6

let dan = datum.getDay();
console.log(dan);

// Dani se broje od 0 do 6 i prvi dan je Nedelja, poslednji Subota.
if (dan == 0) {
  console.log("Vikend");
} else if (dan == 6) {
  console.log("Vikend");
} else {
  console.log("Radni dan");
}

// Zadatak 7

if (sati < 12) {
  console.log("Dobro jutro");
} else if (sati < 18) {
  console.log("Dobar dan");
} else {
  console.log("Dobro veče");
}

// Zadatak 9

let p1 = 9;
let k1 = 14;

let p2 = 12;
let k2 = 22;

if (k1 <= p2) {
  console.log("NE");
} else if (k2 <= p1) {
  console.log("NE");
} else {
  console.log("DA");
}

// Zadatak 10

let a = 7;
let b = 17;

if (a > b) {
  console.log(++a);
  console.log(--b);
} else if (a < b) {
  console.log(--a);
  console.log(++b);
} else {
  console.log("Brojevi su jednaki");
}

// Zadatak 11

let c = 12.1;

if (c % 1 != 0) {
  console.log("Nije ceo broj");
} else {
  console.log("Ceo broj");
}

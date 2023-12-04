// Zadatak 15

let temp = 42;

if (temp < -15 || temp > 40) {
  console.log("ekstremna temperatura");
} else {
  console.log("normalna temperatura");
}

// 2. Način

if (temp >= -15 && temp <= 40) {
  console.log("normalna temperatura");
} else {
  console.log("ekstremna temperatura");
}

//Zadatak 16

let datum = new Date();
let god = datum.getFullYear();

console.log(god);

if ((god % 4 == 0 && god % 100 != 0) || god % 400 == 0) {
  console.log("Godina je prestupna");
} else {
  console.log("godina nije prestupna");
}

// Zadatak 17

let dan = datum.getDay();
console.log(dan);

let sat = datum.getHours();
console.log(sat);

// Dani 1, 2, 3, 4, 5 - radno vreme od 9h do 20h
// Dani 0 i 6 - radno vreme od 10h do 18h

if ((dan == 0 || dan == 6) && sat >= 10 && sat < 18) {
  console.log("Otvoreno!");
  document.write(`
  <img width="400" src="https://s3.us-east-2.wasabisys.com/deadlinesigns/2020/08/YesWeAreOpen_LawnSign_24x18-03.png" />
  `);
} else if (dan >= 1 && dan <= 5 && sat >= 9 && sat < 20) {
  console.log("Otvoreno!");
  document.write(`
  <img width="400" src="https://s3.us-east-2.wasabisys.com/deadlinesigns/2020/08/YesWeAreOpen_LawnSign_24x18-03.png" />
  `);
} else {
  console.log("Zatvoreno!");
  document.write(`
  <img width="400" src="https://www.accuform.com/files/damObject/Image/huge/MADM570.jpg"/>
  `);
}

// Zadatak 18

let x = 18;
let y = 15;
let z = 28;

// A

let max = x;
if (y > max) {
  max = y;
}

if (z > max) {
  max = z;
}

console.log(`Najveći broj je ${max}`);

// B

let maks = null;

if (x > y) {
  maks = x;
} else {
  maks = y;
}
if (maks < z) {
  maks = z;
}

console.log(`Največi broj je ${maks}`);

// C

if (x > y) {
  if (x > z) {
    console.log(`Največi je ${x}`);
  } else {
    console.log(`Največi je ${z}`);
  }
} else if (y > z) {
}

// D

if (x > y && x > z) {
  console.log(`${x} je najveći broj.`);
} else if (y > x && y > z) {
  console.log(`${y} je najveći broj.`);
} else if (z > x && z > y) {
  console.log(`${z} je največi broj.`);
} else {
  console.log(`Neki brojevi su isti.`);
}

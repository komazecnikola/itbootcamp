// Zadatak 3
// Varijanta 1 preko klasičnih funkcija

// Pisati kod ovako, bolje nego kao neparan2
function neparan(n) {
  let x;
  if (n % 2 == 1) {
    x = true;
  } else {
    x = false;
  }
  // let x; // netačno
  return x;
}

function neparan2(n) {
  if (n % 2 == 1) {
    var x = true; // var je definisana unutar funkcije u kojoj je deklarisana
  } else {
    var x = false;
  }
  // var = x; // tačno, ali besmisleno
}

let p = 5;

console.log(neparan2(p));

var m = 14;
console.log(m);

// Varijanta preko arrow funckije
let neparan3 = (n) => {
  let x = false;

  if (n % 2 == 1) {
    x = true;
  }

  return x;
};

// Varijanta

let neparanX = (n) => {
  if (n % 2 == 1) {
    return true;
  } else {
    return false;
  }
};

// Varijanta sa ternanrnim operatorom

let neparan4 = (n) => {
  return n % 2 == 1 ? true : false;
};

console.log(neparan4(6));

// Varijanta

let neparan5 = (n) => {
  return n % 2 == 1;
};

// Varijanta

let neparan6 = (n) => n % 2 == 1;

// može i ovako let neparan6 = n => ... (bez zagrada jer ima samo jedan parametar)

let uvecajZaDva = (n) => (n += 2);

console.log(uvecajZaDva(7));

// Zadatak 1 pod A
// Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja.

let maks2 = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

console.log(maks2(12, 45));

// Drugi način

let maks2X = (a, b) => {
  return a > b ? a : b;
};

console.log(maks2X(11, 34));

// Zadatak 1 pod B
// Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

let maks4 = (a, b, c, d) => {
  let max1 = maks2(a, b);
  let max2 = maks2(c, d);

  if (max1 > max2) {
    return max1;
  } else {
    return max2;
  }
};

console.log(maks4(12, 15, 24, 34));

// Drugi način

let maks4X = (a, b, c, d) => maks2(maks2(a, b), maks2(c, d));

// ne mora return ako nema vitičastih zagrada, ali ako ima zagrada onda mora return da bi funkcija vratila nešto

console.log(maks4X(2, 3, 4, 5));

// Zadatak 2

let slika = (link) => `<img width="300" src="${link}.jpg" />`;

document.getElementById("plavi").innerHTML += slika("paint");

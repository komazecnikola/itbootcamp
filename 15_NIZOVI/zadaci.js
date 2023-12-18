// Test primeri nizova za zadatke

let brojevi1 = [8, 4, -2, 0, 1, 0];
let brojevi2 = [10, -5, 0, -3];
let brojevi3 = [1, 2, 3, 4, 5, 6];
let brojevi4 = [1, 5, 9, 3];
let brojevi5 = [8, 6, 7, 8, 15];

// Zadatak 1

///////////////////////////////////////////////////////////////
// Zadatak 2
/* Odrediti zbir elemenata celobrojnog niza */
///////////////////////////////////////////////////////////////

let sumaElem = (niz) => {
  let suma = 0;
  for (let i = 0; i < niz.length; i++) {
    suma = suma + niz[i];
  }
  return suma;
};

console.log(sumaElem(brojevi1));
console.log(sumaElem(brojevi2));
console.log(sumaElem(brojevi3));

///////////////////////////////////////////////////////////////
// Zadatak 3
/* Odrediti proizvod elemenata celobrojnog niza */
///////////////////////////////////////////////////////////////

let proizvodElem = (niz) => {
  let proizvod = 1;
  for (let i = 0; i < niz.length; i++) {
    proizvod = proizvod * niz[i];
  }
  return proizvod;
};

console.log(proizvodElem(brojevi1));
console.log(proizvodElem(brojevi2));
console.log(proizvodElem(brojevi3));

///////////////////////////////////////////////////////////////
// Zadatak 4
/* Odrediti srednju vrednost elemenata celobrojnog niza */
///////////////////////////////////////////////////////////////

let srednjaVrednost = (niz) => {
  let suma = 0;
  // brojBrojeva = 0; - ne treba nam jer imamo .length svojstvo
  for (let i = 0; i < niz.length; i++) {
    suma = suma + niz[i];
  }
  return suma / niz.length;

  //   let srvr = suma / niz.length;
  //   return niz.length != 0 ? srvr = 0;
};

// uraditi ovo i sa već postojećom funkcijom "sumaElem" u jednom redu
let srVrednost2 = (niz) => sumaElem(niz) / niz.length;

console.log("--- Zadatak 4 ---");

console.log(srednjaVrednost(brojevi1));
console.log(srednjaVrednost(brojevi2));
console.log(srednjaVrednost(brojevi3));
console.log(srednjaVrednost(brojevi4));
console.log(srednjaVrednost(brojevi5));

// Zadatak 4a
/* Odrediti srednju vrednost parnih elemenata celobrojnog niza */

let srVrednostParnih = (niz) => {
  let sumaParnih = 0;
  let brojParnih = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0) {
      sumaParnih = sumaParnih + niz[i];
      brojParnih++;
    }
  }

  return sumaParnih / brojParnih;
};

console.log(srVrednostParnih(brojevi1));
console.log(srVrednostParnih(brojevi2));
console.log(srVrednostParnih(brojevi3));

console.log(srVrednostParnih(brojevi4)); // vraća NaN jer 0 deli sa 0

///////////////////////////////////////////////////////////////
// Zadatak 5
/* Odrediti maksimalnu vrednost u celobrojnom nizu */
///////////////////////////////////////////////////////////////

// Koraci:
// 1. Prograliti prvi element niza za maksimalni
// 2. Proći kroz ostale elemente niza i utvrditi ima li većeg elementa niza od maksimuma
// 3. Ako ima onda tu novu vrednost proglasiti za maksimum

let maksVrednost = (niz) => {
  let maks = niz[0];
  for (let i = 1; i < niz.length; i++) {
    // Krećemo od drugog elementa niza
    if (maks < niz[i]) {
      maks = niz[i];
    }
  }
  return maks;
};

console.log(maksVrednost(brojevi1));
console.log(maksVrednost(brojevi2));
console.log(maksVrednost(brojevi3));
console.log(maksVrednost(brojevi4));

///////////////////////////////////////////////////////////////
// Zadatak 6
/* Odrediti minimalnu vrednost u celobrojnom nizu */
///////////////////////////////////////////////////////////////

let minVrednost = (niz) => {
  let min = niz[0];
  for (let i = 1; i < niz.length; i++) {
    if (min > niz[i]) {
      min = niz[i];
    }
  }
  return min;
};

console.log(minVrednost(brojevi1));
console.log(minVrednost(brojevi2));
console.log(minVrednost(brojevi3));
console.log(minVrednost(brojevi4));

///////////////////////////////////////////////////////////////
// Zadatak 7
/* Odrediti indeks maksimalnog elementa celobrojnog niza */
///////////////////////////////////////////////////////////////

let indMaxNiza = (niz) => {
  let max = niz[0];
  let index = 0;

  for (let i = 1; i < niz.length; i++) {
    if (niz[i] > max) {
      max = niz[i];
      index = i; // NE MOŽE index++ !!!
    }
  }
  return index;
};

console.log(indMaxNiza(brojevi5));

///////////////////////////////////////////////////////////////
// Zadatak 8
/* Odrediti indeks minimalnog elementa celobrojnog niza */
///////////////////////////////////////////////////////////////

let indexMinNiza = (niz) => {
  let min = niz[0];
  let index = 0;

  for (let i = 1; i < niz.length; i++) {
    if (niz[i] < min) {
      min = niz[i];
      index = i;
    }
  }

  return index;
};

console.log(indexMinNiza(brojevi1));
console.log(indexMinNiza(brojevi2));
console.log(indexMinNiza(brojevi3));
console.log(indexMinNiza(brojevi4));
console.log(indexMinNiza(brojevi5));

///////////////////////////////////////////////////////////////
// Zadatak 9
/* Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti */
///////////////////////////////////////////////////////////////

let brojElemVeci = (niz) => {
  let suma = 0;
  let brojElem = 0;

  for (let i = 0; i < niz.length; i++) {
    suma = suma + niz[i];
  }

  let srVrednost = suma / niz.length;

  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > srVrednost) {
      brojElem++;
    }
  }

  return brojElem;
};

console.log("--- Zadatak 9 ---");

console.log(brojElemVeci(brojevi1));
console.log(brojElemVeci(brojevi2));
console.log(brojElemVeci(brojevi3));
console.log(brojElemVeci(brojevi4));
console.log(brojElemVeci(brojevi5));

///////////////////////////////////////////////////////////////
// Zadatak 10
/* Izračunati zbir pozitivnih elemenata celobrojnog niza */
///////////////////////////////////////////////////////////////

let zbirPozitivnih = (niz) => {
  let suma = 0;

  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > 0) {
      suma = suma + niz[i];
    }
  }
  return suma;
};

console.log("--- Zadatak 10 ---");

console.log(zbirPozitivnih(brojevi1));
console.log(zbirPozitivnih(brojevi2));
console.log(zbirPozitivnih(brojevi3));
console.log(zbirPozitivnih(brojevi4));
console.log(zbirPozitivnih(brojevi5));

///////////////////////////////////////////////////////////////
// Zadatak 11
/* Odrediti broj parnih elemenata u celobrojnom nizu */
///////////////////////////////////////////////////////////////

let brojParnihElem = (niz) => {
  let brojParnih = 0;

  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0) {
      brojParnih++;
    }
  }

  return brojParnih;
};

console.log("--- Zadatak 11 ---");

console.log(brojParnihElem(brojevi1));
console.log(brojParnihElem(brojevi2));
console.log(brojParnihElem(brojevi3));
console.log(brojParnihElem(brojevi4));
console.log(brojParnihElem(brojevi5));

///////////////////////////////////////////////////////////////
// Zadatak 12
/* Odrediti broj parnih elemenata sa neparnim indeksom */
///////////////////////////////////////////////////////////////

let brNeparIndex = (niz) => {
  let brojParnih = 0;

  for (let i = 0; i < niz.length; i++) {
    if (i % 2 == 1 && niz[i] % 2 == 0) {
      brojParnih++;
    }
  }

  return brojParnih;
};

console.log("--- Zadatak 12 ---");

console.log(brNeparIndex(brojevi1));
console.log(brNeparIndex(brojevi2));
console.log(brNeparIndex(brojevi3));
console.log(brNeparIndex(brojevi4));
console.log(brNeparIndex(brojevi5));

///////////////////////////////////////////////////////////////
// Zadatak 13
/* Izračunati sumu elemenata niza sa parnim indeksom */
///////////////////////////////////////////////////////////////

let sumaParniIndex = (niz) => {
  let suma = 0;

  for (let i = 0; i < niz.length; i++) {
    if (i % 2 == 0) {
      suma = suma + niz[i];
    }
  }

  return suma;
};

console.log("--- Zadatak 13 ---");

console.log(sumaParniIndex(brojevi1));
console.log(sumaParniIndex(brojevi2));
console.log(sumaParniIndex(brojevi3));
console.log(sumaParniIndex(brojevi4));
console.log(sumaParniIndex(brojevi5));

///////////////////////////////////////////////////////////////
// Zadatak 14
/* Promeniti znak svakom elementu celobrojnog niza */
///////////////////////////////////////////////////////////////

let promenaZnaka = (niz) => {
  let noviNiz = [];
  for (let i = 0; i < niz.length; i++) {
    noviNiz[i] = niz[i] * -1;
  }

  return noviNiz;
};

console.log("--- Zadatak 14 ---");

console.log(promenaZnaka(brojevi1));
console.log(promenaZnaka(brojevi2));
console.log(promenaZnaka(brojevi3));
console.log(promenaZnaka(brojevi4));
console.log(promenaZnaka(brojevi5));

///////////////////////////////////////////////////////////////
// Zadatak 15
/* Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom */
///////////////////////////////////////////////////////////////

let promenaZnakaNepar = (niz) => {
  let noviNiz = [];

  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 != 0 && i % 2 == 0) {
      noviNiz[i] = niz[i] * -1;
    }
  }

  return noviNiz;
};

console.log("--- Zadatak 15 ---");

console.log(promenaZnakaNepar(brojevi1));
console.log(promenaZnakaNepar(brojevi2));
console.log(promenaZnakaNepar(brojevi3));
console.log(promenaZnakaNepar(brojevi4));
console.log(promenaZnakaNepar(brojevi5));

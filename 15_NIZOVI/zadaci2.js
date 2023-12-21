// Test primeri

let imena = [
  "Ana",
  "Stefan",
  "Jelena",
  "Marko",
  "Miloš",
  "Bratislav",
  "Ljiljana",
  "anica",
];

// Zadatak 19
console.log("--- Zadatak 19");

let duzinaSvakogElementa = (niz) => {
  for (let i = 0; i < niz.length; i++) {
    let s = niz[i];
    console.log(s.length);
  }
};

duzinaSvakogElementa(imena);

// Zadatak 20

console.log("--- Zadatak 20");

let najvecaDuzina = (niz) => {
  let max = niz[0].length;
  for (let i = 1; i < niz.length; i++) {
    if (niz[i].length > max) {
      max = niz[i].length;
    }
  }
  return max;
};

console.log(najvecaDuzina(imena));

// Zadatak 20 ispravan nacin, jer treba da vrati String, a ne duzinu stringa

let stringMaxDuzina = (niz) => {
  let maxString = niz[0]; // string sa max duzinom
  let maxDuzina = maxString.length; // max duzina
  for (let i = 1; i < niz.length; i++) {
    let s = niz[i];
    if (s.length > maxDuzina) {
      maxString = s;
      maxDuzina = s.length;
    }
  }
  return maxString;
};

console.log(stringMaxDuzina(imena));

// Zadatak 20 ali indeks treba da se vrati

let indexMaxDuzina = (niz) => {
  let maxString = niz[0]; // string sa max duzinom
  let maxDuzina = maxString.length; // max duzina
  let maxIndex = 0; // indeks stringa sa max duzinom
  for (let i = 1; i < niz.length; i++) {
    let s = niz[i];
    if (s.length > maxDuzina) {
      maxString = s;
      maxDuzina = s.length;
      maxIndex = i;
    }
  }
  return maxIndex;
};

console.log(indexMaxDuzina(imena));

// Zadatak 21

console.log("--- Zadatak 21");

let prosecnaDuzina = (niz) => {
  let sumaDuzina = 0;
  let br = niz.length;
  let brojElemenata = 0;
  for (let i = 0; i < niz.length; i++) {
    sumaDuzina = sumaDuzina + niz[i].length;
  }

  let prosek = sumaDuzina / br;
  console.log(prosek);

  for (let i = 0; i < niz.length; i++) {
    if (niz[i].length > prosek) {
      brojElemenata++;
    }
  }

  console.log(brojElemenata);
};

prosecnaDuzina(imena);

// Zadatak 21 - drugi nacin

let prosekDuzina = (niz) => {
  let zbirDuzina = 0;
  for (let i = 0; i < niz.length; i++) {
    let s = niz[i];
    zbirDuzina += s.length;
  }
  return zbirDuzina / niz.length;
};

let brojNatprosecnoDugih = (niz) => {
  let pd = prosekDuzina(niz);
  let broj = 0;
  for (let i = 0; i < niz.length; i++) {
    let s = niz[i];
    if (s.length > pd) {
      broj++;
    }
  }
  return broj;
};

console.log(prosekDuzina(imena));
console.log(brojNatprosecnoDugih(imena));

// Zadatak 22

let sadrziA = (niz) => {
  let broj = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i].includes("a")) {
      broj++;
    }
  }

  return broj;
};

console.log(sadrziA(imena));

// Zadatak 23

let pocinjeSa = (niz) => {
  let broj = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i].startsWith("a") || niz[i].startsWith("A")) {
      broj++;
    }
  }
  return broj;
};

console.log(pocinjeSa(imena));

// Zadatak 24 - učešljavanje nizova

let zad24a = (a, b) => {
  let n = a.length; // n = b.length;
  let c = [];

  for (let i = 0; i < n; i++) {
    c.push(a[i], b[i]);
  }

  return c;
  // 0. c = []
  // 1. c = [a[0], b[0]]
  // 2. c = [a[0], b[0], a[1], b[1]]
  // ...
  // n-1. c = [a[0], b[0], a[1], b[1], ..., a[n - 1], bFn - 1]
};

let zad24b = (a, b) => {
  let n = a.length;
  let c = [];
  for (let i = 0; i < n; i++) {
    c[2 * i] = a[i];
    c[2 * i + 1] = b[i];
  }
  return c;
};

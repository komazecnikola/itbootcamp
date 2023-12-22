// Test primeri

let a = [6, 8, 9, 3, 1];
let b = [9, 5, 6, 9, 8, 9, 9];
let c = [3, 5, 2, 1, 6, 2, 6];
// Zadatak 2

let sumaElem = (niz) => {
  let suma = 0;
  niz.forEach((el) => {
    suma += el;
  });
  return suma;
};

console.log(sumaElem(a));

// forEach petlja radi sa vrednostima prvenstveno

// Zadatak 5

let maxVr = (niz) => {
  let max = niz[0];
  niz.forEach((elem) => {
    if (elem > max) {
      max = elem;
    }
  });
  return max;
};

console.log(maxVr(a));

// Zadatak 3

let proizvodElem = (niz) => {
  let proizvod = 1;
  niz.forEach((el) => {
    proizvod *= el;
  });
  return proizvod;
};

console.log(proizvodElem(a));

// Zadatak 4

let srednjaVr = (niz) => {
  let suma = 0;
  niz.forEach((el) => {
    suma = suma + el;
  });
  return suma / niz.length;
};

console.log(srednjaVr(a));

// Zadatak 6

let minVr = (niz) => {
  let min = niz[0];
  niz.forEach((el) => {
    if (min > el) {
      min = el;
    }
  });
  return min;
};

console.log(minVr(a));

// Zadatak 7

let indexMax = (niz) => {
  let max = niz[0];
  let index = 0;
  niz.forEach((e, i) => {
    if (e > max) {
      max = e;
      index = i;
    }
  });
  return index;
};

console.log(indexMax(a));

// Zadatak 7': Vratiti sve indekse pojavljivanja maksimalne vrednosti

let sviIndexiMaxVr = (niz) => {
  let maxVrd = maxVr(niz);
  let sviIndexi = [];
  niz.forEach((elem, i) => {
    if (elem == maxVrd) {
      sviIndexi.push(i);
    }
  });
  return sviIndexi;
};

console.log(sviIndexiMaxVr(b));
console.log(sviIndexiMaxVr(c));
console.log(sviIndexiMaxVr(c)[0]);

// Zadatak 8

let indexMin = (niz) => {
  let min = niz[0];
  let index = 0;
  niz.forEach((e, i) => {
    if (e < min) {
      min = e;
      index = i;
    }
  });
  return index;
};

console.log(indexMin(a));

// Zadatak 9

let brojElem = (niz) => {
  let suma = 0;
  let index = 0;
  niz.forEach((el) => {
    suma = suma + el;
  });
  let srVrd = suma / niz.length;
  niz.forEach((el) => {
    if (el > srVrd) {
      index++;
    }
  });
  return index;
};

console.log(brojElem(a));

// Zadatak 19

let duzinaSvihStringova = (niz) => {
  niz.forEach((el) => {
    console.log(el.length);
  });
};

let imena = ["Stefan", "Vladislav", "Nikola", "Milan", "Nevena", "Maja"];

duzinaSvihStringova(imena);

// Zadatak 20

let stringMaxDuzina = (niz) => {
  let maxVr = niz[0];
  let duzina = niz[0].length;

  niz.forEach((el) => {
    if (el.length > duzina) {
      maxVr = el;
      duzina = el.length;
    }
  });

  return maxVr;
};
console.log(stringMaxDuzina(imena)); // undefined

// maxVr = "Stefan", duzina = 6
// callback("Stefan")
// callback("Vladislav")
// ...
// callback ("Maja")

// Glavna odlika ove forEach petlje je što ZA SVAKI element radi

// Zadatak 24

let zad24 = (a, b) => {
  let c = [];
  a.forEach((e, i) => {
    // c.push(a[i], b[i]);
    c.push(e, b[i]);
  });
  return c;
};

let n1 = [1, 2, 3, 4];
let n2 = [5, 6, 7, 8];

console.log(zad24(n1, n2));

// Zadatak 25

let zad25For = (a, b) => {
  let n = a.length; // n = b.length; - svejedno je pošto su iste dužine
  let c = [];
  for (let i = 0; i < n; i++) {
    c[i] = a[i] * b[i]; // c.push(a[i] * b[i]);
  }
  return c;
};

console.log(zad25For(n1, n2));

let zad25ForEach = (a, b) => {
  let c = [];
  a.forEach((e, i) => {
    c.push(e * b[i]);
  });
  return c;
};

console.log(zad25ForEach(n1, n2));

// Zadatak 26
// a = [a[0], a[1], ..., a[2n - 1]]
// n = 3 => a ima 6 elemenata [a[0], a[1], a[2], a[3], a[4], a[5]]
// Treba formirati niz b = [b[0], b[1], ..., b[n - 1]]
// n = 3 => b ima 3 elementa [b[0], b[1], b[2]]
// b[i] = (a[i] + a[2n - 1 - i] / 2)
// b[0] = (a[0] + a[5]) / 2
// b[1] = (a[1] + a[4]) / 2
// b[2] = (a[2] + a[3]) / 2

let zad26For = (a) => {
  let k = a.length;
  let n = k / 2;
  let b = [];

  for (let i = 0; i < n; i++) {
    b[i] = (a[i] + a[2 * n - 1 - i]) / 2;
  }

  return b;
};

console.log(zad26For(n1));
console.log(zad26For(n2));

let n3 = [5, 8, 0, 1, 4, 2, 4, 3];
console.log(zad26For(n3));

let zad26ForEach = (a) => {
  let b = [];
  let k = a.length;
  let n = k / 2;
  a.forEach((e, i) => {
    if (i < n) {
      b[i] = (a[i] + a[2 * n - 1 - i]) / 2;
    }
  });
  return b;
};

console.log(zad26ForEach(n3));

import Pacijent from "./pacijent.js";

let pacijent1 = new Pacijent("Predrag", 198, 120);
let pacijent2 = new Pacijent("Pero", 178, 78);
let pacijent3 = new Pacijent("Aleksandar", 182, 85);

let pacijenti = [pacijent1, pacijent2, pacijent3];

console.log(pacijent1);
console.log(pacijent2);
console.log(pacijent3);

pacijent1.stampaj();
pacijent2.stampaj();

console.log(pacijent1.bmi());

console.log(pacijent1.kritican());

// Funkcije

// 2
let pacijentSaNajmanjomTezinom = (niz) => {
  let minTezinaPacijent = niz[0]; // Čuva ceo objekat
  let minTezina = minTezinaPacijent.tezina; // Čuva samo težinu

  niz.forEach((e) => {
    if (minTezina > e.tezina) {
      minTezina = e.tezina;
      minTezinaPacijent = e;
    }
  });

  return minTezinaPacijent;
};

let rez = pacijentSaNajmanjomTezinom(pacijenti);
rez.stampaj();

// Može i ovako kraće
pacijentSaNajmanjomTezinom(pacijenti).stampaj();

// 3

let pacijentSaNajvecimBmi = (niz) => {
  let maxBmiPacijent = niz[0];
  let maxBmi = maxBmiPacijent.bmi();

  niz.forEach((e) => {
    if (maxBmi < e.bmi()) {
      maxBmi = e.bmi();
      maxBmiPacijent = e;
    }
  });

  return maxBmiPacijent;
};

pacijentSaNajvecimBmi(pacijenti).stampaj();

console.log(pacijentSaNajvecimBmi(pacijenti));

// 4

let sviPacijentiSaA = (niz) => {
  niz.forEach((e) => {
    if (e.ime.includes("a")) {
      console.log(e);
    }
  });
};

sviPacijentiSaA(pacijenti);

// 5

let srednjaVisina = (niz) => {
  let suma = 0;
  niz.forEach((e) => {
    suma = suma + e.visina;
  });

  let prosek = suma / niz.length;
  return prosek;
};

console.log(srednjaVisina(pacijenti));

// Test primeri

let a = [-6, 8, 11, 6, 0];
let b = ["Pera", "Mika", "Laza"];

// Bez callback funkcije

function ispisNizaKonzola(niz) {
  let s = "";
  for (let i = 0; i < niz.length; i++) {
    s += niz[i] + " "; // Ispis u konzoli svaki element u istom redu
  }
  console.log(s);
}

function ispisNizaStranica(niz) {
  let s = "";
  for (let i = 0; i < niz.length; i++) {
    s += niz[i] + " "; // Ispis na stranici svaki element u istom redu
  }
  let div = document.getElementById("container");
  div.innerHTML += s;
}

ispisNizaKonzola(a);
ispisNizaKonzola(b);

ispisNizaStranica(a);
ispisNizaStranica(b);

// Funkcija 1: niz => {for petljom prođemo kroz sve elemente niza, i generisani string ispišemo u konzoli}
// Funkcija 2: niz => {for petljom prođemo kroz sve elemente niza, i generisani string ispise u div tag}

// A može i ovako, umesto da imamo dve različite funkcije sa istim kodom:
// Funkcija callback: (niz, nacin) => {for petljom prođemo kroz sve elemente niza i generisani string ispise na zadati način}
// Tek NAKON što generiđemo niz, mi pozivamo novu funkciju "način" i onda se ona izvršava, ona čeka - zato se naziva callback

// Sa callback funkcijama

function ispisKonzole(p) {
  console.log(p);
}

function ispisStranica(p) {
  let div = document.getElementById("container");
  div.innerHTML += p;
}

function ispisNiza(niz, cb) {
  let s = "";
  for (let i = 0; i < niz.length; i++) {
    s += niz[i] + " ";
  }
  cb(s);
}

ispisNiza(a, ispisKonzole);
ispisNiza(b, ispisKonzole);
ispisNiza(a, ispisStranica);
ispisNiza(b, ispisStranica);

// Anonimna funkcija kao callback funkcija
ispisNiza([1, 2, 3, 4, 5], function (p) {
  console.log(p);
});

// Arrow funckija kao callback funkcija
ispisNiza([9, 8, 7, 6], (p) => {
  console.log(p);
});

// forEach petlja

a.forEach(ispisKonzole);
// forEach petlja - prolazi kroz sve elemenete niza i za svaki element niza poziva callback funkciju i prosleđuje vrednost elementa kao argument
// a = [-6, 8, 11, 6, 0]
// ispisKonzole(-6);
// ispisKonzole(8);
// ispisKonzole(11);
// ispisKonzole(6);
// ispisKonzole(0);

b.forEach(ispisKonzole);
// let b = ["Pera", "Mika", "Laza"];
// ispisKonzole("Pera");
// ispisKonzole("Mika");
// ispisKonzole("Laza");

a.forEach(function (e) {
  console.log(e);
});

a.forEach((e) => {
  let div = document.getElementById("container");
  div.innerHTML += e + " ";
});

// Callback funkcija sa dva parametra, kada su nam potrebni elementi i indeksi niza
a.forEach((e, i) => {
  console.log(`Element ${e} u nizu ima indeks ${i}`);
});

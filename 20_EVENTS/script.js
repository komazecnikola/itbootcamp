// Events - Događaji

// 1. Dohvatiti element na koji želimo da postavimo osluškivač

let btnHello = document.getElementById("hello");

// 2. Postavimo osluškivač na element koji smo dohvatili
btnHello.addEventListener("click", () => {
  console.log("Hello!");
});

//

btnHello.addEventListener("dblclick", () => {
  console.log("Hello! Hello!");
});

// 1. Zadatak
let btnBroj = document.getElementById("broj");
let pIspisBroja = document.getElementById("ispisBroja");
let br = 1;
btnBroj.addEventListener("click", () => {
  console.log(`Broj je ${br}`);

  // 2. Zadatak
  pIspisBroja.innerHTML = `Broj je ${br}`;

  br++;
});

// Zadatak 3

let b = 0;

let btnMinus = document.getElementById("minus");
let btnPlus = document.getElementById("plus");
let sumaSpan = document.getElementById("suma");
console.log(sumaSpan);

btnPlus.addEventListener("click", () => {
  b = b + 1;
  sumaSpan.innerText = b;
});

btnMinus.addEventListener("click", () => {
  if (b == 0) {
    sumaSpan.innerText = 0;
  } else {
    b = b - 1;
    sumaSpan.innerText = b;
  }
});

// Zadatak 4

// Zadatak 5

let inputTekst = document.getElementById("imeUpis");
let btnIspis = document.getElementById("imeKlik");
let pIme = document.getElementById("imeIspis");

btnIspis.addEventListener("click", () => {
  let tekst = inputTekst.value;
  pIme.innerText = `Zdravo ${tekst}`;
});

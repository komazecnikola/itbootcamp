let a = 13;
let b = 5;

if (a > b) {
  console.log("a je veće od b");
} else {
  console.log("a nije veće b");
}

/* 
Za unetu zapreminu proizvoda, u paragrafu zelenom bojom ispisati “Pack up”, ukoliko je proizvod zapremine veće ili jednake 100ml. 
U suprotnom u paragrafu crvenom bojom ispisati “Throw away”.
*/

let zapremina = 70;

if (zapremina <= 100) {
  document.write("<p style='color: green;'>Pack up</p>");
} else {
  document.write("<p style='color: red;'>Throw away</p>");
}

// Zadatak 3

let datum = new Date();
let godinaDanas = datum.getFullYear();
console.log(godinaDanas);

let godinaRodjena = 2000;

let brojGodina = godinaDanas - godinaRodjena;
console.log(brojGodina);

// Ako osoba baš ove godine puni 18 godina, onda ispisujemo sličicu
if (brojGodina === 18) {
  document.write(
    "<img width='400' src='https://cdn.shopify.com/s/files/1/0512/8378/7930/files/Pastel-Purple-_-Gold-18th-Birthday-Cake.jpg?v=1685685046' />"
  );
}

// Ako još uvek nije punoletna, ispisujemo koliko joj je ostalo do punoletstva
if (brojGodina < 18) {
  let godineDoPunoletstva = 18 - brojGodina;
  document.write(
    `<p>Ostalo je još ${godineDoPunoletstva} godine do punoletstva.</p>`
  );
}

// Zadatak 2

let temperatura = 15;

if (temperatura >= 0) {
  let paragraf = document.getElementById("temperatura");
  paragraf.innerHTML = "Temperatura je u plusu";
  paragraf.style.color = "red";
} else {
  let paragraf = document.getElementById("temperatura");
  paragraf.innerHTML = "Temperatura je u minusu";
  paragraf.style.color = "blue";
}

// Zadatak 4

let sati = datum.getHours();

if (sati >= 12) {
  document.write("<p>Popodne!</p>");
} else {
  document.write("<p>Jutro!</p>");
}

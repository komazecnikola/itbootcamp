import Film from "./film.js";

let film1 = new Film("Čuvari formule", "Dragan Bjelogrlić", 2023);
let film2 = new Film("Klopka", "Srdan Golubović", 2007);
let film3 = new Film("Maratonci trče počasni krug", "Slobodan Šijan", 1982);

let filmovi = [film1, film2, film3];

film1.stampaj();
filmovi[2].stampaj();

console.log(`--- Ispis for petljom ---`);
for (let i = 0; i < filmovi.length; i++) {
  filmovi[i].stampaj();
}

console.log(`--- Ispis forEach petljom ---`);
filmovi.forEach((e) => {
  e.stampaj();
});

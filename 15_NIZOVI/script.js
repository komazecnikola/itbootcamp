let cars = ["Toyota", "BMW", "Volvo"];

console.log(cars);

let razno = [15, -3.5, "hello", false, [1, 2, 3]];

console.log(razno);

console.log(razno[0]);
console.log(razno[2]);

let niz = [];
niz[1] = "Pera";
niz[4] = "Ivana";

// niz[] = "Lena"; - ne mora redom da se dodeljuje indeksi, ali indeks mora biti dodeljen

niz[1] = "Zika";

console.log(niz);
console.log(niz[3]);
console.log(niz[4]);

// Umesto ovog može i ovako:
// let niz = [undefined, "Zika", undefined, undefined, "Ivana"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

for (let i = 0; i < razno.length; i++) {
  console.log(razno[i]);
}

let unutrasnjiNiz = razno[4];
for (let i = 0; i < unutrasnjiNiz.length; i++) {
  console.log(unutrasnjiNiz[i]);
}

for (let i = 0; i < razno[4].length; i++) {
  console.log(razno[4][i]);
}

let brojevi = [4, 3.5, 8, 10];
// Uvećati vrednosti svih elemenata za 10%

for (let i = 0; i < brojevi.length; i++) {
  brojevi[i] *= 1.1;
}

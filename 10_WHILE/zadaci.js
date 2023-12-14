// Zadatak 1 pod B
/*
console.log("Zadatak 1 pod B");
let m = 1;

while (m <= 20) {
  console.log(m);
  m++;
}

// Zadatak 1 pod A
console.log("Zadatak 1 pod A");

i = 1;

let poruka = "";

while (i <= 20) {
  poruka = poruka + i + " ";
  i++;
}

console.log(poruka);


#  |  i  |  poruka
-------------------------
0  |  1  |   ""
1  |  2  |   "1 "
2  |  3  |   "1 2 "
3  |  4  |   "1 2 3 "
...
20 | 21  |   "1 2 ... 20"



// Zadatak 2
console.log("Zadatak 2");

let a = 20;

while (a >= 1) {
  console.log(a);
  a--;
}

// Zadatak 2 drugi način

console.log("Zadatak 2 drugi način");

// a = 1;
// while (a >= 1) {
//   console.log(21 - a);
//   a++;
// }


i = 1 => 20 = 21 - i
i = 2 => 19 = 21 - i
i = 3 => 18 = 21 - i
...........
i = 19 => 2 = 21 - i
i = 20 => 1 = 21 - i



// Zadatak 3

console.log("Zadatak 3");

let y = 1;

while (y <= 10) {
  console.log(y * 2);
  y++;
}

// Zadatak 3 drugi način

console.log("Zadatak 3 drugi način");
let b = 1;

while (b <= 20) {
  if (b % 2 == 0) {
    console.log(b);
  }
  b++;
}

// Zadatak 3 treći način

console.log("Zadatak 3 treći način");
let c = 2;
while (c <= 20) {
  console.log(c);
  c = c + 2;
}

// Zadatak 4

// let x = 1;
// let n = 9;

// while (x <= n) {
//   if (x % 3 == 1) {
//     document.body.innerHTML += `<p class="plava">Paragraf broj ${x}</p>`;
//   } else if (x % 3 == 2) {
//     document.body.innerHTML += `<p class="crvena">Paragraf broj ${x}</p>`;
//   } else {
//     document.body.innerHTML += `<p class="zelena">Paragraf broj ${x}</p>`;
//   }

//   x++;
// }

let x = 1;
let n = 9;

while (x <= n) {
  let klasa; // let - uvek važi u bloku u kom je definisana
  if (x % 3 == 1) {
    klasa = "plava";
  } else if (x % 3 == 2) {
    klasa = "crvena";
  } else {
    klasa = "zelena";
  }
  document.body.innerHTML += `<p class="${klasa}">Paragraf broj ${x}</p>`;
  x++;
}

// Zadatak 5 - radimo sami

// Zadatak 6

let h = 1;
let suma = 0;

while (h <= 100) {
  suma = suma + h;
  h++;
}

console.log(`Suma brojeva od 1 do 100 je ${suma}`);

// Zadatak 7

let g = 1;
let p = 57;

suma = 0;

while (g <= p) {
  suma += g;
  g++;
}
console.log(`Suma brojeva od 1 do ${p} je ${suma}`);

*/
// Zadatak 8

// let n = 12;
// let m = 435;
// let i = n;
// let suma = 0;

// while (i <= m) {
//   suma = suma + i;
//   i++;
// }

// console.log(`Suma brojeva od 12 do ${m} je ${suma}`);

// Zadatak 9

// let n = 3;
// let m = 6;

// let proizvod = 1;

// i = n;

// while (i <= m) {
//   proizvod *= i;
//   i++;
// }

// console.log(`Proizvod brojeva od ${n} do ${m} je ${proizvod}`);

// Zadatak 10

// let n = 2;
// let m = 8;

// let sumaKP = 0;
// let sumaKN = 0;

// while (n <= m) {
//   if (n % 2 == 0) {
//     sumaKP = sumaKP + n ** 2;
//   } else {
//     sumaKN = sumaKN + n ** 3;
//   }
//   n++;
// }

// console.log(`Suma kvadrata parnih brojeva je ${sumaKP}`);
// console.log(`Suma kubova neparnih brojeva je ${sumaKN}`);

// Zadatak 11

// let n = 1;
// let k = 12;
// let z = 0; // broj delioca
// let i = n;

// while (i <= k) {
//   if (k % i == 0) {
//     z = z + 1;
//   }
//   i++;
// }

// console.log(`Broj ${k} je deljiv sa ${z} brojeva`);

// Zadatak 12

// Isto kao prethodni zadatak PA:
// if (z == 2) {
//   console.log("Broj je prost");
// } else {
//   console.log("Broj nije prost");
// }

// Zadatak 13

// Napisati program koji unetom broju N:
// a) Sabira sve cifre
// b) Određuje aritmetičku sredinu cifara
// c) Ispisuje cifre u obrnutom redosledu

let n = 34;
let i = 1;

let suma = 0;

// while (i <= n) {
//   suma = suma + i;
//   i++;
// }

console.log(`Zbir svih cifara je: ${suma}`);

console.log(`Aritmetička sredina cifara je ${suma / 2}`);

while (i <= n) {
  console.log(n - i);
  i++;
}

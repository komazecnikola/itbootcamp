// Zadatak 1
// Ispisati brojeve od 1 do 20

// Pomoću while petlje
let i = 1;
while (i <= 20) {
  console.log(i);
  i++;
}

// Pomoću for petlje
// Umesto n++ može se koristiti i n+=1 ili n = n + 1;
for (let n = 1; n <= 20; n++) {
  console.log(n);
}

// Zadatak 2
// Ispisati brojeve od 20 do 1

for (let k = 20; k >= 1; k--) {
  console.log(k);
}

// Zadatak 5

let l = 15;
let suma = 0;

for (let t = 1; t <= l; t++) {
  suma = suma + t;
}
console.log(suma);

// Zadatak 3
console.log("----- Zadatak 3");

for (let s = 1; s <= 20; s++) {
  if (s % 2 == 0) {
    console.log(s);
  }
}

// Zadatak 3 drugi način

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// Zadatak 4

console.log("----- Zadatak 4");

for (let r = 5; r <= 15; r++) {
  console.log(r * 2);
}

// Zadatak 6

console.log("----- Zadatak 6");

let m = 18;
suma = 0;

for (let n = 4; n <= m; n++) {
  suma = suma + n;
}

console.log(`Suma brojeva je ${suma}`);

// Zadatak 7

console.log("----- Zadatak 7");

m = 9;
let proizvod = 1;

for (let n = 3; n <= m; n++) {
  proizvod = proizvod * n;
}

console.log(`Proizvod brojeva je ${proizvod}`);

// Zadatak 8

console.log("----- Zadatak 8");

m = 17;
sumaKvadrataBrojeva = 0;

for (let n = 4; n <= m; n++) {
  sumaKvadrataBrojeva = sumaKvadrataBrojeva + n * n;
}

console.log(`Suma kvadrata brojeva je ${sumaKvadrataBrojeva}`);

// Zadatak 9

console.log("----- Zadatak 9");

for (let i = 1; i <= 3; i++) {
  document.write(`<img width="300" src='slike/${i}.jpeg' />`);
}

// Zadatak 12

console.log("----- Zadatak 12");

n = 3;
m = 6;

suma = 0;
let br = 0;

for (i = n; i <= m; i++) {
  suma = suma + i;
  br = br + 1;
}

let arsr = suma / br;

console.log(`Aritmetička sredina brojeva od ${n} do ${m}  je ${arsr}`);

/////////////////////////////////////////////////////////
// Zadatak 11
/////////////////////////////////////////////////////////

console.log("----- Zadatak 11");

br = 0;

for (let i = 5; i <= 150; i++) {
  if (i % 13 == 0) {
    br = br + 1;
  }
}

console.log(`Ima ${br} brojeva deljivih sa 13 u intervalu od 5 do 150`);

/////////////////////////////////////////////////////////
// Zadatak 10
/////////////////////////////////////////////////////////

console.log("----- Zadatak 10");

proizvod = 1;

for (let i = 20; i <= 100; i++) {
  if (i % 11 == 0) {
    proizvod = proizvod * i;
  }
}

console.log(
  `Proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100 je ${proizvod}`
);

// Zadatak 16

console.log(`----- Zadatak 16`);

n = 3;
m = 9;

suma = 0;

let a = 4;

for (let i = n; i <= m; i++) {
  if (i % a != 0) {
    suma = suma + i;
  }
}

console.log(
  `Suma brojeva od ${n} do ${m} koji nisu deljivi sa ${4} je ${suma}`
);

// i = 3; suma = 3;
// i = 4; suma = 3;
// i = 5; suma = 8;
// i = 6; suma = 14;
// i = 7; suma = 21;
// i = 8; suma = 21;
// i = 9; suma = 30;

// Zadatak 15

console.log("----- Zadatak 15");

n = 2;
m = 78;

br = 0;
suma = 0;

for (i = n; i <= m; i++) {
  if (i % 10 == 4) {
    br = br + 1;
    suma = suma + i;
  }
}

console.log(
  `Ima ${br} brojeva od ${n} do ${m} kojima je poslednja cifra 4 i suma svih njih je ${suma}`
);

// Zadatak 13

console.log("----- Zadatak 13");

n = -17;
m = 24;

let pozBr = 0;
let negBr = 0;

for (i = n; i <= m; i++) {
  if (i < 0) {
    negBr = negBr + 1;
  } else if (i > 0) {
    pozBr = pozBr + 1;
  } else {
    console.log("Broj je nula");
  }
}

console.log(
  `Ima ukupno ${negBr} negativnih brojeva od ${n} do ${m}, dok pozitivnih brojeva ima ${pozBr}`
);

// Zadatak 14

console.log("----- Zadatak 14");

n = 5;
m = 50;

br = 0;

for (i = n; i <= m; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    br = br + 1;
  }
}

console.log(`Ima ukupno ${br} brojeva koji su deljivi sa 3 ili 5`);

// Zadatak 17

console.log("----- Zadatak 17");

n = 34;
m = 52;

a = 7;

proizvod = 1;

for (i = n; i <= m; i++) {
  if (i % a == 0) {
    proizvod *= i;
  }
}

console.log(
  `Proizvod brojeva od ${n} do ${m} koji su deljivi sa brojem ${a} je ${proizvod}`
);

// Zadatak 18

console.log("----- Zadatak 18");

let k = 12;
br = 0;

for (let i = 1; i <= k; i++) {
  if (k % i == 0) {
    br = br + 1;
  }
}

console.log(`Uneti broj ${k} je deljiv sa ${br} brojeva`);

// Drugi način

k = 12;

if (k == 1) {
  br = 1;
} else {
  br = 2;
  for (i = 2; i <= k / 2; i++) {
    if (k % i == 0) {
      br++;
    }
  }
}

console.log(`Uneti broj ${k} je deljiv sa ${br} brojeva`);

// Zadatak 19
/*
Odrediti da li je dati prirodan broj n prost.
*/

console.log("----- Zadatak 19");

n = 1;

br = 0;

for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    br++;
  }
}

console.log(br);

if (br > 2) {
  console.log(`Broj ${n} je složen broj`);
} else {
  console.log(`Broj ${n} je prost broj`);
}

// 1 nije prost broj

// Drugi način

let prost = true;

k = 13;

for (i = 2; i <= Math.sqrt(k); i++) {
  if (k % i == 0) {
    prost = false;
    break;
  }
}

if (prost) {
  console.log(`Broj ${k} je prost.`);
} else {
  console.log(`Broj ${k} je složen.`);
}

// Može i Math.sqrt(k) ili k/2 za uslov;

// Zadatak 20

let divTabela = document.getElementById("tabela");
let tabela = `<table>`;

for (i = 1; i <= 6; i++) {
  let obojen = "belo";
  if (i % 2 == 0) {
    obojen = "roze";
  }

  tabela += `<tr class="${obojen}">
    <td>Tekst</td>
    <td>Tekst</td>
    </tr>`;
}
tabela += `</table>`;

divTabela.innerHTML = tabela;

console.log("Funkcije");

/////////////////////////////////////////////////////
// Funkcija za ispis u konzoli
/////////////////////////////////////////////////////

function zdravo() {
  console.log("Hello world!");
}

zdravo(); // Poziv funkcije

/////////////////////////////////////////////////////
// Funkcija za ispis prosleđenog teksta (prosleđuje se jedan parametar)
/////////////////////////////////////////////////////
function ispisiTekst(tekst) {
  console.log(tekst);
}
ispisiTekst("Ovo je neki tekst"); // Poziv kada prosleđujemo neku vrednost
ispisiTekst("Ovo je neki drugi tekst");

let t = "Moj tekst";

ispisiTekst(t);

/////////////////////////////////////////////////////
// Funkcija kojoj se prosleđuju više parametra
/////////////////////////////////////////////////////

function imePrezime(ime, prezime, godine) {
  console.log(
    `Ulogovana osoba je: ${ime} ${prezime}. Osoba ima ${godine} godina.`
  );
}

imePrezime("Nikola", "Komazec", 34);

let imeOsobe = "Stefan";
let prezimeOsobe = "Stanimirović";
let godOsobe = 45;

imePrezime(imeOsobe, prezimeOsobe, godOsobe);

/////////////////////////////////////////////////////
// Funkcija kojoj se prosleđuju više parametra
/////////////////////////////////////////////////////

function zbir(br1, br2) {
  let rezultat = br1 + br2;
  console.log(`${br1} + ${br2} = ${rezultat}`);
}

zbir(16, 21);

/////////////////////////////////////////////////////
// Funkcija koja vraća vrednost
/////////////////////////////////////////////////////

function razlika(umanjenik, umanjilac) {
  let razlikaRezultat = umanjenik - umanjilac;
  return razlikaRezultat; // vraća rezultat unutar koda
}

console.log(`Razlika je ${razlika(60, 45)}`);

let r = razlika(100, 4);

console.log(r);

let r1 = razlika(6, 3); // 3
let r2 = razlika(17, 7); // 10

let r3 = razlika(r1, r2); // -7

let r4 = razlika(razlika(40, 60), razlika(10, 4)); // razlika(-20, 6); = -26

console.log(`Promenljiva r4 iznosi ${r4}`);

// Zadatak 3

function neparan(n) {
  if (n % 2 == 0) {
    return "Broj je paran";
  } else {
    return "Broj je neparan";
  }
}

let ran = neparan(17);
console.log(ran);

// Zadatak 4 pod A

function maks2(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return "Brojevi su isti";
  }
}

let rezultat2 = maks2(117, 38);
console.log(rezultat2);

// Zadatak 4 pod B

function maks4(x, y, z, e) {
  if (x > y && x > z && x > e) {
    return x;
  } else if (y > x && y > z && y > e) {
    return y;
  } else if (z > x && z > y && z > e) {
    return z;
  } else if (e > x && e > y && e > z) {
    return e;
  } else {
    return "Neki brojevi su isti";
  }
}

let rezultat4 = maks4(4, 7, 19, 2);
console.log(rezultat4);

/////////////////////////////////////////////////
// Zadatak 5: Napisati funkciju koja prikazuje sliku za prosleđenu putanju do slike
////////////////////////////////////////////////

function prikaziSliku(adresa) {
  document.write(`<img width="300" src="${adresa}">`);
}

prikaziSliku(`slike/1.jpeg`);

/////////////////////////////////////////////////
// Zadatak 5 - kompleksnije
// Napisati funkciju koja prikazuje sliku za prosleđenu putanju do slike i prosleđen id elementa u kome ta slika treba da se prikaže.
////////////////////////////////////////////////

function prikaziSlikuUElementu(putanja, id) {
  let element = document.getElementById(id);
  element.innerHTML = `<img width="400" src="${putanja}">`;
}

prikaziSlikuUElementu(`slike/1.jpeg`, "hello");

// Zadatak 6

function bojaParagrafa(boja) {
  document.write(`<p style="color: ${boja};"> Lorem ipsum dolr sit amet.</p>`);
}

bojaParagrafa("rgb(32, 78, 135)");

// Zadatak 7

function sedmiDan(n) {
  if (n % 7 == 0) {
    console.log("Nedelja");
  } else if (n % 7 == 1) {
    console.log("Ponedeljak");
  } else if (n % 7 == 2) {
    console.log("Utorak");
  } else if (n % 7 == 3) {
    console.log("Sreda");
  } else if (n % 7 == 4) {
    console.log("Četvrtak");
  } else if (n % 7 == 5) {
    console.log("Petak");
  } else if (n % 7 == 6) {
    console.log("Subota");
  }
}

sedmiDan(8);

// Zadatak 8

function deljivSaTri(n, m) {
  let brojac = 0;
  for (i = n; i <= m; i++) {
    if (i % 3 == 0) {
      console.log(i);
      brojac++;
    }
  }
  console.log(
    `U intervalu od ${n} do ${m} ima ${brojac} brojeva deljivih sa tri.`
  );
}

deljivSaTri(10, 30);

// Zadatak 9

function sumiraj(n, m) {
  let suma = 0;
  for (let i = n; i <= m; i++) {
    suma += i;
  }
  return suma;
}

console.log(sumiraj(10, 12));

// Zadatak 10

function mnozi(n, m) {
  let proizvod = 1;
  for (let i = n; i <= m; i++) {
    proizvod *= i;
  }
  return proizvod;
}

console.log(mnozi(2, 4));

// Zadatak 11

function aritmeticka(n, m) {
  let suma = 0;
  let brojeva = 0;
  for (let i = n; i <= m; i++) {
    suma += i;
    brojeva++;
  }
  return suma / brojeva;
}

console.log(aritmeticka(1, 5));

// Zadatak 12

function aritmetickaTri(n, m) {
  let suma = 0; // ovde je mogla i da se pozove funkcija sumiraj
  let brojeva = 0;
  for (let i = n; i <= m; i++) {
    if (i % 3 == 0) {
      suma += i;
      brojeva++;
    }
  }
  return suma / brojeva;
}

console.log(aritmetickaTri(1, 9));

// Zadatak 13

function velicinaFonta(n) {
  document.write(
    `<p style="font-size: ${n}px">Lorem ipsum dolor sit amet.</p>`
  );
}

velicinaFonta(54);

// Zadatak 14

function recenica5() {
  for (let i = 1; i <= 5; i++) {
    document.write(
      `<p style="color: blue; font-size: ${i}rem">Lorem ipsum dolor sit amet.</p>`
    );
  }
}

recenica5();

// Zadatak 15 pod A

function poslednjaPlata(n, a, d) {
  let plata = a;
  let povisica = 0;
  for (let i = 1; i <= n; i++) {
    povisica = povisica + d;
  }

  return plata + povisica;
}

console.log(poslednjaPlata(10, 1000, 50));

// Zadatak 15 pod B

function ukupnaPlata(n, a, d) {
  let plata = 0;
  let povisica = 0;
  for (let i = 1; i <= n; i++) {
    povisica = povisica + d;
    plata = plata + a + povisica;
  }
  return plata;
}

console.log(ukupnaPlata(10, 1000, 50));

// Zadatak 16

function igreBezGranica(t, p, n) {
  if (t < p || t > p + n) {
    console.log(`Čekanje je 0s`);
  } else {
    let cekanje = p + n - t;
    console.log(`Takmičar je potrebno da sačeka ${cekanje}s.`);
  }
}

igreBezGranica(15, 20, 25);
igreBezGranica(15, 10, 12);

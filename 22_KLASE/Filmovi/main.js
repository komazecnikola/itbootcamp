import Film from "./film.js";

let film1 = new Film(
  "Čuvari formule",
  "Dragan Bjelogrlić",
  2023,
  [9, 10, 8, 8, 6, 10, 10, 9]
);
let film2 = new Film(
  "Klopka",
  "Srdan Golubović",
  2007,
  [9, 9, 9, 8, 7, 10, 10, 8, 6]
);
let film3 = new Film(
  "Maratonci trče počasni krug",
  "Slobodan Šijan",
  1982,
  [8, 9.1, -8, 18, 9]
);

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

console.log(film3);

// getere ne pozivamo sa (), ali zato ostale metode idu sa ()
console.log(`Prosečna ocena filma ${film1.naslov} je: ${film1.prosecna()}`);

// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku
// 1801 - 1900 - 19. vek
// 1901 - 2000 - 20. vek
// 2001 - ... - 21. vek
let vekFilmova = (filmovi, vek) => {
  filmovi.forEach((f) => {
    // 1801 / 100 = 18.01 -> Math.ceil zaokružuje ovo na 19
    // 1850 / 100 = 18.50 -> Math.ceil zaokružuje ovo na 19
    // 1900 / 100 = 19 -> Math.ceil zaokružuje ovo na 19
    let vekFilma = Math.ceil(f.godinaIzdanja / 100);

    if (vekFilma == vek) {
      f.stampaj();
    }
  });
};

vekFilmova(filmovi, 20);

// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.

let prosecnaOcena = (niz) => {
  let suma = 0;
  let br = 0;
  niz.forEach((f) => {
    f.ocene.forEach((o) => {
      suma += o;
      //   br++;
    });
    br += f.ocene.length; // može i ovako umesto br++ kao iznad
  });
  return suma / br;
};

console.log(`Prosečna ocena svih filmova je: ${prosecnaOcena(filmovi)}`);

// Napisati funkciju najcescaOcena kojoj se prosleđuje niz filmova, a ona vraća ocenu koju su filmovi najčešće dobijali (u opticaju su ocene 5, 6, 7, 8, 9 i 10).

let najcescaOcena = (niz) => {
  let br5 = 0;
  let br6 = 0;
  let br7 = 0;
  let br8 = 0;
  let br9 = 0;
  let br10 = 0;
  niz.forEach((f) => {
    f.ocene.forEach((e) => {
      if (e == 5) {
        br5++;
      } else if (e == 6) {
        br6++;
      } else if (e == 7) {
        br7++;
      } else if (e == 8) {
        br8++;
      } else if (e == 9) {
        br9++;
      } else {
        br10++;
      }
    });
  });

  let brojevi = [br5, br6, br7, br8, br9, br10];
  let max = brojevi[0];
  let index = 0;
  brojevi.forEach((e, i) => {
    if (max < e) {
      max = e;
      index = i;
    }
  });

  console.log(index + 5);
};

najcescaOcena(filmovi);

// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.

let iznadOcene = (ocena, niz) => {
  let iznadOceneFilm = [];
  niz.forEach((f) => {
    if (f.prosecna() > ocena) {
      iznadOceneFilm.push(f);
    }
  });
  return iznadOceneFilm;
};

console.log(iznadOcene(8, filmovi));

// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu.

// let iznadOceneNoviji = (niz, nekaOcena) => {
//   let iznadOCeneNiz = iznadOcene(niz, nekaOcena);
//   let mladjiFilm = iznadOCeneNiz[0];
//   niz.forEach((f) => {
//     if (f.godinaIzdanja > mladjiFilm.godinaIzdanja) {
//       mladjiFilm = f;
//     }
//   });
//   return mladjiFilm;
// };
// let ocenaZaProsledjivanje = 8;
// console.log(iznadOceneNoviji(filmovi, ocenaZaProsledjivanje));

// Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film (film koji ima najveću prosečnu ocenu).

let najboljeOcenjeni = (niz) => {
  let najboljeOcenjeni = niz[0]; // objekat film
  let najboljaOcena = najboljeOcenjeni.prosecna(); // vrednost prosecne ocene
  niz.forEach((f) => {
    if (f.prosecna() > najboljaOcena) {
      najboljaOcena = f.prosecna();
      najboljeOcenjeni = f;
    }
  });
  return najboljeOcenjeni;
};

console.log(najboljeOcenjeni(filmovi));

// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.

let najmanjaOcenaNajboljeg = (niz) => {
  let najboljiFilm = najboljeOcenjeni(niz);
  let najmanjaOcena = najboljiFilm.ocene[0];
  najboljiFilm.ocene.forEach((o) => {
    if (o < najmanjaOcena) {
      najmanjaOcena = o;
    }
  });
  return najmanjaOcena;
};

console.log(najmanjaOcenaNajboljeg(filmovi));

// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.

let osrednjiFilm = (niz) => {
  let prosecnaOcenaSvihFilmova = prosecnaOcena(niz);
  let min = 10;
  let index = null;
  niz.forEach((e, i) => {
    console.log(e.prosecna());
    if (Math.abs(e.prosecna() - prosecnaOcenaSvihFilmova) < min) {
      min = Math.abs(e.prosecna() - prosecnaOcenaSvihFilmova);
      index = i;
    }
  });
  console.log(min, index);
  console.log(niz[index]);
};

console.log("--- Zadatak 2. sa 23. slajda ---");
osrednjiFilm(filmovi);

// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.

// kompleksniji način - teži po memoriju
let najmanjaOcena = (niz) => {
  let sveOcene = [];
  niz.forEach((e) => {
    e.ocene.forEach((o) => {
      sveOcene.push(o);
    });
  });
  console.log(sveOcene);

  let minOcena = 11;
  sveOcene.forEach((c) => {
    if (minOcena > c) {
      minOcena = c;
    }
  });
  console.log(minOcena);
};

console.log("--- Zadatak 4. sa 23. slajda ---");
najmanjaOcena(filmovi);

// 2. način - ne zahteva dodatnu memoriju
let najmanjaOcena2 = (niz) => {
  let minOcena = niz[0].ocene[0];
  niz.forEach((e) => {
    e.ocene.forEach((o) => {
      if (o < minOcena) {
        minOcena = o;
      }
    });
  });
  console.log(minOcena);
};

najmanjaOcena2(filmovi);

// Retko da postoji objekat bez klasa, u drugim jezicima krećemo od klasa odmah, a u JS možemo da pravimo i objekte samostalno bez klasa

class Film {
  constructor(n, r, g) {
    this._naslov = n; // ovde se mora izbaciti _ posle jer tako dolazi vrednost iz setera onda, a ne ubacuje se direktno u polje
    this._reziser = r;
    this._godinaIzdanja = g; // ovo su sada seteri koji upisuju u polje
  }

  // Seteri - set metode - postavljaju vrednost polja
  set naslov(n) {
    this._naslov = n; // a ovo je property koji će biti upisan
    // Znači ovo će kasnije biti polje sa _ (donjom crtom) ali mora da prođe kroz seter
  }

  set reziser(r) {
    this._reziser = r;
  }

  set godinaIzdanja(g) {
    if (g < 1800) {
      this._godinaIzdanja = 1800;
    } else {
      this._godinaIzdanja = g;
    }
  }

  // geteri - get metode - vraćaju vrednost polja
  get naslov() {
    return this._naslov;
  }

  get reziser() {
    return this._reziser;
  }

  get godinaIzdanja() {
    return this._godinaIzdanja;
  }

  stampaj() {
    console.log(`Naslov: ${this._naslov}`);
  }
}

export default Film;

// let film1 = new Film("Čuvari formule", "Dragan Bjelogrlić", 2023); // ovde se poziva konstruktor
// let film2 = new Film("Klopka", "Srdan Golubović", 2007);
// console.log(film1);
// console.log(film2);

// film1.stampaj();

// film1.godinaIzdanja = -2023; // ovo poziva samo seter, ne i konstruktor

// console.log(film1);
// console.log(`Film ${film2.naslov}, Godina izdanja ${film2.godinaIzdanja}`);

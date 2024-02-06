class User {
  constructor(n, s, a) {
    this.name = n;
    this.surname = s;
    this.age = a;
  }
}

let branko = new User("Branko", "Milivojevic", 27);
branko.grad = "Paracin";
/*
branko.potpis = function () {
  console.log(this.name, this.surname);
}; // dodavanje metode

branko.potpis(); // poziv metode
*/
let ivan = new User("Ivan", "Stanimirovic", 37);
ivan.poreklo = "Leskovac";

User.prototype.bojaKose = "crna";

db.collection("users")
  .doc("user4")
  .set(Object.assign({}, branko))
  .then(() => {
    console.log("Uspesno dodat user");
  })
  .catch((e) => {
    console.log(`Greška ${e}`);
  });

// JS poziva set metodu kojoj se proselđuje JS OBJEKAT
// Na osnovu tog objekta se u bazi kreira novi DOKUMENT

db.collection("users")
  .doc("istanimirovic")
  .set(Object.assign({}, ivan))
  .then(() => {
    console.log("Uspesno dodat user");
  })
  .catch((e) => {
    console.log(`Greška ${e}`);
  });

/* 
  JS OBJEKAT:
  1) Može za poseban objekat da se dodaju polja i metode (kao i za dokumenta u bazi)
  2) Može klasi kojoj pripada objekat da se dodaju polja i metode
  3) Može da se nasleđuju klase {User  -->  UserCreditCard}

  Primer: 
  HTML: Formu gde se unose korisnici
  Za sve korisnike pamtimo: ime, prezime, godine, pretplata
  Ako korisnik odabere karticu kao način pretplate, za te korisnike pamtiti i broj kartice
  */

// Da ne bismo grešili najbolje je napraviti ovako nešto:
/* 
const customers = "customers";
*/

/* 
ako se napiše db.colletction(collection).doc() onda će napraviti novi prazan objekat svaki put kada se refrešuje stranica što može biti problem
*/

console.log(db);

// Kolekcije = Tabele
// Dokument = Row
// Fields = Columns
let users = db.collection("users");
console.log(users);

let d1 = users.doc("nkomazec");
console.log(d1);

let d2 = db.doc("users/nkomazec");
console.log(d2);

/*
CRUD - CREATE, READ, UPDATE, DELETE

Za pristup dokumentu:
let doc = db.collection("...").doc("...");

Kod dokumenta imamo sledeće metode: 
- doc.set(...)   ->   Create
- doc.get(...)   ->   Read
- doc.update(...)   ->   Update
- doc.delete(...)   ->   Delete

Sve ove 4 metode kao rezultat vraćaju PROMISE
Nakon ovih poziva lančaju se .then() i .catch()
*/

/* 1. Create (set) */

let cust1 = {
  name: "Mika",
  age: 38,
  addresses: ["Ulica 2, Loznica", "Ulica 21, Valjevo"],
  salary: 120400.6,
};
// JS Objekat - na osnovu njega kreiramo dokument u bazi

// ako pogrešimo ovde ime kolekcije napraviće novu s tim imenom
db.collection("customers")
  .doc("document004")
  .set(cust1)
  .then(() => {
    document.body.innerHTML += "Korisnik dodat u bazu";
  })
  .catch((e) => {
    document.body.innerHTML += `Greška: ${e}`;
  });

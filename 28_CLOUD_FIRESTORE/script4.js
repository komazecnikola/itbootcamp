// ovde uzimamo dokumenta iz kolekcije po nekom filteru

// Dohvatanje dokumenata iz kolekcije po redosledu polja
// (dokument mora da sadrži to polje da bi bio dohvaćen)
// (ako ima više od jednog polja neophodno je prvo kreirati indeks)
/*
db.collection("users")
  .orderBy("name", "desc") // ako imamo više osoba sa istim imenom onda ih sortiraj po broju godina od manje ka više
  .orderBy("age")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
*/

// Dohvatanje određenog broja dokumenata (limitiranje)

/*
db.collection("users")
  .orderBy("name", "desc")
  .orderBy("age")
  .limit(2) // limitira da prikaže samo prva dva rezultate iz upita
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
*/
// Dohvatanje dokumenata koji zadovoljavaju određene uslove (filtriranje)

// ZADACI

// Dohvati sve klijente koji imaju platu veću ili = 500
/*
db.collection("customers")
  .where("salary", ">=", 150000)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });

*/
// Dohvati sve klijente koji imaju platu između 300 i 800
/*
db.collection("customers")
  .where("salary", ">=", 121000)
  .where("salary", "<=", 160000)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
*/

// Dohvati sve klijente koji imaju platu manju od 900 i imaju 30 goina

/*
db.collection("customers")
  .where("salary", "<=", 160000) // mora da se kreira indeks ako ima više različitih polja tipa salary i age
  .where("age", "==", 32)
  .orderBy("salary")
  .orderBy("name")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
*/
// Dohvati sve klijente koji imaju preko 25 godina sortirane po imenu
/*
db.collection("customers")
  .where("age", ">", 25)
  .orderBy("age")
  .orderBy("name")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
*/

// Dohvati sve klijente koji imaju adresu u Nišu

/*
db.collection("customers")
  .where("addresses", "array-contains", "Kozaracka 34, Nis")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
*/
// Dohvatiti sve klijente koji imaju adresu u Nišu ili Beograd

/*
db.collection("customers")
  .where("addresses", "array-contains-any", [
    "Kozaracka 34, Nis",
    "Gospodara Vucica 11, Beograd",
  ])
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
*/

// Dohvati sve klijente koji imaju 22, 25, ili 28 godina

/*
db.collection("customers")
  .where("age", "in", [23, 25, 28])
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
*/

// Zadatak tasks

/*
db.collection("tasks")
  .orderBy("title")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
*/
// Procitati sve zadatke koji su prioritetni
/*
db.collection("tasks")
  .where("priority", "==", true)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log("Prioritetni zadaci");
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
*/
// Procitati sve zadatke koji treba da se izvrše u tekućoj godini

let datum = new Date();
let godina = datum.getFullYear();
let datum1 = new Date(godina, 0, 1); // 1. januar tekuće godine
let datum2 = new Date(godina + 1, 0, 1); // 1. januar sledeće godine
let ts1 = firebase.firestore.Timestamp.fromDate(datum1);
console.log(ts1);
let ts2 = firebase.firestore.Timestamp.fromDate(datum2);
// tek kada napravimo timestamps onda možemo da ih upoređujemo
/*
db.collection("tasks")
  .where("due_date", ">=", ts1)
  .where("due_date", "<", ts2)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log("Tekuća godina");
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });

// Pročitati sve zadatke koji su završeni

db.collection("tasks")
  .where("due_date", "<=", datum)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log("Završeni");
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });

// Pročitati sve zadatke koji tek treba da počnu

db.collection("tasks")
  .where("start_date", ">=", datum)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log("Tek da počnu");
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
*/
// ZADACI Movies

// Pročitati sve filmovi koje:

// Je režirao Tarantino

db.collection("movies")
  .where("director.surname", "==", "Tarantino")
  .where("director.name", "==", "Quentin")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log("Režiser");
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });

// Čija je ocena između 5 i 10

db.collection("movies")
  .where("rating", ">", 5)
  .where("rating", "<", 10)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log("Rejting");
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });

// Kojima je žanr komedija, tragedija ili drama

db.collection("movies")
  .where("genres", "array-contains-any", ["Comedy", "Tragedy", "Drama"])
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log("Žanr");
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });

// Koji su izašli u 21. veku

db.collection("movies")
  .where("release_year", ">=", 2001)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log("21. vek");
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });

// Najbolje rangirani

db.collection("movies")
  .orderBy("rating", "desc")
  .limit(1)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log("Najbolje rangirani film:");
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });

// Najslabije rangirana drama

db.collection("movies")
  .where("genres", "array-contains", ["Drama"])
  .orderBy("rating", "asc")
  .limit(1)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log("Najbolje rangirani film:");
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });

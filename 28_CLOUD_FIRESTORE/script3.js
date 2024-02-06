let datum1 = new Date("2024-01-26 17:00:00");
let datum2 = new Date("2024-01-26 21:00:00");

// preko dokumenta metoda je set(), a preko kolekcije metoda je add() za dodavanje

// Sa add() ne možemo da dodamo ID na dokument već ćemo morati da koristimo auto generisani ID

// db.collection("tasks")
//   .add({
//     title: "cas ITBootcamp",
//     start_date: firebase.firestore.Timestamp.fromDate(datum1),
//     due_date: firebase.firestore.Timestamp.fromDate(datum2),
//     priority: false,
//     description: "Cas iz baza podataka",
//   })
//   .then(() => {
//     console.log("Uspesno dodat task");
//   })
//   .catch((e) => {
//     console.log(`Greška: ${e}`);
//   });

// doc("...").set() -> kompletno menja ("gazi") sadržaj dokumenta
// doc("...").update() -> menja sadržaj postojećih polja

// db.collection("users")
//   .doc("user4")
//   .update({
//     age: 28,
//   })
//   .then(() => {
//     console.log("Uspesno promenjene godine");
//   })
//   .catch((e) => {
//     console.log(`Greška: ${e}`);
//   });

db.collection("movies")
  .doc("film1")
  .set({
    name: "Citizen Kane",
    director: {
      name: "Orson",
      surname: "Welles",
    },
    release_year: 1941,
    genres: ["Drama", "Mystery", "Noir"],
    rating: 8.3,
  })
  .then(() => {
    console.log("Nova kolekcija movies napravljena i dodat film1 kao dokument");
    return db.collection("movies").doc("film1").update({
      rating: 8.4,
    });
  })
  .then(() => {
    console.log("Uspešno izmenjen film");
  })
  .catch((e) => {
    console.log(`Greška: ${e}`);
  });

db.collection("movies")
  .doc("film2")
  .set({
    name: "The Shawshank Redemption",
    director: {
      name: "Frank",
      surname: "Darabont",
    },
    release_year: 1994,
    genres: ["Prison", "Drama", "Classic"],
    rating: 9.3,
  })
  .then(() => {
    console.log("Dodat film broj 2 u bazu");
  })
  .catch((e) => {
    console.log(`Greška: ${e}`);
  });

db.collection("movies")
  .doc("film3")
  .set({
    name: "Batman Begins",
    director: {
      name: "Christopher",
      surname: "Nolan",
    },
    release_year: 2005,
    genres: ["Action", "Superhero", "Drama"],
    rating: 8.2,
  })
  .then(() => {
    console.log("Dodat film broj 3 u bazu");
  })
  .catch((e) => {
    console.log(`Greška: ${e}`);
  });

db.collection("movies").doc("film3").set(
  {
    name: "The Dark Knight",
  },
  { merge: true }
);

db.collection("movies")
  .doc("film2")
  .update({
    genres: firebase.firestore.FieldValue.arrayUnion("Family"),
  })
  .then(() => {
    console.log("izmena update");
  })
  .catch((e) => {
    console.log(`Greška: ${e}`);
  });

// Dohvatanje dokumenta

db.collection("movies")
  .doc("film1")
  .get()
  .then((doc) => {
    if (doc.exists) {
      let data = doc.data();
      console.log("Uspešno dohvaćen dokument: " + doc.id);
      console.log(data);
    } else {
      console.log("Ne postoji ovaj dokument");
    }
  })
  .catch((e) => {
    console.log(`Greška: ${e}`);
  });

// Dohvatanje svih dokumenata iz kolekcije

db.collection("customers")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      let data = doc.data();
      console.log(doc.id, " => ", data);
    });
  })
  .catch((e) => {
    console.log(`Greška: ${e}`);
  });

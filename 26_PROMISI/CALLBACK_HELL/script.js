let getJSON = (resource, callback) => {
  // 1. Kreiranje XML objekta
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", function () {
    if (request.readyState == 4 && request.status == 200) {
      // Sve OK
      let data = JSON.parse(request.responseText);
      callback(data, undefined);
    } else if (request.readyState === 4) {
      // Nešto nije OK
      callback(undefined, "Desila se greška");
    }
  });

  // 2. Otvaramo kreirani zahtev
  request.open("GET", resource);

  // 3. Slanje zahteva
  request.send();
};

/*
getJSON("../JSON/prvi.json", (data, err) => {
  if (data) {
    console.log(data); // Sve prošlo OK i vraća podatke
    // Ako je sve bilo ok sa prvim fajlom, onda uzmi drugi fajl: drugi.json
  } else {
    console.log(err); // Ispisuje grešku
  }
});

getJSON("../JSON/drugi.json", (data, err) => {
  if (data) {
    console.log(data);
  } else {
    console.log(err);
  }
}); */

/////////////////////////////////////////////////////////////
// CALLBACK HELL
/////////////////////////////////////////////////////////////
// Poenta je da želimo da pozivamo podatke redom, prvo iz prvog json, pa drugog, pa trećeg, itd. Šta bi se desilo da to moramo da uradimo ovako:

getJSON("../JSON/prvi.json", (data, err) => {
  if (data) {
    console.log(data); // Sve prošlo OK i vraća podatke
    // Ako je sve bilo ok sa prvim fajlom, onda uzmi drugi fajl: drugi.json
    getJSON("../JSON/drugi.json", (data, err) => {
      if (data) {
        console.log(data);
        // Ako je sve bilo ok sa drugom fajlom, onda izmi treći fajl: treci.json
        getJSON("../JSON/treci.json", (data, err) => {
          if (data) {
            console.log(data);
          } else {
            console.log(err); // Ispisuje grešku iz treci.json
          }
        });
      } else {
        console.log(err); // Ispisuje grešku iz drugi.json
      }
    });
  } else {
    console.log(err); // Ispisuje grešku iz prvi.json
  }
});

// Na ovaj način iznad osiguravamo da će se prvo izvršiti pozivanje prvog json, pa zatim drugog, pa zatim trećeg...itd. Da će ići nekim redom kojem mi želimo. ALI šta ako ima milion ovakvih poziva? Neće biti pregledno...

// Mora se smisliti nešto drugo

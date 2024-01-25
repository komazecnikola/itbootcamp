const form = document.querySelector("#order");
const capacity = document.querySelector("#capacity");
const div = document.querySelector("#result");

/* 
1) Odrediti artikle koji više nisu na stanju
2) Odrediti ukupnu težinu svih tih artikala
3) Ako je ta težina manja od kapaciteta kamiona onda: 
   3.1) Odrediti i ispisati ukupnu cenu svih tih artikala
   3.2) Inače, ispisati poruku da kamion nema traženi kapacitet
   3.3) 
*/

function getItems(resources, resolve, reject) {
  let request = new XMLHttpRequest();

  request.addEventListener("readystatechange", function () {
    if (request.readyState === 4 && request.status === 200) {
      let data = JSON.parse(request.responseText);
      resolve(data); // Ova funkcija radi nešto sa podacima koji su stigli sa servera
    } else if (request.readyState === 4) {
      reject("Desila se greška");
    }
  });

  request.open("GET", resources);
  request.send();
}

function submitFormVarijanta1(event) {
  event.preventDefault();

  // 1) Odrediti artikle koji više nisu na stanju
  let nizArtikala = [];

  getItems(
    "json/stock.json",
    (data) => {
      data.forEach((artikal) => {
        if (artikal.stock == 0) {
          nizArtikala.push(artikal.id);
        }
      });

      // 2) Odrediti ukupnu težinu svih tih artikala
      getItems(
        "json/weights.json",
        (data) => {
          let totalWeight = 0;
          data.forEach((artikal) => {
            if (nizArtikala.includes(artikal.id)) {
              totalWeight += artikal.weight;
            }
          });
          // 3) Ako je ta težina manja od kapaciteta kamiona onda:
          if (totalWeight <= Number(capacity.value)) {
            // 3.1 Odrediti i ispisati ukupnu cenu svih tih artikala
            getItems(
              "json/prices.json",
              (data) => {
                let totalPrice = 0;
                data.forEach((artikal) => {
                  if (nizArtikala.includes(artikal.id)) {
                    totalPrice += artikal.price;
                  }
                });
                div.innerHTML = `Total price of articles: ${totalPrice}`;
              },
              (msg) => {
                div.innerHTML = msg;
              }
            );
          } else {
            // 3.2 Inače, ispisati poruku da kamion nema traženi kapacitet
            div.innerHTML = "Not enough capacity in truck!";
          }
        },
        (msg) => {
          div.innerHTML = msg;
        }
      );
    },
    (msg) => {
      div.innerHTML = msg;
    }
  );
}

/* Funkcija submitFormVarijanta1 je tačna i radi, ali ima problem što nije pregledna i teška je za održavanje - to je callback hell 
Callback hell može da se ublaži promisima */
form.addEventListener("submit", submitFormVarijanta1);

// Sinhronizacija asinhronih poziva
// Ne možemo asihnrone funkcije da pozivamo jednu za drugom ako želimo da se sekvencijalno izvršavaju

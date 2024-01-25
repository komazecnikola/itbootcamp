const form = document.querySelector("#order");
const capacity = document.querySelector("#capacity");
const div = document.querySelector("#result");

function getItemsReturnPromise(resources) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", function () {
      if (request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("Desila se greška");
      }
    });

    request.open("GET", resources);
    request.send();
  });
}

// Uloga promisa je da vrši sinhronizaciju asinhronih poziva!!!
// Oni se kreiraju da bismo ih lančali

function submitFormVarijanta2(event) {
  event.preventDefault();

  let nizArtikala = [];

  getItemsReturnPromise("json/stock.json")
    .then((data) => {
      data.forEach((artikal) => {
        if (artikal.stock == 0) {
          nizArtikala.push(artikal.id);
        }
      });
      return getItemsReturnPromise("json/weights.json");
    })
    .then((data) => {
      let totalWeight = 0;
      data.forEach((artikal) => {
        if (nizArtikala.includes(artikal.id)) {
          totalWeight += artikal.weight;
        }
      });

      if (totalWeight <= Number(capacity.value)) {
        return getItemsReturnPromise("json/prices.json");
      } else {
        div.innerHTML = "Not enough capacity in track!";
      }
    })
    .then((data) => {
      if (data !== undefined) {
        let totalPrice = 0;
        data.forEach((artikal) => {
          if (nizArtikala.includes(artikal.id)) {
            totalPrice += artikal.price;
          }
        });
        div.innerHTML = `Total price: ${totalPrice}`;
      }
    })
    .catch((msg) => {
      div.innerHTML = msg;
    });
}

form.addEventListener("submit", submitFormVarijanta2);

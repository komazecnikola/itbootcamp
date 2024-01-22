let getJSON = (resource) => {
  // 1. Kreiranje XML objekta
  const request = new XMLHttpRequest();

  // 2. Otvaramo kreirani zahtev
  request.open("GET", resource);

  // 3. Slanje zahteva
  request.send();

  return new Promise((resolve, reject) => {
    request.addEventListener("readystatechange", function () {
      if (request.readyState == 4 && request.status == 200) {
        // Sve OK
        let data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        // Nešto nije OK
        reject("Došlo je do greške");
      }
    });
  });
};

getJSON("../JSON/prvi.json") // vraća instancu promise koja može imati .then i .catch
  .then((sadrzaj1) => {
    console.log("prvi.json: ", sadrzaj1);
    return getJSON("../JSON/drugi.json");
  })
  .then((sadrzaj2) => {
    console.log("drugi.json: ", sadrzaj2); // ako je drugi.json resolved onda ispisuje njegove podatke
    return getJSON("../JSON/treci.json");
  })
  .then((sadrzaj3) => {
    console.log("treci.json: ", sadrzaj3); // ako je treci.json resolved ispisuje njegove podatke
  })
  .catch((greska) => {
    console.log("Rejected:", greska); // ako je bar jedan fajl bio rejected upada u .catch granu
  });

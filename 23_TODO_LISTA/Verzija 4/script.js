let li = document.querySelectorAll("li");
let btnDodaj = document.querySelector("#submit");
let inputZadatak = document.querySelector("#task");
let ulZadaci = document.querySelector("ul");

let nizZadataka = [];

if (localStorage.getItem("zadaci") == null) {
  // Ne postoje još uvek zadaci u memoriji
  localStorage.setItem("zadaci", JSON.stringify(nizZadataka));
} else {
  // Postoje zadaci u memoriji i treba ih ispisati u stranici
  nizZadataka = JSON.parse(localStorage.getItem("zadaci"));
  console.log(nizZadataka);
  nizZadataka.forEach((zad) => {
    let liZad = document.createElement("li"); // Kreiramo novi <li>
    liZad.textContent = zad; // Upisujemo u <li> teksualni sadržaj tj. tekst zadatka
    ulZadaci.appendChild(liZad); // Dodajemo <li> na kraju <ul>
  });
}

ulZadaci.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.remove();
    let indeksElementa = nizZadataka.indexOf(e.target.textContent);
    nizZadataka.splice(indeksElementa, 1);
    localStorage.setItem("zadaci", JSON.stringify(nizZadataka));
  }
});

inputZadatak.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    let tekstZadatka = inputZadatak.value;
    if (inputZadatak.value.trim() != "") {
      let liNoviZadatak = document.createElement("li");
      liNoviZadatak.textContent = tekstZadatka;

      let dodajRadio = document.querySelector("input[name='add']:checked");
      if (dodajRadio.value == "top") {
        ulZadaci.prepend(liNoviZadatak);
        nizZadataka.unshift(tekstZadatka); // Dodajemo na početak niza
      } else {
        ulZadaci.append(liNoviZadatak);
        nizZadataka.push(tekstZadatka); // Dodajemo na kraj niza
      }
    } else {
      alert("Upišite tekst u polje");
    }
    localStorage.setItem("zadaci", JSON.stringify(nizZadataka));
    inputZadatak.value = "";
  }
});

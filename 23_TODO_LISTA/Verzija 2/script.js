let li = document.querySelectorAll("li");
let btnDodaj = document.querySelector("#submit");
let inputZadatak = document.querySelector("#task");
let ulZadaci = document.querySelector("ul");

// event bubbling
// Kada imamo veliko broj elemenata koji se uz to i dinamčki dodaju onda je najbolje da ih pratimo na ovaj način, jer u suprotnom bismo morali na veliki broj elemenata da kačimo addEventListener, a ovako samo na jedan element u kojem se nalaze drugi i onda pratimo na koji od njih se klikne
ulZadaci.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.target); // element na koji je kliknuto
  console.log(e.target.tagName); // tag na koji je kliknuto
  //   if (e.target.tagName == "LI") {
  //     e.target.classList.toggle("precrtaj");
  //   }

  if (e.target.tagName == "LI") {
    e.target.remove();
  }
});

btnDodaj.addEventListener("click", (e) => {
  e.preventDefault;

  let tekstZadatka = inputZadatak.value;
  if (inputZadatak.value.trim() != "") {
    let liNoviZadatak = document.createElement("li");
    liNoviZadatak.textContent = tekstZadatka; // dodajemo tekst u li preko innerHTML ili innerText ili textContent

    let dodajRadio = document.querySelector("input[name='add']:checked");
    if (dodajRadio.value == "top") {
      // dodavanje na početak liste
      ulZadaci.prepend(liNoviZadatak);
    } else {
      // dodavanja na kraj liste
      ulZadaci.append(liNoviZadatak);
    }
  } else {
    alert("Upišite tekst u polje");
  }
  inputZadatak.value = "";
});

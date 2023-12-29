// Events - Događaji

// 1. Dohvatiti element na koji želimo da postavimo osluškivač

let btnHello = document.getElementById("hello");

// 2. Postavimo osluškivač na element koji smo dohvatili
btnHello.addEventListener("click", () => {
  console.log("Hello!");
});

//

btnHello.addEventListener("dblclick", () => {
  console.log("Hello! Hello!");
});

// 1. Zadatak
let btnBroj = document.getElementById("broj");
let pIspisBroja = document.getElementById("ispisBroja");
let br = 1;
btnBroj.addEventListener("click", () => {
  console.log(`Broj je ${br}`);

  // 2. Zadatak
  pIspisBroja.innerHTML = `Broj je ${br}`;

  br++;
});

// Zadatak 3

let b = 0;

let btnMinus = document.getElementById("minus");
let btnPlus = document.getElementById("plus");
let sumaSpan = document.getElementById("suma");
console.log(sumaSpan);

btnPlus.addEventListener("click", () => {
  b = b + 1;
  sumaSpan.innerText = b;
});

btnMinus.addEventListener("click", () => {
  if (b == 0) {
    sumaSpan.innerText = 0;
  } else {
    b = b - 1;
    sumaSpan.innerText = b;
  }
});

// Zadatak 4

// Zadatak 5

let inputTekst = document.getElementById("imeUpis");
let btnIspis = document.getElementById("imeKlik");
let pIme = document.getElementById("imeIspis");

btnIspis.addEventListener("click", () => {
  let tekst = inputTekst.value;
  pIme.innerText = `Zdravo ${tekst}`;
});

// Zadatak 6
let radioMuski = document.getElementById("muski");
let radioZenski = document.getElementById("zenski");
let radioNeopredeljen = document.getElementById("neopredeljen");
btnIspis.addEventListener("dblclick", () => {
  // 1. Način
  if (radioMuski.checked) {
    console.log("Osoba muškog pola");
  } else if (radioZenski.checked) {
    console.log("Osoba ženskog pola");
  } else if (radioNeopredeljen.checked) {
    console.log("Osoba se nije opredelila");
  } else {
    console.log("Niste odabrali pol");
  } // Ako nije unapred čekirano polje onda mora ovako, jer može da se desi da se klikne a da nije čekirano nijedno polje. Ako se ubaci "checked" u HTML prvo onda uvek mora biti barem jedno polje čekirano uvek pa ne mora else uslov na kraju

  // 2. Način
  // Selektuj mi input polje čiji input name ima vrednost pol i pritom je čekiran
  let checkedPol = document.querySelector("input[name='pol']:checked");
  console.log(`Osoba je ${checkedPol.value} pola`);

  // 3. Način
  // Selektuj mi sve radio buttone po name atributu sa getElementByName
  let polRadios = document.getElementsByName("pol");
  polRadios.forEach((radio) => {
    if (radio.checked) {
      console.log(`Osoba je ${radio.value} pola`);
    }
  });

  // 4. Način
  // Selektuj mi sve radio buttone po name atributu sa querySelectorAll
  let polRadiosInput = document.querySelectorAll("input[name='pol']");
  polRadiosInput.forEach((radio) => {
    if (radio.checked) {
      console.log(`Osoba je ${radio.value} pola`);
    }
  });
});

// Zadatak 7

// Pod A
let kvadratInput = document.getElementById("kvadratInput");
let kvadratDugme = document.getElementById("kvadratButton");
let kvadratParagraf = document.getElementById("kvadratRezultat");
kvadratDugme.addEventListener("click", (e) => {
  let broj = kvadratInput.value;
  kvadratParagraf.innerText = `Kvadrat ovog broja je ${broj * broj}`;
  e.preventDefault(); // ovo može da se stavi da bismo sprečili da se stranica reloaduje nakon što kliknemo na dugme
});

// Pod B
let polaInput = document.getElementById("polaInput");
let polaDugme = document.getElementById("polaButton");
let polaParagraf = document.getElementById("polaRezultat");
polaDugme.addEventListener("click", () => {
  let broj = polaInput.value;
  polaParagraf.innerText = `Polovina ovog broja je ${broj / 2}`;
});

// Pod C
let precnikInput = document.getElementById("precnikInput");
let precnikDugme = document.getElementById("precnikButton");
let precnikParagraf = document.getElementById("precnikRezultat");
let radioObim = document.getElementById("obimKruga");
let radioPovrsina = document.getElementById("povrsinaKruga");
precnikDugme.addEventListener("click", () => {
  let r = precnikInput.value;
  if (radioObim.checked) {
    precnikParagraf.innerText = `Obim kruga za ovaj poluprečnik je ${
      2 * r * 3.14
    }`;
  }
  if (radioPovrsina.checked) {
    precnikParagraf.innerText = `Površina kruga za ovaj poluprečnik je ${
      r * r * 3.14
    }`;
  }

  // Može i ovako: Math.pow(r, 2) * Math.PI
});

// DOM
let inputNumber1 = document.getElementById("br1");
let inputNumber2 = document.getElementById("br2");
let btnRacunaj = document.getElementById("racunaj");
let pRezultat = document.getElementById("rezultat");
let btnResetuj = document.getElementById("resetuj");

btnRacunaj.addEventListener("click", (e) => {
  e.preventDefault(); // pošto je ovo forma i default je da se reloduje stranica na klik, moramo da preventiramo taj default kako bi ostalo radilo
  let br1 = Number(inputNumber1.value);
  let br2 = Number(inputNumber2.value);
  let o = "";

  let operacija = document.querySelector("input[name='operacija']:checked");
  let rezultat = "nedefinisano"; /// ovo može u JS jer je losely typed
  if (operacija.value == "sabiranje") {
    rezultat = br1 + br2;
    o = "+";
  } else if (operacija.value == "oduzimanje") {
    rezultat = br1 - br2;
    o = "-";
  } else if (operacija.value == "množenje") {
    rezultat = br1 * br2;
    o = "*";
  } else {
    o = "/";
    if (br2 == 0) {
      alert("Nije dozvoljeno deliti nulom");
    } else {
      rezultat = br1 / br2;
    }
  }

  pRezultat.innerHTML = `${br1} ${o} ${br2} = ${rezultat}`;
});

btnResetuj.addEventListener("click", () => {
  pRezultat.innerHTML = "";
});

// setTimeout(callback funkcija koja treba da bude izvršena nakon nekog vremena, vreme)

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const div = document.querySelector("#ispis");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");

let timer;

btn1.addEventListener("click", function (e) {
  e.preventDefault();
  if (timer === undefined) {
    timer = setTimeout(() => {
      const datum = new Date();
      const h = datum.getHours();
      const m = datum.getMinutes();
      let s = datum.getSeconds();
      s = s < 10 ? "0" + s : "" + s;
      div.innerHTML += `${h}:${m}:${s}`;
      timer = undefined;
    }, 2000);
  }
});

btn2.addEventListener("click", function (e) {
  e.preventDefault();
  clearTimeout(timer);
  timer = undefined;
});

function prikaziSat() {
  const datum = new Date();
  const h = datum.getHours();
  let m = datum.getMinutes();
  m = m < 10 ? "0" + m : "" + m;
  let s = datum.getSeconds();
  s = s < 10 ? "0" + s : "" + s;
  div.innerHTML = `${h}:${m}:${s}`;
}

let clock;

btn3.addEventListener("click", function (e) {
  e.preventDefault();
  if (clock === undefined) {
    clock = setInterval(prikaziSat, 1000 / 2);
  }
});

btn4.addEventListener("click", function (e) {
  e.preventDefault();
  clearInterval(clock);
  clock = undefined;
});

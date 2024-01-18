// Asinhrono ili razdešeno
window.setTimeout(() => {
  console.log("Poruka ispisana nakon 3 sekunde");
}, 1000 * 3);

console.log(1);
console.log(2);

window.setTimeout(() => {
  console.log("Poruka ispisana nakon nekog vremena");
}, 1000 * 2);

console.log(3);
console.log(4);

/* 
1) 1, 2, 3, 4, "Poruka ispisana nakon nekog vremena";
2) 1, 2, (... ceka se 2 sekunde ...) "Poruka ispisana...", 3, 4;

Izvršava se varijanta 1) jer setTimeout nije blokirajuća
*/

const btn1 = document.getElementById("btn1");
const div = document.getElementById("ispis");
const btn2 = document.getElementById("btn2");
let timer = null;

btn1.addEventListener("click", function (e) {
  e.preventDefault();
  let datum = new Date();
  let h = datum.getHours();
  let m = datum.getMinutes();
  let s = datum.getSeconds();
  if (timer === null) {
    timer = setTimeout(function () {
      div.innerHTML += `${h}:${m}:${s}`;
      timer = null;
    }, 2000);
  }
});

btn2.addEventListener("click", function (e) {
  e.preventDefault();
  clearTimeout(timer);
  timer = null;
});

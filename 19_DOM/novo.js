/////////////////////////////////////////////////////////////////////////
// Vežbanje - Slajd 15
/////////////////////////////////////////////////////////////////////////

// 1

let sviParagrafi = document.querySelectorAll("p");
sviParagrafi.forEach((p, i) => {
  if (i % 2 == 0) {
    p.classList.add("error");
  } else {
    p.classList.add("success");
  }
});

// 2
sviParagrafi.forEach((p, i) => {
  if (i % 3 == 0) {
    p.style.fontSize = "25px";
  } else if (i % 3 == 1) {
    p.style.fontSize = "20px";
  } else {
    p.style.fontSize = "15px";
  }
});

// 3
sviParagrafi.forEach((p) => {
  if (p.textContent.includes("success")) {
    p.classList.add("success");
  } else if (p.textContent.includes("error")) {
    p.classList.add("error");
  }
});

// 4
sviParagrafi.forEach((p) => {
  p.classList.toggle("error");
});

//////////////////////////////////////////////////////////////////////////////////
// Vežbanje - Slajd 17
//////////////////////////////////////////////////////////////////////////////////

// Dodati novi div tag dokumentu

let noviDiv = document.createElement("div");
noviDiv.innerHTML = "Div kreiran u JS-u";
noviDiv.style.backgroundColor = "green";
document.body.appendChild(noviDiv);

let noviNaslov = document.createElement("h3");
noviNaslov.innerHTML = "Novi naslov";
noviDiv.appendChild(noviNaslov);

// Formirati ul listu sa stavkama...

let lista = document.createElement("ul");
noviDiv.append(lista);

let li1 = document.createElement("li");
li1.innerHTML = "Prva stavka liste";
let li2 = document.createElement("li");
li2.innerHTML = "Druga stavka liste";
let li3 = document.createElement("li");
li3.innerHTML = "Treća stavka liste";

lista.append(li1, li2, li3);

// Izbaciti stavke iz liste

// lista.removeChild(li1);
// lista.removeChild(lista.firstChild);
lista.removeChild(lista.childNodes[0]);

let li4 = document.createElement("li");
li4.innerHTML = "Cetvrta stavka liste";
lista.replaceChild(li4, li3);

// Dodati jop jednu stavku listi...

let li5 = document.createElement("li");
lista.appendChild(li5);
let slika = document.createElement("img");
slika.src = "slika.png";
slika.alt = "neka slika";
slika.width = "150";
li5.appendChild(slika);

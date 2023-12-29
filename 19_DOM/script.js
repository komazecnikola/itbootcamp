console.log(document); // document je objekat (koren DOM stabla - predak svim čvorovima u DOM stablu)
console.log(document.body); // body svojstvo document objekta je objekat

let e1 = document.getElementById("p2");
console.log(e1); // (jedinstven) objekat iz DOM stabla

let el2 = document.getElementsByClassName("par");
console.log(el2); // HTML kolekcija objekata iz DOM stabla

// Pristup elementima HTML kolekcije (ne može sa forEach jer nije klasičan niz, ali može for)

for (let i = 0; i < el2.length; i++) {
  console.log(el2[i]);
}

let niz = Array.from(el2); // konvertujemo HTML kolekciju u niz prvo pa tek onda koristimo forEach petlju

niz.forEach((e) => {
  console.log(e);
});

//

let el3 = document.getElementsByTagName("p"); // razilika je u  TAG!!!
console.log(el3); // daje HTML kolekciju

let el4 = document.getElementsByName("p");
console.log(el4); // vraća NodeList (drugačiji tip podataka, lista čvorova)

// Za NodeList može da se pristupi i for i forEach petljom, slično je kao niz u stvari

el4.forEach((e) => {
  console.log(e);
});

console.log(el4[0]);

// Array, HTMLCollection, NodeList - sve ovo su drugačiji tipovi podataka, ali što se nas tiče na ovom nivou nema mnogo razlike između njih osim iteracije kroz objekte. Array i NodeList imaju ugrađenu forEach petlju, a HTMLCollection možemo da prebacimo u Array pa da koristimo forEach

let t1 = document.querySelector("#p2");
console.log(t1);

let t2 = document.querySelector(".par"); // Vraća objekat iz DOM stabla
console.log(t2); // Vraća samo prvi element sa tom klasom, iako ih ima više

let t3 = document.querySelectorAll(".par");
console.log(t3); // Vraća NodeList svih elemenata sa tom klasom i može da se koristi forEach petlja nod njom

t3.forEach((el) => {
  console.log(el);
});

let t4 = document.querySelectorAll("div p.par"); // Vraća samo tri paragrafa sa "par" klasom unutar div elementa
console.log(t4);

let t41 = document.querySelectorAll("div p.par, div a.par"); // Vraća i link sa .par klasom

//////////////////////////////////////////////////////////////////////////////////////////////
// Vežbanje 1
//////////////////////////////////////////////////////////////////////////////////////////////

let a = document.querySelector("p");
console.log(a);

let b = document.querySelector("div.error"); // mora baš DIV element sa klasom .error
console.log(b);

let c = document.querySelector("table tr:last-of-type");
console.log(c);

c.style.backgroundColor = "red";

let d = document.querySelectorAll("a");

console.log(d);

d.forEach((link) => {
  link.style.color = "red";
  link.style.fontSize = "18px";
  link.style.textDecoration = "none";

  //   link.setAttribute(
  //     "style",
  //     "color: red; font-size: 18px; text-decoration: none;" // može i ovako sa atributima
  //   );
});

let e = document.querySelectorAll("img");

console.log(e);

e.forEach((img) => {
  img.style.border = "3px dashed black";
});

let link = document.querySelector("a");
link.innerHTML =
  "<span style='font-weight: bold;'>Novi tekst</span> prvog linka";
link.href = "https://www.google.com"; // svojstvo

link.setAttribute("href", "https://facebook.com"); // metoda
// link.target = "_blank";

link.setAttribute("target", "_blank");

link.style.color = "blue";
link.style.fontSize = "22px";

link.style.textDecoration = "none";

//////////////////////////////////////////////////////////////////////////////////////////////
// Vežbanje 2 - slajd broj 8
//////////////////////////////////////////////////////////////////////////////////////////////

// 1
let sviParagrafi = document.querySelectorAll("p");
console.log(sviParagrafi);

sviParagrafi.forEach((p, i) => {
  p.innerHTML += "VAŽNO!!!";
});

// 2
let sviErrorDiv = document.querySelectorAll("div.error");
sviErrorDiv.forEach((div) => {
  div.innerHTML = `<h1>GREŠKA!</h1>`;
});

// 3
for (let i = 0; i < sviParagrafi.length; i++) {
  sviParagrafi[i].innerHTML += (i + 1) * (i + 1);
}

// 4
let sveSlike = document.getElementsByTagName("img");
console.log(sveSlike);

for (let i = 0; i < sveSlike.length; i++) {
  sveSlike[i].alt = "neki tekst";
}

// 5
sviParagrafi.forEach((p, i) => {
  p.setAttribute("style", "color: purple;");
  if (i % 2 == 0) {
    p.style.backgroundColor = "green";
  } else {
    p.style.backgroundColor = "red";
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////
// Vežbanje 3 - Slajd broj 9
//////////////////////////////////////////////////////////////////////////////////////////////

// 1

let sviLinkovi = document.querySelectorAll("a");

sviLinkovi.forEach((a) => {
  a.style.padding = "5px";
  a.style.fontSize = "18px";
  a.style.textDecoration = "none";
});

for (let i = 0; i < sviLinkovi.length; i++) {
  if (i % 2 == 0) {
    sviLinkovi[i].style.backgroundColor = "green";
    sviLinkovi[i].style.color = "purple";
  } else {
    sviLinkovi[i].style.backgroundColor = "blue";
    sviLinkovi[i].style.color = "white";
  }
}

// 2

let svePngSlike = document.querySelectorAll("img[src$='.png']");
svePngSlike.forEach((png) => {
  png.style.border = "2px solid red";
});

// 3

sviLinkovi.forEach((a) => {
  if (a.target == "_blank") {
    a.setAttribute("target", "_top");
  } else {
    a.setAttribute("target", "_blank");
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////
// Vežbanje 4 - Slajd broj 10
//////////////////////////////////////////////////////////////////////////////////////////////

//
let div = e1.parentNode;
console.log(div);
console.log(div.childNodes);
console.log(div.childNodes[1]);

div.childNodes.forEach((el) => {
  let tip = el.nodeName;
  if (tip != "#text") {
    //tip=="P"
    console.log(el);
  }
});

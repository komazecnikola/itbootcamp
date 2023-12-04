// Zadatak 1

let sati = 23;
let minuti = 0;

let odPonoci = sati * 60 + minuti;
console.log("Minuta od ponoći: " + odPonoci);

// Zadatak 1.1 - minuta ostalo DO ponoći?

let doPonoci = 24 * 60 - odPonoci;
console.log("Minuta do ponoći: " + doPonoci);

// Zadatak 2

let datoVreme = 68;
let brojSati = Math.floor(datoVreme / 60);
let brojMinuta = datoVreme % 60;

console.log(`Prošlo je ${brojSati} sat(i) i ${brojMinuta} minut(a) od ponoći`);

// Zadatak 3

let cenaRobe = 1789;
let novcanica = 2000;

let kusur = novcanica - cenaRobe;
console.log("Vaš kusur je: " + kusur);

// Zadatak 6
// Prva konverzija (eur -> din)
let ukupnoEur = 70;
let kursEur = 117.29;

let ukupnoDin = ukupnoEur * kursEur;

console.log(ukupnoDin);

// Druga konverzija (din -> eur)
let novacDin = 5000;
let novacEur = novacDin / kursEur;

console.log(novacEur);

// Zadatak 7
// Prva konverzija (eur -> dol uz pomoć din)
let brojEur = 100;
let kursDol = 106.79;

let brojDin = brojEur * kursEur;
let brojDol = brojDin / kursDol;

console.log(brojDol);

// Druga konverzija (dol -> eur uz pomoć din)

let brojDolara = 200;

let brojDinara = brojDolara * kursDol;

let brojEura = brojDinara / kursEur;

console.log(brojEura);

// Zadatak 8

let tempCelzijus = 35;
let tempFarenhajt = tempCelzijus * 1.8 + 32;

console.log(
  `${tempCelzijus} stepeni Celzijusa je ${tempFarenhajt} stepeni Farenhajta`
);

// Zadatak 9

let tempKelvin = tempCelzijus + 273.15;
console.log(
  `${tempCelzijus} stepeni Celzijusa je ${tempKelvin} stepeni Kelvina`
);

// Zadatak 4

let datum = new Date(); // datum je promenljiva koja sadrži info o trenutnom datumu i vremenu
console.log(datum);

let godina = datum.getFullYear();
console.log(godina);

let mesec = datum.getMonth();
console.log(mesec + 1);

let dan = datum.getDay();
console.log(dan);

let dat = datum.getDate();
console.log(dat);

// Zadatak 4 urađen

let vremeUSatima = datum.getHours();
console.log(vremeUSatima);
let vremeUMinutima = datum.getMinutes();
console.log(vremeUMinutima);

let vremeOdPonoci = vremeUSatima * 60 + vremeUMinutima;
console.log(vremeOdPonoci);

// Zadatak 5
let danasDan = datum.getDate();
let danasMesec = datum.getMonth();
let danasGodina = datum.getFullYear();

console.log(`0${danasDan}.${danasMesec + 1}.${danasGodina}`);

console.log(danasGodina + "/" + (danasMesec + 1) + "/" + danasDan);

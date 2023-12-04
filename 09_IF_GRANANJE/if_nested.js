// Zadatak 12

let br1 = 18;
let br2 = 6;

if (br1 > br2) {
  console.log(`Veći broj je ${br1} a manji broj je ${br2}`);

  // Ispitujemo da li je veći broj paran
  if (br1 % 2 == 0) {
    console.log(`Veći broj je paran`);
  } else {
    console.log(`Veći broj nije paran`);
  }

  // Ispitujemo da li je manji broj deljiv sa 3
  if (br2 % 3 == 0) {
    console.log(`Manji broj je deljiv sa 3`);
  } else {
    console.log(`Manji broj nije deljiv sa 3`);
  }
} else {
  console.log(`Veći broj je ${br2}, a manji broj je ${br1}`);

  // Ispitujemo da li je veći broj paran
  if (br2 % 2 == 0) {
    console.log(`Veći broj je paran`);
  } else {
    console.log(`Veći broj nije paran`);
  }

  // Ispitujemo da li je manji broj deljiv sa 3
  if (br1 % 3 == 0) {
    console.log(`Manji broj je deljiv sa 3`);
  } else {
    console.log(`Manji broj nije deljiv sa 3`);
  }
}

// 2. način

br1 = 15;
br2 = 19;
let veci = br1;

if (br2 > veci) {
  veci = br2;
}

let manji = br1 + br2 - veci;

if (veci % 2 == 0) {
  console.log("Veći broj je deljiv sa 2");
} else {
  console.log("Veći broj nije deljiv sa 2");
}

if (manji % 3 == 0) {
  console.log("Manji broj je deljiv sa 3");
} else {
  console.log("Manji broj nije deljiv sa 3");
}

// Zadatak 13

let d1 = 14;
let m1 = 8;
let g1 = 2003;

let d2 = 13;
let m2 = 8;
let g2 = 2003;

if (g1 < g2) {
  console.log(`Datum ${d1}.${m1}.${g1} je raniji.`);
} else if (g1 > g2) {
  console.log(`Datum ${d2}.${m2}.${g2} je raniji.`);
} else {
  if (m1 < m2) {
    console.log(`Datum ${d1}.${m1}.${g1} je raniji.`);
  } else if (m1 > m2) {
    console.log(`Datum ${d2}.${m2}.${g2} je raniji.`);
  } else {
    if (d1 < d2) {
      console.log(`Datum ${d1}.${m1}.${g1} je raniji.`);
    } else if (d1 > d2) {
      console.log(`Datum ${d2}.${m2}.${g2} je raniji.`);
    } else {
      console.log("Datumi su identični.");
    }
  }
}

// Zadatak 14

let pol = "z";
let god = 15;

if (pol == "m") {
  console.log("Korisnik je muškarac.");
  if (god >= 18) {
    console.log("Korisnik je punoletan.");
  } else {
    console.log("Korisnik je maloletan.");
  }
} else if (pol == "z") {
  console.log("Korisnik je žena.");
  if (god >= 18) {
    console.log("Korisnica je punoletna.");
  } else {
    console.log("Korisnica je maloletna.");
  }
} else {
  console.log("Korisnik je nešto treće");
}

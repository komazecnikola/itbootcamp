let mojaFunkcija = (callback) => {
  callback();
};

mojaFunkcija(() => {
  console.log("Callback funkcija okidanje");
});

/////////////////////////////////////////////

let sabiranje = (funkcija) => {
  funkcija(4, 5);
};

// 1. način
sabiranje((a, b) => {
  console.log(a + b);
});

// 2. način
function stampajSumu(x, y) {
  console.log(x + y);
}

sabiranje(stampajSumu); // pozivam stampajSumu funkciju bez zagrada

//////////////////////////////////////////////

let oduzimanje = (funkcija) => {
  console.log(funkcija(100, 30));
};

oduzimanje((a, b) => {
  return a - b;
});

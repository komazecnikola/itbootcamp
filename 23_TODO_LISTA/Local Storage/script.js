// Pamćenje/Upisivanje/Smeštanje u lokalnoj memoriji
localStorage.setItem("ime", "Stefan");
localStorage.setItem("grad", "Niš");

// Key - ime promenljive (ime)
// Value - vrednost promenljive (Stefan)

// Izmena/Update u lokalnoj memoriji
localStorage.setItem("grad", "Leskovac");
// ukoliko postoji neki key u LS onda vrši update, odnosno zamenu
// a ukoliko ne postoji key u LS onda vrši upis, tj. novi usno
// a funkcija je u oba slučaja ista, setItem

// Preuzimanje i lokalne memorije
let unetoIme = localStorage.getItem("ime");
// Ulazi u LS i traži ime kao key i vraća njegovu vrednost što je Stefan
console.log(unetoIme);
console.log(localStorage.getItem("grad"));

console.log(localStorage.getItem("godine")); // vraća null jer ključ "godine" ne postoji u LS

localStorage.removeItem("grad"); // briše iz lokalne memorije po zadatom ključu

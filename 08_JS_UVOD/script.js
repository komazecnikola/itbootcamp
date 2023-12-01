document.getElementById("d1").innerHTML = "Ja se zovem Nikola Komazec";

console.log("Pera");
console.log("Mika");

console.log("It's alright");

// Literali

console.log(5);
console.log(-5.189);
console.log(3 + 4); // 7
console.log("3" + "4"); // 34 konkatenacija (spajanje stringova)
console.log("3 + 4"); // "3 + 4"
console.log("3 + 4 = ", 3 + 4);
console.log("3 + 4 = " + (3 + 4));
console.log(true);
console.log(false);

// Promenljive

let x; // deklaracija promenljive (uvođenje promenljive u program)

console.log(x);

x = 5; // dodeljivanje vrednost već deklarisanoj promenljivoj

console.log(x);

x = "Laza";

console.log(x);

let y = true; // definicija promeljive (deklaracija + dodela vrednosti)

console.log(y);

const z = -7.6;

// z = 6; - ne može!

// Null and Undefined

let age;
console.log(age, age + 3); // undefined, NaN - Not a Number

age = null;
console.log(age, age + 3); // null, 3

// Operacije

let broj = 3 + 4 * 2; // 11
console.log(broj);

broj = (3 + 4) * 2; // 14
console.log(broj);

// broj += 6; // 14
// console.log(broj);

broj = broj + 6; // 14 + 6 = 20
console.log(broj);

broj *= 5; // broj = broj * 5;
console.log(broj);

x = 6;
x++;
console.log(x); // 7

++x;
console.log(x); // 8

x = 6;
console.log(x++); // 6 - post-increment (prvo se iskoristi stara vrednost prom. x pa se posle uveća)
console.log(x); // 7
console.log(++x); // 8 - pre-increment (prvo se uveća vrednost prom. x pa se onda iskoristi, prikaže)

// Beba ima 28 meseci
// 28 delimo sa 12 i tražimo količnik i ostatak

console.log(28 / 12); // 2.3333333

// Količnik:
console.log(Math.floor(28 / 12)); // 2

// Ostatak:
console.log(28 % 12); // 4

// 28 = 2 * 12 + 4
//     (k)      (o)

console.log(7 % 3);
console.log(24 % 18);

x = 5;
y = 3;

console.log(x ** y); // 125

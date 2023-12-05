let i = 1; // mora let jer se promenljiva menja

while (i <= 5) {
  console.log(i);
  i++;
}

console.log("Kraj petlje");
console.log(i);

/* 

Pre petlje: i = 1;

1. Iteracija: log(1), i = 2;
2. Iteracija: log(2), i = 3;
3. Iteracija: log(3), i = 4;
4. Iteracija: log(4), i = 5;
5. Iteracija: log(5), i = 6;

*/

// Isti zadatak drugi način

i = 1;
while (i <= 5) {
  console.log(i++);
}

// Isti zadatak treći način

i = 0;

while (i < 5) {
  i++;
  console.log(i);
}

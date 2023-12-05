// Zadatak 1 pod B

console.log("Zadatak 1 pod B");
let n = 1;

while (n <= 20) {
  console.log(n);
  n++;
}

// Zadatak 1 pod A
console.log("Zadatak 1 pod A");

i = 1;

let poruka = "";

while (i <= 20) {
  poruka = poruka + i + " ";
  i++;
}

console.log(poruka);

/*

#  |  i  |  poruka
-------------------------
0  |  1  |   ""
1  |  2  |   "1 "
2  |  3  |   "1 2 "
3  |  4  |   "1 2 3 "
...
20 | 21  |   "1 2 ... 20"

*/

// Zadatak 2
console.log("Zadatak 2");

let a = 20;

while (a >= 1) {
  console.log(a);
  a--;
}

// Zadatak 2 drugi način

console.log("Zadatak 2 drugi način");

// a = 1;
// while (a >= 1) {
//   console.log(21 - a);
//   a++;
// }
/*

i = 1 => 20 = 21 - i
i = 2 => 19 = 21 - i
i = 3 => 18 = 21 - i
...........
i = 19 => 2 = 21 - i
i = 20 => 1 = 21 - i

*/

// Zadatak 3

console.log("Zadatak 3");

let x = 1;

while (x <= 10) {
  console.log(x * 2);
  x++;
}

// Zadatak 3 drugi način

console.log("Zadatak 3 drugi način");
let b = 1;

while (b <= 20) {
  if (b % 2 == 0) {
    console.log(b);
  }
  b++;
}

// Zadatak 3 treći način

console.log("Zadatak 3 treći način");
let c = 2;
while (c <= 20) {
  console.log(c);
  c = c + 2;
}

// Zadatak 4

let z = 1;

while (z <= 3) {
  document.write(
    "<p style='color: red;'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, et.</p><p style='color: blue;'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, et.</p><p style='color: green;'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, et.</p>"
  );
  z++;
}

// z = 1;

// while () {
//     if (z % 3) {

//     }
// }

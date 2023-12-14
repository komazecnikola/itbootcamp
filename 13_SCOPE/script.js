// JavaScript Scope - oblast važenja (hoisting)

let a = 10;
var b = 20; // ili b = 20; je isto sa var i bez
const c = 30;

console.log(a, b, c);

a = 15; // ne sem ovde sa let da pošne, a sa var može

var b = 25; // može opet da se redeklariše sa var

console.log(a, b, c);

if (true) {
  let a = 50; // ovde može sa let da se redeklariše jer nije isti opseg (scope)
  var b = 70; // var pravi promeljivu globalno
  console.log(a, b);
  if (true) {
    console.log(a, b);
  }
}

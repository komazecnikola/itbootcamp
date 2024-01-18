let li = document.querySelectorAll("li");
console.log(li);

// li.forEach((e) => {
//   e.addEventListener("click", () => {
//     if (e.style.textDecoration == "line-through") {
//       e.style.textDecoration = "none";
//     } else {
//       e.style.textDecoration = "line-through";
//     }
//   });
// });

li.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("precrtaj");
  });
});

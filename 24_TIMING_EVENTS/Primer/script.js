const btnStart = document.querySelector("#btn1");
const btnStop = document.querySelector("#btn2");
const input = document.querySelector("#input1");

let clock;

btnStart.addEventListener("click", function (e) {
  e.preventDefault();
  if (clock === undefined) {
    clock = setInterval(() => {
      input.value++;
    }, 1000);
  }
});

btnStop.addEventListener("click", function (e) {
  e.preventDefault();
  clearInterval(clock);
  clock = undefined;
});

//////////////////////////////////////////////

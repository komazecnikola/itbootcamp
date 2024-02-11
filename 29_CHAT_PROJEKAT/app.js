import Chatroom from "./chat.js";
import { chatUI } from "./ui.js";

// DOM
const ul = document.querySelector(".chat-list");
const inputMessage = document.querySelector("#message");
const btnSend = document.querySelector("#send");
const inputUsername = document.querySelector("#username");
const btnUpdate = document.querySelector("#update");
const roomBtns = document.querySelector(".buttons-section");
let inputColor = document.querySelector("#inputColor");
console.log(inputColor.value);
const btnColor = document.querySelector("#updateColor");

// BUTTONS
const btnGeneral = document.getElementById("general");
const btnJs = document.getElementById("js");
const btnHomeworks = document.getElementById("homeworks");
const btnTests = document.getElementById("tests");

let username = "anonymus";
if (localStorage.username) {
  username = localStorage.username;
}

// Objekti
let chatroom1 = new Chatroom("general", username);
btnGeneral.classList.add("selected");
let chatui = new chatUI(ul);

chatroom1.getChat((data) => {
  chatui.templateLI(data);
});

btnSend.addEventListener("click", (e) => {
  e.preventDefault();
  let message = inputMessage.value.trim();
  if (message != "") {
    chatroom1
      .addChat(message)
      .then(() => {
        inputMessage.value = "";
        // reset() može da se nakači samo na formu
      })
      .catch((err) => {
        console.log("Greška: ", err);
      });
  } else {
    alert("Please add a message first");
  }
});

btnUpdate.addEventListener("click", (e) => {
  e.preventDefault();
  let usernameNew = inputUsername.value;
  chatroom1.username = usernameNew;
  inputUsername.value = "";
  chatui.deleteLI();
  chatroom1.getChat((data) => {
    chatui.templateLI(data);
  });
});

// Ovde koristim event bubbling za odabir dugmeta/sobe
roomBtns.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    let roomNew = e.target.id;

    // Označavam dugme koje je kliknuto - odnosno koja soba je odabrana
    // Verovatno postoji bolji način za ovo, ali za sada je bitno da radi samo
    if (roomNew == "general") {
      btnGeneral.classList.add("selected");
      btnJs.classList.remove("selected");
      btnHomeworks.classList.remove("selected");
      btnTests.classList.remove("selected");
    } else if (roomNew == "js") {
      btnGeneral.classList.remove("selected");
      btnJs.classList.add("selected");
      btnHomeworks.classList.remove("selected");
      btnTests.classList.remove("selected");
    } else if (roomNew == "homeworks") {
      btnGeneral.classList.remove("selected");
      btnJs.classList.remove("selected");
      btnHomeworks.classList.add("selected");
      btnTests.classList.remove("selected");
    } else {
      btnGeneral.classList.remove("selected");
      btnJs.classList.remove("selected");
      btnHomeworks.classList.remove("selected");
      btnTests.classList.add("selected");
    }

    chatroom1.room = roomNew;
    chatui.deleteLI();
    chatroom1.getChat((data) => {
      chatui.templateLI(data);
    });
  }
});

let bgColor;
if (localStorage.bgColor) {
  bgColor = localStorage.bgColor;
} else {
  bgColor = "#f9f9f9";
}

document.body.style.backgroundColor = bgColor;

btnColor.addEventListener("click", (e) => {
  e.preventDefault();

  let newColor = inputColor.value;

  document.body.style.backgroundColor = newColor;

  localStorage.setItem("bgColor", newColor);
});

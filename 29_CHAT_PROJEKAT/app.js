import Chatroom from "./chat.js";
import { chatUI } from "./ui.js";

// DOM
const ul = document.querySelector(".chat-list");
const inputMessage = document.querySelector("#message");
const btnSend = document.querySelector("#send");
const inputUsername = document.querySelector("#username");
const btnUpdate = document.querySelector("#update");
const updateMsg = document.querySelector(".update-msg");
const roomBtns = document.querySelector(".buttons-section");

let username = "anonymus";
if (localStorage.username) {
  username = localStorage.username;
}

// Objekti
let chatroom1 = new Chatroom("tests", username);

let chatui = new chatUI(ul);

chatroom1.getChat((data) => {
  chatui.templateLI(data);
});

btnSend.addEventListener("click", (e) => {
  e.preventDefault();
  let message = inputMessage.value;
  chatroom1
    .addChat(message)
    .then(() => {
      inputMessage.value = "";
      // reset() može da se nakači samo na formu
    })
    .catch((err) => {
      console.log("Greška: ", err);
    });
});

btnUpdate.addEventListener("click", (e) => {
  e.preventDefault();
  let usernameNew = inputUsername.value;
  chatroom1.username = usernameNew;
  localStorage.setItem("username", usernameNew);
  inputUsername.value = "";
  updateMsg.textContent = `Username is updatet to ${usernameNew}`;
  setTimeout(() => {
    updateMsg.textContent = "";
  }, 3000);
});

roomBtns.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    let roomNew = e.target.id;
    chatroom1.room = roomNew;
    chatui.deleteLI();
    chatroom1.getChat((data) => {
      chatui.templateLI(data);
    });
  }
});

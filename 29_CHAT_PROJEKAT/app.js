import Chatroom from "./chat.js";
import { chatUI } from "./ui.js";

// DOM
const chatList = document.querySelector(".chat-list");

let chatroom1 = new Chatroom("tests", "peter");
let chatroom2 = new Chatroom("homeworks", "jane");

// let chatroom3 = new Chatroom("js", "d");
// let chatroom4 = new Chatroom("general", "jacknicholsonjunior");
// let chatroom5 = new Chatroom("js", "");

// console.log(chatroom1.username, chatroom1.room);
// console.log(chatroom2.chats);

// chatroom1
//   .addChat("Hello world!")
//   .then(() => {
//     console.log("Uspešno dodata poruka");
//   })
//   .catch((err) => {
//     console.log("Došlo je do greške: ", err);
//   });

// chatroom2
//   .addChat("Hello Europe!")
//   .then(() => {
//     console.log("Uspešno dodata poruka");
//   })
//   .catch((err) => {
//     console.log("Došlo je do greške: ", err);
//   });

console.log(chatroom1);

let chatUI1 = new chatUI(chatList);

chatroom2.getChat((data) => {
  chatUI1.templateLI(data);
});

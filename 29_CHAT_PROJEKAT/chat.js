class Chatroom {
  constructor(r, u) {
    this.room = r;
    this.username = u;
    this.chats = db.collection("chats");
  }

  set room(r) {
    this._room = r;
  }

  get room() {
    return this._room;
  }

  set username(u) {
    if (u.length > 2 && u.length < 10 && u.trim() != "") {
      this._username = u;
    } else {
      alert("Name invalid");
    }
  }

  get username() {
    return this._username;
  }

  // Asinhroni metod addChat
  async addChat(msg) {
    let datum = new Date();
    let timestamp = firebase.firestore.Timestamp.fromDate(datum);
    // Kreiranje dokumenta koji želimo da upišemo u bazu
    let docChat = {
      message: msg,
      username: this.username,
      room: this.room,
      created_at: timestamp,
    };

    let response = await this.chats.add(docChat); // pamti dokument u bazi
    return response; // vraća promise, na koji može da se nakači .then i .catch
  }

  getChat(callback) {
    this.chats
      .where("room", "==", this.room)
      .orderBy("created_at", "asc")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type == "added") {
            callback(change.doc.data());
          }
        });
      });
  }
}

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

chatroom2.getChat((data) => {
  console.log(data);
});

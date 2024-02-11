const updateMsg = document.querySelector(".update-msg");

class Chatroom {
  constructor(r, u) {
    this.room = r;
    this.username = u;
    this.chats = db.collection("chats");
    this.unsub;
  }

  set room(r) {
    this._room = r;
    if (this.unsub) {
      this.unsub();
    }
  }

  get room() {
    return this._room;
  }

  set username(u) {
    if (u.length > 2 && u.length < 10 && u.trim() != "") {
      this._username = u;
      // zapamti u local storage
      localStorage.setItem("username", u);
      // ispiši notifikaciju da je username promenjen
      updateMsg.textContent = `Username is ${u}`;
      setTimeout(() => {
        updateMsg.textContent = "";
      }, 3000);
    } else {
      alert("Name invalid");
    }
    if (this.unsub) {
      this.unsub();
    }
  }

  get username() {
    return this._username;
  }

  // Asinhroni metod addChat za dodavanje dokumenata/četova
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

  // Metod za ispis dodatih dokumenata/četova
  getChat(callback) {
    this.unsub = this.chats
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

export default Chatroom;

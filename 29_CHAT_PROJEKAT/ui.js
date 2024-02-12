export class chatUI {
  constructor(l) {
    this.list = l;
  }

  set list(l) {
    this._list = l;
  }

  get list() {
    return this._list;
  }

  formatDate(date) {
    let dan = date.getDate();
    let mesec = date.getMonth() + 1;
    let godina = date.getFullYear();
    let sat = date.getHours();
    let min = date.getMinutes();

    // Dodajem nule ispred vrednosti koje su jednocifrene uz pomoć padStart metode, ali prvo moraju da se pretvore bojevi u string
    dan = String(dan).padStart(2, "0");
    mesec = String(mesec).padStart(2, "0");
    sat = String(sat).padStart(2, "0");
    min = String(min).padStart(2, "0");

    let now = new Date();
    let danas = now.getDate();
    danas = String(danas).padStart(2, "0");

    let datum;
    if (dan == danas) {
      datum = `today at ${sat}:${min}`;
    } else {
      datum = `${dan}.${mesec}.${godina}. - ${sat}:${min}`;
    }

    return datum;
  }

  templateLI(data) {
    let date = data.created_at.toDate();
    let datum = this.formatDate(date);
    let checkUsername = localStorage.getItem("username");
    console.log(checkUsername);

    let messageStatus;
    if (data.username == checkUsername) {
      messageStatus = "sent";
    } else {
      messageStatus = "received";
    }

    this.list.innerHTML += `
      <li class="${messageStatus}"> 
          <span class="text-label"> ${data.username}: </span>
          <span class="text-subtle"> ${data.message} </span>
          <div class="temp-wrapper"> 
          <span class="text-date"> ${datum} </span>
          <span class="trash-icon"> <img src="assets/trash-2.svg"> </span>
          </div>
      </li>
    `;
  }

  deleteLI() {
    this.list.innerHTML = "";
  }
}

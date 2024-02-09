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
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    let h = date.getHours();
    let min = date.getMinutes();

    let datum = `0${d}.0${m}.${y}. - ${h}:0${min}`;
    // izmeniti posle - dodati nule sa padStart()
    return datum;
  }

  templateLI(data) {
    let date = data.created_at.toDate();
    let datum2 = this.formatDate(date);

    this.list.innerHTML += `
      <li> 
          <span class="text-label"> ${data.username}: </span>
          <span class="text-subtle"> ${data.message} </span>
          <div class="text-date"> ${datum2} </div>
      </li>
    `;
  }
}

class Pacijent {
  constructor(i, v, t) {
    this.ime = i;
    this.visina = v;
    this.tezina = t;
  }

  set ime(i) {
    if (i.length > 0) {
      this._ime = i;
    } else {
      this._ime = "No Name";
    }
  }

  get ime() {
    return this._ime;
  }

  set visina(v) {
    if (v > 0 && v < 250) {
      this._visina = v;
    } else {
      this._visina = 190;
    }
  }

  get visina() {
    return this._visina;
  }

  set tezina(t) {
    if (t > 0 && t < 550) {
      this._tezina = t;
    } else {
      this._tezina = 100;
    }
  }

  get tezina() {
    return this._tezina;
  }

  stampaj() {
    console.log(this.ime);
    console.log(this.visina);
    console.log(this.tezina);
  }

  bmi() {
    let visina = this.visina / 100;
    return this.tezina / visina ** 2;
  }

  kritican() {
    if (this.bmi() > 40 || this.bmi() < 15) {
      return true;
    } else {
      return false;
    }
  }
}

export default Pacijent;

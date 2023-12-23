let blog1 = {
  title: "HTML",
  content: "Osnovni HTML tagovi",
  author: "Jelena",
  likes: 10,
  published: false,
};

// Ispis objekta
console.log(blog1);
console.log(typeof blog1);

// Ispis određene osobine
console.log(blog1.title);
console.log(blog1.author);
console.log(blog1["content"]);

// Izmena određene osobine
blog1.content = "HTML tabele";
console.log(blog1.content);
blog1["content"] = "HTML liste";
console.log(blog1.content);
blog1.likes = 7;
blog1.published = true;
console.log(blog1);

/////////////////////////////////////////////////////////////////////////////////

let user1 = {
  username: "JelenaMatejic",
  age: 29,
  nextAge: this.age + 1, // Kada smo u objektu njegovim svojstvima pristupamo pomoću .this
  blogs: ["Naredba grananja", "Nizovi", "Objekti"],
  login: function () {
    console.log(`Ulogovani ste`); // Funkcija u objektu = metoda
    console.log(this);
  },
  logout: function () {
    console.log("Izlogovani ste");
  },
  logBlogs: function () {
    this.blogs.forEach((element) => {
      console.log(element);
    });
  },
  hello: function () {
    return `Hello ${this.username}`;
  },
};

// ovo .this je referenca na objekat u kojem se nalazimo

user1.login(); // poziv metode
user1.logout();
user1.logBlogs();
console.log(user1.hello());
console.log(this); // globalni objekat

user1.blogs.forEach((blog) => {
  document.write(`<p>${blog}</p>`);
});

// Vežbanje

let dan1 = {
  datum: "2023/12/22",
  kisa: true,
  sunce: false,
  oblacno: true,
  temperature: [3, 4, 6, 7, 6, 4],
  // 1.
  prosecna: function () {
    let suma = 0;
    this.temperature.forEach((t) => {
      suma += t;
    });
    return suma / this.temperature.length;
  },
  // 2.
  brNatprosecnih: function () {
    let br = 0;
    let pros = this.prosecna();
    // Preko forEach petlje
    this.temperature.forEach((t) => {
      if (t > pros) {
        br++;
      }
    });
    // Preko for petlje
    /* for (let i = 0; i < this.temperature.length; i++) {
            if (this.temperature[i] > pros) { br++; }
    } */
    return br;
  },
  // 3.
  merenjaMax: function () {
    let max = this.temperature[0];
    this.temperature.forEach((t) => {
      if (max < t) {
        max = t;
      }
    });
    let br = 0;
    this.temperature.forEach((t) => {
      if (t == max) {
        br++;
      }
    });
    return br;
  },

  // 4.
  dveTemperature: function (t1, t2) {
    // Ovde treba i ispitati da li je t1 manja zapravo, a t2 veća ili ne
    let brMerenja = 0;
    // Ciljano da u t1 bude manja vrednost, a u t2 veća vrednost
    // cilj: t1 < t2
    // Ovo je kao presipanje iz jedne čaše u praznu pa onda zamena
    if (t1 > t2) {
      let c = t1;
      t1 = t2;
      t2 = c;
    }
    this.temperature.forEach((t) => {
      if (t > t1 && t < t2) {
        brMerenja++;
      }
    });
    return [t1, t2, brMerenja]; // return može da vrati više vrednosti samo preko niza
  },

  // 5.
  iznadProseka: function () {
    let broj = 0;
    let avg = this.prosecna(); // prvo staviti ovde a ne u petlji jer ne mora stalno da poziva iznova, nema potrebe
    this.temperature.forEach((e) => {
      if (e > avg) {
        broj++;
      }
    });
    if (broj > this.temperature.length / 2) {
      return true;
    } else {
      return false;
    }
  },

  // 6.
  ledenDan: function () {
    let leden = true; // ne može return unutar forEach pa mora pomoćna promenljiva
    this.temperature.forEach((e) => {
      if (e > 0) {
        leden = false; // ovde if ne mora da se završi sa else, i greška je ako ima
      }
    });
    return leden;

    /* 2. pristup preko for petlje
    for (let i = 0; i < this.temperature.length; i++) {
        if (this.temperature[i] > 0) {
            return false; // return prekida rad funkcije
        }
    } 
    return true; */
    // Break prekida samo petlju, a return prekida i petlju i funkciju
  },

  // 8.
  nepovoljan: function () {
    // Mora se ići do pretposlednjeg elementa niza, ne može do poslednjeg jer nema sledećeg za poređenje s njim i onda neće valjati, zato ovde ne može forEach jer on ide do poslednjeg i traži sledbenika kojeg nema
    for (let i = 0; i < this.temperature.length - 1; i++) {
      // Apsolutna vrednost nam ukazuje koliko smo udaljeni od nule i dobija se sa Math.abs
      if (Math.abs(this.temperature[i] - this.temperature[i + 1]) > 8) {
        return true;
      }
    }
    return false;
  },
};

console.log(`Prosečna temperatura je ${dan1.prosecna()}`);
console.log(`Broj natprosecnih merenja u danu je ${dan1.brNatprosecnih()}`);
console.log(dan1.merenjaMax());
console.log(dan1.dveTemperature(3, 6));
let vraceneVrednosti = dan1.dveTemperature(4, 7);
console.log(
  `Između temperature ${vraceneVrednosti[0]} i ${vraceneVrednosti[1]} ima ${vraceneVrednosti[2]} temperature`
);

console.log(dan1.iznadProseka());
console.log(dan1.ledenDan());
console.log(dan1.nepovoljan());

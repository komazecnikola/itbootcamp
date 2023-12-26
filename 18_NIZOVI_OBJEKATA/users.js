// Objekti unutar objekta

// niz objekata unutar objekta

let blog1 = {
  title: "IF naredba grananja!",
  likes: 50,
  dislikes: 21,
};

let blog2 = {
  title: "While petlja",
  likes: 25,
  dislikes: 36,
};

let blog3 = {
  title: "For petlja!",
  likes: 100,
  dislikes: 12,
};

/////////////////////////////////////////////////

let user1 = {
  username: "JelenaMatejic",
  age: 9,
  blogs: [blog1, blog3],
  logBlogs: function () {
    this.blogs.forEach((blog) => {
      console.log(blog.title);
    });
  },
};

let user2 = {
  username: "StefanStanimirovic",
  age: 4,
  blogs: [blog2],
  logBlogs: function () {
    this.blogs.forEach((blog) => {
      console.log(blog.title);
    });
  },
};

/////////////////////////////////////////////////

console.log(user1.blogs[0].title);
console.log(user1.blogs[0]["title"]);
console.log(user1["blogs"][0]["title"]);

user1.logBlogs();
user2.logBlogs();
/////////////////////////////////////////////////

// Jedino u JS možemo da kreiramo objekte bez klasa

// Zadatak 1

let users = [user1, user2];

// Ispis username polja iz users niza
users.forEach((u) => {
  console.log(u.username);
});

// Ispis svih naslova blogova koje su korisnici kreirali
users.forEach((u) => {
  u.logBlogs();
});

// A da nije bilo metode logBlogs

users.forEach((u) => {
  let userBlogs = u.blogs; // niz blogova korisnika
  // Iteriramo nizom objekata gde je svaki objekat po jedan blog. Iz tog objekta blog možemo uzeti naslov
  userBlogs.forEach((b) => {
    console.log(b.title);
  });
});

// Zadatak 3

users.forEach((u) => {
  let userBlogs = u.blogs;
  userBlogs.forEach((b) => {
    if (b.likes > 50) {
      console.log(b.title);
    }
  });
});

// Zadatak 2
users.forEach((u) => {
  if (u.age < 18) {
    console.log(u.username);
  }
});

// Zadatak 4
users.forEach((u) => {
  if (u.username == "JohnDoe") {
    u.logBlogs();
  }
});

// Zadatak 5

users.forEach((u) => {
  let sumLikes = 0; // sumira lajkove za svakog korisnika posebno
  u.blogs.forEach((b) => {
    sumLikes += b.likes; // ovde dodaje lajkove svakog bloga na sumu jednog korisnika
  });

  if (sumLikes > 100) {
    console.log(u.username);
  }
});

// Zadatak 6

let suma = 0;
let brBlogova = 0;
users.forEach((u) => {
  u.blogs.forEach((b) => {
    suma = suma + b.likes;
    brBlogova++;
  });
});

let prosek = suma / brBlogova;

console.log(prosek);

users.forEach((user) => {
  user.blogs.forEach((blog) => {
    if (blog.likes > prosek) {
      console.log(blog.title);
    }
  });
});

// Zadatak 7

let lajkovi = 0;
let dislajkovi = 0;
let br = 0;

users.forEach((u) => {
  u.blogs.forEach((b) => {
    lajkovi = lajkovi + b.likes;
    dislajkovi = dislajkovi + b.dislikes;
    br++;
  });
});

let pozProsek = lajkovi / br;
let negProsek = dislajkovi / br;

console.log(pozProsek);
console.log(negProsek);

users.forEach((user) => {
  user.blogs.forEach((blog) => {
    if (blog.likes > pozProsek && blog.dislikes < negProsek) {
      console.log(blog.title);
    }
  });
});

// Zadatak - vremenska prognoza

// Zadatak 1

let dan1 = {
  datum: "2023/12/22",
  kisa: true,
  sunce: false,
  oblacno: true,
  temperature: [-3, -4, -6, -7, -6, -4, -10, 0],
};
let dan2 = {
  datum: "2023/12/24",
  kisa: false,
  sunce: true,
  oblacno: false,
  temperature: [3, 4, 6, 7, 9, 8, 5, 3],
};
let dan3 = {
  datum: "2023/12/25",
  kisa: false,
  sunce: true,
  oblacno: true,
  temperature: [3, 4, 6, 6, 7, 5, 4, 3],
};

let dani = [dan1, dan2, dan3];

// Zadatak 2

let maxBrMerenja = dani[0].temperature.length;
let indeksPrvog = 0;
let indeksPoslednjeg = 0;
dani.forEach((d, indeks) => {
  if (maxBrMerenja < d.temperature.length) {
    maxBrMerenja = d.temperature.length;
    indeksPrvog = indeks;
  }

  if (maxBrMerenja <= d.temperature.length) {
    maxBrMerenja = d.temperature.length;
    indeksPoslednjeg = indeks;
  }
});

// Ispisati svaki takav datum

dani.forEach((d) => {
  if (d.temperature.length == maxBrMerenja) {
    console.log(d.datum);
  }
});

// Ispisati samo prvi datum
// 1. način
console.log(dani[indeksPrvog].datum);

// 2. način
for (let i = 0; i < dani.length; i++) {
  if (maxBrMerenja == dani[i].temperature.length) {
    console.log(dani[i].datum);
    break; // break ne može da se koristi u forEach već samo ovde u for
  }
}

// Ispisati samo poslednji datum
console.log(dani[indeksPoslednjeg].datum);

// 2. način

for (let i = dani.length - 1; i >= 0; i--) {
  if (maxBrMerenja == dani[i].temperature.length) {
    console.log(dani[i].datum);
    break;
  }
}

// Zadatak 3

let suncaniDani = 0;
let kisniDani = 0;
let oblacniDani = 0;

dani.forEach((dan) => {
  if (dan.sunce) {
    suncaniDani++; // ne mora dan.sunce == true; jer po defaultu traži true
  }
  if (dan.kisa) {
    kisniDani++;
  }
  if (dan.oblacno) {
    oblacniDani++;
  }
});

console.log(suncaniDani);
console.log(kisniDani);
console.log(oblacniDani);

// Zadatak 4

// Prebaciti ovo u arrow funkciju - ubucatiti u => {} pa umesto "dani" staviti "niz"
let ukupanBrojMerenja = 0;
let ukupnaSumaMerenja = 0;

dani.forEach((dan) => {
  ukupanBrojMerenja = ukupanBrojMerenja + dan.temperature.length;

  for (let i = 0; i < dan.temperature.length; i++) {
    ukupnaSumaMerenja = ukupnaSumaMerenja + dan.temperature[i];
  }
});

let prosecnaUkupnaTemp = ukupnaSumaMerenja / ukupanBrojMerenja;

console.log(ukupanBrojMerenja);
console.log(ukupnaSumaMerenja);
console.log(prosecnaUkupnaTemp);

let brojDana = 0;

dani.forEach((d) => {
  let brojMerenjaDan = 0; // mora unutra da bi resetovao brojeve i merio ponovo
  let sumaMerenjaDan = 0;
  d.temperature.forEach((temp) => {
    sumaMerenjaDan = sumaMerenjaDan + temp;
    brojMerenjaDan++;
  });
  let prosekDan = sumaMerenjaDan / brojMerenjaDan;

  console.log(prosekDan);
  if (prosekDan > prosecnaUkupnaTemp) {
    brojDana++; // mora unutra da bi uporedio određeni dan sa ukupnim prosekom
  }
});

console.log(brojDana);

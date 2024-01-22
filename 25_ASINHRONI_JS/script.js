const request = new XMLHttpRequest();

// request.addEventListener("readystatechange", function () {
//   // način da detektujemo kada smo dobili kompletan odgovor od servera, mora da bude 4
//   // pre nego što state postane 4 mi nemamo responseText za ispisivanje
//   if (request.readyState == 4 && request.status == 200) {
//     let data = JSON.parse(request.responseText);
//     console.log(data);
//     console.log(data[5].title);
//   } else if (request.readyState == 4) {
//     console.log("Desila se greška");
//   }
// });
// request.open("GET", "https://jsonplaceholder.typicode.com/todos");
// request.send();

// Postavka zadatka
request.addEventListener("readystatechange", function () {
  if (request.readyState == 4 && request.status == 200) {
    let users = JSON.parse(request.responseText);

    for (let i = 0; i < users.length; i++) {
      console.log(users[i]);
    }
  }
});
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();

// Zadatak 1
request.addEventListener("readystatechange", function () {
  if (request.readyState == 4 && request.status == 200) {
    let users = JSON.parse(request.responseText);

    for (let i = 0; i < users.length; i++) {
      if (users[i].website.includes(".com")) {
        console.log(users[i].website);
      }
    }
  }
});
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();

// Zadatak 2
request.addEventListener("readystatechange", function () {
  if (request.readyState == 4 && request.status == 200) {
    let users = JSON.parse(request.responseText);

    for (let i = 0; i < users.length; i++) {
      if (users[i].name.includes("Clementin")) {
        console.log(users[i]);
      }
    }
  }
});
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();

// Zadatak 3
request.addEventListener("readystatechange", function () {
  if (request.readyState == 4 && request.status == 200) {
    let users = JSON.parse(request.responseText);

    for (let i = 0; i < users.length; i++) {
      if (
        users[i].company.name.includes("LLC") ||
        users[i].company.name.includes("Group")
      ) {
        console.log(users[i]);
      }
    }
  }
});
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();

// Zadatak 4
request.addEventListener("readystatechange", function () {
  if (request.readyState == 4 && request.status == 200) {
    let data = JSON.parse(request.responseText);

    let gradovi = [];
    data.forEach((user) => {
      if (
        user.company.name.includes("Group") ||
        user.company.name.includes("LLC")
      ) {
        if (gradovi.includes(user.address.city) === false)
          gradovi.push(user.address.city);
      }
    });
    console.log(gradovi);
  }
});
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();

// Zadatak 5
request.addEventListener("readystatechange", function () {
  if (request.readyState == 4 && request.status == 200) {
    let users = JSON.parse(request.responseText);

    let br = 0;
    for (let i = 0; i < users.length; i++) {
      if (
        Number(users[i].address.geo.lat) < 0 &&
        Number(users[i].address.geo.lng) < 0
      ) {
        br++;
      }
    }
    console.log(br);
  }
});
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();

// Niz Objekata

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

let arrBlogs = [blog1, blog2, blog3];

// Ispis niza objekata
console.log(arrBlogs);

// Ispis jednog elementa iz niza objekata
console.log(arrBlogs[1]);

// Ispis jednog svojstva iz niza objekata
console.log(arrBlogs[1].title);
console.log(arrBlogs[1]["title"]);

// Ispis naslova svih elemenata iz niza objekata - korisćenjem for petlje

for (let i = 0; i < arrBlogs.length; i++) {
  console.log(arrBlogs[i].title);
}

arrBlogs[1].title = "While ciklus!";
// Ispis naslova svih elemenata iz noza objekata - korišćenjem forEach petlje
arrBlogs.forEach((obj) => {
  console.log(obj.title);
});

// Zadatak 1

arrBlogs.forEach((obj) => {
  console.log(obj.likes);
});

let sumLikes = (arr) => {
  let sum = 0;
  arr.forEach((obj) => {
    sum += obj.likes;
  });

  return sum;
};

console.log(sumLikes(arrBlogs));

// Zadatak 2

let avgLikes = (arr) => {
  let s = sumLikes(arr);
  let n = arr.length;
  let avg = s / n;
  return avg;
};

console.log(avgLikes(arrBlogs));

// Zadatak 3

let blogTitles1 = (arr) => {
  arr.forEach((blog) => {
    if (blog.likes > blog.dislikes) {
      console.log(blog.title);
    }
  });
};

blogTitles1(arrBlogs);

// Zadatak 4

let blogTitles2 = (arr) => {
  arr.forEach((blog) => {
    if (blog.likes >= blog.dislikes * 2) {
      console.log(blog.title);
    }
  });
};

blogTitles2(arrBlogs);

// Zadatak 5

let blogTitles3 = (arr) => {
  arr.forEach((blog) => {
    // if (blog.title.endsWith("!")) {
    //   console.log(blog.title);
    // }

    if (blog.title[blog.title.length - 1] == "!") {
      console.log(blog.title);
    }
  });
};

blogTitles3(arrBlogs);

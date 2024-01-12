import generateImage from "./general.js";

let generateList = (parent) => {
  let lista = document.createElement("ul");
  lista.style.listStyle = "none";
  parent.appendChild(lista);
  return lista;
};

let generateItem = (parent, src) => {
  let li = document.createElement("li");
  parent.appendChild(li);
  let img = generateImage(src);
  li.append(img);
  return li;
};

export { generateList, generateItem };

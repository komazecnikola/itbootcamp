let generateImage = (src) => {
  let img = document.createElement("img");
  img.src = src;
  img.alt = "Alternativni tekst";
  img.width = "300";
  return img;
};

export { generateImage };

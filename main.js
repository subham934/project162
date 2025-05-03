// Toggle Search bar

function toggleSearch() {
  const search = document.querySelector(".search");
  search.classList.toggle("active");
}

// Toggle 3D flipping effect

function toggleFlip() {
  const imgBox = document.querySelector(".imgBox");
  const btn = document.querySelector(".btn");
  imgBox.classList.toggle("active");
  btn.classList.toggle("active");
}

// Swap the main image

function changeImg(img) {
  const foodImg = document.querySelector(".food-img");
  foodImg.src = `./images/${img}`;
}

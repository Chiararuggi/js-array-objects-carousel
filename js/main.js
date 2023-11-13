let currentImg = 0;
let allImages = null;

const images = [
  {
    image: "./img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "./img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "./img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "./img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "./img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

function createImages(images) {
  let result = `
    <div class="img-box">
        <img class="image" src="${images.image}" >
        <p class="title">${images.title}</p>
        <p class="text">${images.text}</p>
    </div>`;

  return result;
}

function renderImages() {
  let myContainer = document.getElementById("my-id");
  myContainer.innerHTML = "";

  for (let i = 0; i < images.length; i++) {
    const ciccio = images[i];
    const createdImage = createImages(ciccio);
    myContainer.innerHTML += createdImage;
  }
}

function activeImg() {
  allImages = document.querySelectorAll(".img-box");
  allImages[currentImg].classList.add("active");
}

function changeActiveImgUp() {
  if (currentImg < images.length - 1) {
    allImages[currentImg].classList.remove("active");
    currentImg++;
    allImages[currentImg].classList.add("active");
  }
};

function changeActiveImgDown() {
  if (currentImg > 0) {
    allImages[currentImg].classList.remove("active");
    currentImg--;
    allImages[currentImg].classList.add("active");
  }
};

//execution

renderImages();
activeImg();

document.getElementById("upButton").addEventListener("click", function () {
  changeActiveImgUp();
});

document.getElementById("downButton").addEventListener("click", function () {
  changeActiveImgDown();
});

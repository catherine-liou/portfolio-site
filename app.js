// const arrowButton = document.getElementsByClassName(arrows)
// var images = [, ], curIndex = 0;

const rightArrow = document.getElementById("right-arrow");
const leftArrow = document.getElementById("left-arrow");
const homepageSection = document.getElementById("homepage-section-1");


let currentIndex = 0;
const imageUrls = [
`./images/hotel_restaurant\ 2.jpeg`,
`./images/room\ 1_bedroom.jpeg`,
`./images/hotel_lobby.jpeg`
];

let currentImageIndex = 0;

// Function to update the background image
function updateBackgroundImage() {
  homepageSection.style.backgroundImage = `url(${backgroundImageUrls[currentImageIndex]})`;
}

// Event listener for the right arrow
rightArrow.addEventListener("click", () => {
  currentImageIndex++;
  if (currentImageIndex >= backgroundImageUrls.length) {
    currentImageIndex = 0;
  }
  updateBackgroundImage();
});

// Event listener for the left arrow
leftArrow.addEventListener("click", () => {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = backgroundImageUrls.length - 1;
  }
  updateBackgroundImage();
});

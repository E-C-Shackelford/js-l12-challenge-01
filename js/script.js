const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
  const res = await fetch("https://picsum.photos/v2/list?limit=100");
  const images = await res.json();
  // console.log(images);
  selectRandomImage(images);
};
// getImage();  // move this getImage() call to inside the event listener so that the program won't retrieve the API data until the button is clicked

const selectRandomImage = function (images) {
  const randomIndex = Math.floor(Math.random() * images.length);

  // test if randomIndex is pulling a random whole number between 0 and 99
  // console.log(randomIndex);

  // in the value of randomImage, use randomIndex to grab a single image from the images array
  const randomImage = images[randomIndex];
  //console.log(randomImage); // in the console, you should see a single, random image object

  displayImage(randomImage);
};

const displayImage = function (randomImage) {
  // access the author property from the randomImage object
  const author = randomImage.author;

  const imageAddress = randomImage.download_url;

  authorSpan.innerText = author;

  // set the src attribute of the img variable to the value of the imageAddress variable
  img.src = imageAddress;

  imgDiv.classList.remove("hide");
};

button.addEventListener("click", function () {
  // now, the program will retrieve the API data once the button is clicked
  getImage();
});

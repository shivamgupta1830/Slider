const right = document.querySelector(".right");
const left = document.querySelector(".left");

const images = document.querySelectorAll(".image");

let counter = 0;
const length = images.length;
// let length = images.length;

// right.addEventListener("click", () => {
//   if (number < length) {
//     slider.style.transform = `translateX(-${number * 700}px)`;
//     number++;
//   } else {
//     slider.style.transform = `translateX(-0px)`;
//     number = 1;
//   }
// });

// left.addEventListener("click", () => {
//   if (number > 1) {
//     slider.style.transform = `translateX(-${(number - 2) * 700}px)`;
//     number--;
//   } else {
//     slider.style.transform = `translateX(-${(length - 1) * 700}px)`;
//     number = length;
//   }
// });
slideImage = () => {
  images.forEach((image, index) => {
    image.style.transform = `translateX(-${counter * 700}px)`;
    console.log(index);
  });
};
right.addEventListener("click", () => {
  if (counter < length - 1) {
    counter++;
    slideImage();
  } else {
    counter = 0;
    slideImage();
  }
});

left.addEventListener("click", () => {
  if (counter >= 1) {
    counter--;
    slideImage();
  } else {
    counter = length - 1;
    slideImage();
  }
});

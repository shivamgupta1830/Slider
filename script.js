const right = document.querySelector(".right");
const left = document.querySelector(".left");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");
const slider = document.querySelector(".slider");

// image count == counter
let counter = 0;
const length = images.length;

// sliding function
slideImage = () => {
  slider.style.transform = `translateX(-${counter * 700}px)`;
};

// bottom buttons functionality ######################################

for (i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "#000000bf";

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${index * 700}px)`;
    button.style.backgroundColor = "#000000bf";
    counter = index;
  });
});

// upper buttons functionality ###############################

right.addEventListener("click", () => {
  if (counter < length - 1) {
    counter++;
    slideImage();
  } else {
    counter = 0;
    slideImage();
  }
  resetBg();
  buttons[counter].style.backgroundColor = "#000000bf";
});

left.addEventListener("click", () => {
  if (counter >= 1) {
    counter--;
    slideImage();
  } else {
    counter = length - 1;
    slideImage();
  }

  resetBg();
  buttons[counter].style.backgroundColor = "#000000bf";
});

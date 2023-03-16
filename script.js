const gridContainer = document.querySelector(".grid-container");
const slider = document.getElementById("myRange");
const output = document.querySelector("#slider-output");
// button selectors
const blackbtn = document.getElementById("black");
const rainbowbtn = document.getElementById("rainbow");
const eraserbtn = document.getElementById("eraser");
const clearbtn = document.getElementById("clear");
output.innerHTML = "16x16";
let defaultColor = "black";
let rainbowColor = "rainbow";
let defaulSize = 16;

// function clearGrid(e) {
//   location.reload()
// }
// clearbtn.addEventListener("click", () => {
//   clear.btnclassList.add("active");
// });

function currentColor(newColor) {
  defaultColor = newColor;
  console.log(defaultColor);
}

rainbowbtn.addEventListener("click", currentColor(rainbowColor));
//console.log(defaultColor);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function gridSetup(size) {
  gridContainer.style.gridTemplateRows = `repeat(${size},1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${size},1fr)`;
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.addEventListener("click", changeColor);
      // gridItem.addEventListener("mousedown", changeColor);
      gridContainer.appendChild(gridItem);
    }
  }
}

function changeColor(e) {
  // if (e.type === "mouseover" && !mouseDown) return;
  // sets random RGB values for rainbow color
  // const randomR = Math.floor(Math.random() * 256);
  // const randomG = Math.floor(Math.random() * 256);
  // const randomB = Math.floor(Math.random() * 256);
  // if (defaultColor == "rainbow") {
  //   e.target.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
  //}
  //else
  e.target.style.backgroundColor = defaultColor;
}

gridSetup(defaulSize);

// slider value display
// theres probably a better way to display values but this is good for now
slider.oninput = function () {
  if (this.value == "1") {
    output.innerHTML = "8x8";
  } else if (this.value == "2") {
    output.innerHTML = "16x16";
  } else if (this.value == "3") {
    output.innerHTML = "32x32";
  } else {
    output.innerHTML = "64x64";
  }
};

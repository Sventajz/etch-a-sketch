const gridContainer = document.querySelector(".grid-container");
const slider = document.getElementById("myRange");
const output = document.querySelector("#slider-output");


output.innerHTML = "16x16";
// sets the initial color to black see function changeColor for color logic
let defaultColor = "black";
// sets the initial grid size to a 16x16 grid
let gridSize = 16;

// this sections checks if the mouse buttons are pressed or not
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// this function changes the default color string to a given statement
function currentColor(e) {
  defaultColor = e;
}


function gridSetup(size) {
  gridContainer.style.gridTemplateRows = `repeat(${size},1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${size},1fr)`;
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.addEventListener("mouseover", changeColor);
      gridItem.addEventListener("mousedown", changeColor);
      gridContainer.appendChild(gridItem);
    }
  }
}
gridSetup(gridSize);
function clearGrid() {
  gridContainer.innerHTML = ' ';
  gridSetup(gridSize);
}




function changeGridSize(){
  
  if (slider.value == "1") {
    gridSize = "8";
  } else if (slider.value == "2") {
    gridSize = "16";
  } else if (slider.value == "3") {
    gridSize = "32";
  } else {
    gridSize = "64";
  }

  clearGrid();
}

// button selectors
const blackbtn = document.getElementById("black");
const rainbowbtn = document.getElementById("rainbow");
const eraserbtn = document.getElementById("eraser");
const clearbtn = document.getElementById("clear");


blackbtn.onclick = () => currentColor('black')
rainbowbtn.onclick = () => currentColor('rainbow');
eraserbtn.onclick = () => currentColor('eraser');
clearbtn.onclick = () => clearGrid();




function changeColor(e) {
  // this logical statement prevents drawing on the grid if the mouse button is 
  // not being held down
  if (e.type === "mouseover" && !mouseDown) return;
  //sets random RGB values for rainbow color
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  // these if statements check what string value is of the defaultColor variable
  if (defaultColor == "rainbow") {
    e.target.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
  }
  else if (defaultColor == "black"){
  e.target.style.backgroundColor = '#000000';
  }
  else e.target.style.backgroundColor = '#FFFFFF';
}



// displays the slider values in the DOM
// also each value calls the changeGridSize function for grid resizing
slider.oninput = function () {
  if (this.value == "1") {
    output.innerHTML = "8x8";
    changeGridSize(slider.value)
  } else if (this.value == "2") {
    output.innerHTML = "16x16";
    changeGridSize(slider.value)
  } else if (this.value == "3") {
    output.innerHTML = "32x32";
    changeGridSize(slider.value)
  } else {
    output.innerHTML = "64x64";
    changeGridSize(slider.value)
  }
};


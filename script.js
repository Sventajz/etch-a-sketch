console.log('hello')
const gridContainer = document.querySelector('.grid-container');
let default_size = 16;

function gridSetup(size){
  gridContainer.style.gridTemplateRows = `repeat(${size},1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${size},1fr)`;

  for (i=0; i<size*size; i++){
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
  }

}

gridSetup(default_size);
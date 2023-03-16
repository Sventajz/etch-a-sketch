console.log('hello')
const gridContainer = document.querySelector('.grid-container');
let defaulSize = 64;
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function gridSetup(size){
  gridContainer.style.gridTemplateRows = `repeat(${size},1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${size},1fr)`;
  for (i=0; i<size; i ++){
    for (j=0; j<size; j ++){
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridItem.addEventListener('mouseover', changeColor)
      gridItem.addEventListener('mousedown', changeColor)
      gridContainer.appendChild(gridItem);
      
    }
  }

}

function changeColor(e){
  if(e.type === 'mouseover' && !mouseDown) return
  const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
}

gridSetup(defaulSize);





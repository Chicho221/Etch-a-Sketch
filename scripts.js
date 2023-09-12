const DEFAULT_SIZE = 16; //Default size of a grid

let gridSize = DEFAULT_SIZE;
const container = document.querySelector('#container');
let changeValue = document.querySelector('#changeSize');

changeValue.addEventListener('click',() =>{
    
    changeValue = prompt('Enter amount of squeres per side (max:100):');
    gridSize = parseInt(changeValue);
    reset();
    createGrid(gridSize);
});

function createGrid(){
    for(let i = 0; i < gridSize ** 2; i++){ //Creates squeres to fill board
        let squereWidth = 600/gridSize + 'px';
        let squereHeight = 600/gridSize + 'px';
        const gridSquere = document.createElement('div');
        gridSquere.classList.add('gridSquere');
        gridSquere.style.cssText = `width:${squereWidth}; height:${squereHeight};`;
        
        gridSquere.addEventListener('mouseover',() =>{ //On hover changes background color
            gridSquere.style.cssText += 'background-color: blue';
        });
        
        container.appendChild(gridSquere);
    }  
}

window.onload = createGrid();

function reset() {
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
}
const DEFAULT_SIZE = 16; //Default size of a grid

let gridSize = DEFAULT_SIZE;
let squereWidth = 600/gridSize + 'px';
let squereHeight = 600/gridSize + 'px';
const container = document.querySelector('#container');

function createGrid(){
    for(let i = 0; i < gridSize ** 2; i++){ //Creates squeres to fill board
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
const DEFAULT_SIZE = 16; //Default size of a grid

let gridSize = DEFAULT_SIZE;

const container = document.querySelector('#container');

let squereWidth = 600/gridSize + 'px';
let squereHeight = 600/gridSize + 'px';
for(let i = 1; i < gridSize ** 2; i++){ //Creates squeres to fill board
    const gridSquere = document.createElement('div');
    gridSquere.classList.add('gridSquere');
    gridSquere.style.cssText = `width:${squereWidth}; height:${squereHeight};`;
    container.appendChild(gridSquere);
}
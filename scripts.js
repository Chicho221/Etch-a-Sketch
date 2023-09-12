const DEFAULT_SIZE = 16; //Default size of a grid

let gridSize = DEFAULT_SIZE;
const container = document.querySelector('#container');
const rainbowBtn = document.querySelector('#rainbow');
const clearBtn = document.querySelector('#clear');
let changeValue = document.querySelector('#changeSize');

changeValue.addEventListener('click',() =>{   
    changeValue = prompt('Enter amount of squeres per side (max:100):');
    gridSize = parseInt(changeValue);
        if(isNaN(gridSize)){
            alert('That\'s not a number.');
        }else if(gridSize > 100){
            alert('That\'s too many squeres.');
        }else if(gridSize < 0){
            alert('This number is negative.')
        }else{
            resetGrid();
            createGrid(gridSize);
        }  
});
clearBtn.addEventListener('click',() =>{
    resetGrid();
    createGrid();
});

function randomColor(){ //Generates random number to 255
    let randomColor = Math.floor(Math.random()*255);
    gridSquere.addEventListener('mouseover',() =>{ //On hover changes background color to random color
    gridSquere.style.cssText += `background-color: ${randomColor}, ${randomColor}, ${randomColor};`;
    });
}

function createGrid(){
    for(let i = 0; i < gridSize ** 2; i++){ //Creates squeres to fill board
        let squereWidth = 600/gridSize + 'px';
        let squereHeight = 600/gridSize + 'px';
        const gridSquere = document.createElement('div');
        gridSquere.classList.add('gridSquere');
        gridSquere.style.cssText = `width:${squereWidth}; height:${squereHeight};`;
        gridSquere.addEventListener('mouseover',() =>{ //On hover changes background color to blue
        gridSquere.style.cssText += `background-color: blue;`;
        });
        container.appendChild(gridSquere);
    }  
}

function resetGrid() {
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
}



window.onload = createGrid();


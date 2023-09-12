const DEFAULT_SIZE = 16; //Default size of a grid

let gridSize = DEFAULT_SIZE;
const container = document.querySelector('#container');


/* Create grid */
function createGrid(){
    for(let i = 0; i < gridSize ** 2; i++){ //Creates squeres to fill board
        let squereWidth = 600/gridSize + 'px';
        let squereHeight = 600/gridSize + 'px';
        const gridSquere = document.createElement('div');
        gridSquere.classList.add('gridSquere');
        gridSquere.style.cssText += `width:${squereWidth}; height:${squereHeight};`;
        container.appendChild(gridSquere);
    }  
}
createGrid();


/* Rainbow Button */
const rainbowBtn = document.querySelector('#rainbow');
let colorDraw = false;

function randomInteger(max){
    return Math.floor(Math.random() * (max +1));
};
function randomRgbColor(){
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    colorDraw = [r,g,b];
};
let rainbowBtnState = false;
rainbowBtn.addEventListener('click', () =>{
    if(rainbowBtnState === true){
        rainbowBtnState = false;
        colorDraw = false;
    }else{
        rainbowBtnState = true;
        randomRgbColor();
    }
    return rainbowBtnState;
});

/* Draws with mouseover on grid */
let gridSquere = container.children;
function drawMouseover(){
    for(i = 0;i < gridSize * gridSize; i++){
        gridSquere[i].addEventListener('mouseover',(event) =>{
            if(colorDraw == false){
            event.target.style.backgroundColor = 'rgb(122, 210, 236)';
            } else{
                randomRgbColor();
            event.target.style.backgroundColor = `rgb(${colorDraw[0]},${colorDraw[1]},${colorDraw[2]})`;
            }
        });
    };
};
drawMouseover();
/* Clear Button */

const clearBtn = document.querySelector('#clear');
function resetGrid() {
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
}
clearBtn.addEventListener('click',() =>{
    resetGrid();
    createGrid();
    drawMouseover();//Stops working after clearing grid (NEED FIX)
                            //Works fine with function here tho.
});


/* Size Grid Button */

const changeBtn = document.querySelector('#changeSize');
let changeValue;
changeBtn.addEventListener('click',() =>{
    changeValue = prompt('Enter amount of squeres per side (max:100):');
    sizeGrid(changeValue);
});
function sizeGrid(){
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
            drawMouseover();
        }
    };


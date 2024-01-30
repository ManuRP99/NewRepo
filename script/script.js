const rows = 20;
const columns = 20;
const arrayDiv = document.querySelector('#array');
const genArrayBtn = document.getElementById('generate-array');
const randomPixelBtn = document.getElementById('random-pixel');


function genArray(c, r) {
    let array = new Array(c);
     for (let i = 0; i < r; i++) {
        array[i] = new Array(c);
    }
return array;
}

const emptyArray = genArray(columns, rows);
console.table(emptyArray);

function showArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++){
            let emptyCell = document.createElement('div');
            let pixelId = i + ' ' + j;
            emptyCell.className = 'pixel';
            emptyCell.setAttribute('id', pixelId);
            arrayDiv.appendChild(emptyCell);
        }
    }
    genArrayBtn.className += 'hidden';
    randomPixelBtn.classList.remove('hidden');
}



function aliveCell(col, row) {
    let target = document.getElementById(col + ' ' + row);
    target.classList.add('alive');
}

function showRandomCell() {
    let ra = Math.floor(Math.random() *20);
    let rb = Math.floor(Math.random() *20);
    aliveCell(ra, rb);
    
};

//works until here
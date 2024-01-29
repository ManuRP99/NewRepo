const rows = 20;
const columns = 20;
const arrayDiv = document.querySelector('#array');
const genArrayBtn = document.getElementById('generate-array');





function genArray() {
   
    for (let y = 0; y < rows; y++){
        for (let x = 0; x < columns; x++) {
            let pixelId = y + '-' + x;
            let dArray = document.createElement('div');
            dArray.className = 'pixel';
            dArray.setAttribute('id', pixelId);
            arrayDiv.appendChild(dArray);
        }
    }
    
genArrayBtn.className += 'hidden';


}

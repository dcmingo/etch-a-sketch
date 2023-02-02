


const container = document.getElementById("container");

function makeRows(rows, cols){

    while (container.firstChild){
        container.removeChild(container.lastChild);
    }
    
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    
    
    for (c = 0; c < (rows * cols); c++){
        let cell = document.createElement('div');
        cell.innerText = c +1;
        container.appendChild(cell).className = 'grid-item';
    }
}

function getInput(){
    const btn = document.getElementById('inputBtn');
    var size = prompt('How many rows and columns?');
    if (size){ makeRows(size, size)}
    
}

makeRows(16,16)
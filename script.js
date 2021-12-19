const container = document.querySelector('#container');
let sketchies = 16;

initializeGrid();

function initializeGrid(sketchies){
    sketchies = Number(prompt('How many Sketchie boxes per side? (1-100)','16'));  
    let intViewportWidth = window.innerWidth / 2;
    let boxWidth = (intViewportWidth / sketchies);
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    for (i = 0; i < sketchies; i++){
        for (j =0; j < sketchies; j++){
            const pixelBox = document.createElement('div');
            
            pixelBox.style.width = boxWidth + "px";
            pixelBox.style.height = boxWidth + "px";
            
            pixelBox.classList.add('pixel');
            pixelBox.addEventListener('mouseover', function(e){
                e.target.style.backgroundColor = 'black';
            });

            container.appendChild(pixelBox); 
        }
    }
}

function clearGrid(){
    elements = document.getElementsByClassName('pixel');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="white";
        
        elements[i].addEventListener('mouseover',function(e){
            e.target.style.backgroundColor = 'black';
        });
    }

}

function rainbowGrid(){
    
    elements = document.getElementsByClassName('pixel');
    for (var i = 0; i < elements.length; i++) {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);

        elements[i].addEventListener('mouseover',function(e){
            e.target.style.backgroundColor = "#" + randomColor;
        });
    }

        
    
}


var clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', clearGrid, false);



var rainbowButton = document.querySelector(".rainbow");
rainbowButton.addEventListener('click', rainbowGrid, false);

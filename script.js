const container = document.querySelector('#container');
let sketchies = 16; //default grid size

initializeGrid();

function initializeGrid(sketchies){
    sketchies = Number(prompt('How many Sketchie boxes per side? (1-100)','16'));  
    let intViewportWidth = window.innerWidth / 2; //container size is 50 percent of viewport width
    let boxWidth = (intViewportWidth / sketchies); //actual width and height of pixelBox
        
    for (i = 0; i < sketchies; i++){
        for (j =0; j < sketchies; j++){
            const pixelBox = document.createElement('div'); 
            
            pixelBox.style.width = boxWidth + "px";
            pixelBox.style.height = boxWidth + "px";
            
            pixelBox.classList.add('pixel');
            pixelBox.addEventListener('mouseover', function(e){
                e.target.style.backgroundColor = 'black';

            pixelBox.addEventListener('touchmove', function(e){
                e.target.style.backgroundColor = 'black';
                });    
            });

            container.appendChild(pixelBox); //adds div elements to page
        }
    }
}

function clearGrid(){
    elements = document.getElementsByClassName('pixel');
    for (var i = 0; i < elements.length; i++) {   //loop through pixelBoxes and set background color to white
        elements[i].style.backgroundColor="white";
        
        elements[i].addEventListener('mouseover',function(e){ //also reset "pen" to black
            e.target.style.backgroundColor = 'black';

        elements[i].addEventListener('touchmove',function(e){ //also reset "pen" to black
            e.target.style.backgroundColor = 'black';    
        });
    });
    }
}

function rainbowGrid(){
    
    elements = document.getElementsByClassName('pixel');
    for (var i = 0; i < elements.length; i++) {    //loop through PixelBoxes and set pen to randomcolor
        let randomColor = Math.floor(Math.random()*16777215).toString(16);

        elements[i].addEventListener('mouseover',function(e){
            e.target.style.backgroundColor = "#" + randomColor;
        });

        elements[i].addEventListener('touchmove',function(e){
            e.target.style.backgroundColor = "#" + randomColor;
        });
    }

        
  
}

//add click event to clear button
var clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', clearGrid, false);


//add click event to rainbow button
var rainbowButton = document.querySelector(".rainbow");
rainbowButton.addEventListener('click', rainbowGrid, false);

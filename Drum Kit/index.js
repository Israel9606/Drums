// creates an array by selecting all the buttons in the html document

var array=document.querySelectorAll("button");


//added event listeners for all keys and calls both key pressed function and animation function.

document.addEventListener("keydown",function(event){
    keyPressedFunc(event.key)
    animation(event.key);
});


for(var i=0; i<=array.length;i++){
  
    array[i].addEventListener("click", function(){
        var text=this.innerHTML;
        keyPressedFunc(text);
        animation(text);

    });
}

// function that checks which key was pressed so that it plays the sound that its supposed to play using a switch statement

function keyPressedFunc(keyPressed){

    switch(keyPressed){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break
        case "k":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break
        case "l":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break
        default:console.log(keyPressed);
    }
}

// animation function, implements a timer with wich it adds a class from css that changes the color and then removes it so that it 
//simulates a flash

function animation(currentkey){
   var activeButton= document.querySelector("."+currentkey);
   activeButton.classList.add("pressed");

   setTimeout(function() {
       
    activeButton.classList.remove("pressed");
   }, 100);

}



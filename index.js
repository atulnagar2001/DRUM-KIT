for(var i = 0 ; i<=6 ; i++){
  document.querySelectorAll("button")[i].addEventListener("click", handleclick);
}
// addEventListener in javascript is used to identify events from user and order specific functions.
function handleclick(){
  var buttoninnerhtml = this.innerHTML;
    makesound(buttoninnerhtml);
    animation(buttoninnerhtml);
}

document.addEventListener("keypress",function(event){
       makesound(event.key);
       animation(event.key);
})

function makesound(key){
  switch (key) {
    case "w" :
       var tom1 = new Audio("sounds/tom-1.mp3");
       tom1.play();
       break;
    case "a" :
       var tom2 = new Audio("sounds/tom-2.mp3");
       tom2.play();
       break;
    case "s" :
       var tom3 = new Audio("sounds/tom-3.mp3");
       tom3.play();
       break;
    case "d" :
       var tom4 = new Audio("sounds/tom-4.mp3");
       tom4.play();
       break;
    case "j" :
       var snare = new Audio("sounds/snare.mp3");
       snare.play();
       break;
    case "k" :
       var crash = new Audio("sounds/crash.mp3");
       crash.play();
       break;
    case "l" :
       var kick = new Audio("sounds/kick-bass.mp3");
       kick.play();
       break;
    default:

  }
}

function animation(design){
  var random = document.querySelector("."+design);
  random.classList.add("pressed");
  setTimeout(function(){
    random.classList.remove("pressed");
  },100);
}






// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();

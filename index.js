
var buttons=document.querySelectorAll(".drum").length;
function handle(){
  var button=this.innerHTML;
  makeSound(button);
 buttonAnimation(button);
}

// Mouse Events
for(var i=0;i<buttons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",handle);
}

// Keyboard Events
document.addEventListener("keydown",function(event){
  makeSound(event.key);
 buttonAnimation(event.key)
});

// makeSound function
function makeSound(key){

switch (key) {
  case "w":
  var audio=new Audio("sounds/crash.mp3");
  audio.play();
  break;
  case "a":
  var audio=new Audio("sounds/tom-1.mp3");
  audio.play();
  break;
  case "s":
  var audio=new Audio("sounds/kick-bass.mp3");
  audio.play();
  break;
  case "d":
  var audio=new Audio("sounds/tom-2.mp3");
  audio.play();
  break;
  case "j":
  var audio=new Audio("sounds/snare.mp3");
  audio.play();
  break;
  case "k":
  var audio=new Audio("sounds/tom-3.mp3");
  audio.play();
  break;
  case "l":
  var audio=new Audio("sounds/tom-4.mp3");
  audio.play();
  break;
  default:
}
}

// ButtonAnimation
function buttonAnimation(currentkey){
  var activeButton=document.querySelector("."+currentkey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 200);
}

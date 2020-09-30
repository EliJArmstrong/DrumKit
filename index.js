var buttonArray = document.querySelectorAll(".drum");

function playSoundBasedOnEventType(letter){
  switch (letter) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(this.innerHTML);
  }
}

document.addEventListener("keydown", function(event){
  playSoundBasedOnEventType(event.key);
  buttonAnimation(event.key);
})

for (i = 0; i < buttonArray.length; i++) {
  buttonArray[i].addEventListener("click", function() {
    playSoundBasedOnEventType(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

function buttonAnimation(currentkey){
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}

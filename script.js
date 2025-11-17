let sound = document.querySelectorAll(".beat");
let numberOfButtons = sound.length;

for (let i = 0; i < numberOfButtons; i++) {
  sound[i].addEventListener("click", function () {
    let buttonInnerHtml = this.innerHTML;

    playSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keypress", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);       // FIXED
});

function playSound(key) {
  switch (key) {
    case "w":
      new Audio("Assets/Assets/sounds/crash.mp3").play();
      break;
    case "a":
      new Audio("Assets/Assets/sounds/kick-bass.mp3").play();
      break;
    case "s":
      new Audio("Assets/Assets/sounds/snare.mp3").play();
      break;
    case "d":
      new Audio("Assets/Assets/sounds/tom-1.mp3").play();
      break;
    case "j":
      new Audio("Assets/Assets/sounds/tom-2.mp3").play();
      break;
    case "k":
      new Audio("Assets/Assets/sounds/tom-3.mp3").play();
      break;
    case "l":
      new Audio("Assets/Assets/sounds/tom-4.mp3").play();
      break;
    default:
      console.log("Invalid key:", key);
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);

  if (!activeButton) return; // prevent errors

  activeButton.classList.add("animate");   // FIXED
  setTimeout(function () {
    activeButton.classList.remove("animate");  // FIXED
  }, 200);
}

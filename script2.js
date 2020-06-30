const gameContainer = document.getElementById("game");
let count = 0;
let match = false;
let selectedCard2 = "";
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let maxClickCounter = 0;
// TODO: Implement this function!
function handleCardClick(a) {
    
  let selectedCard1 = event.target;
    
if (maxClickCounter <= 2) {
      // a.target.classList.toggle ("flip");
  if (count < 2) {
      selectedCard1.style.backgroundColor = event.target.classList.value;
      maxClickCounter += 1;
        if (selectedCard1.style.backgroundColor !== undefined){
          if (count === 0) {
              selectedCard2 = selectedCard1;
              count += 1;
              maxClickCounter += 1;
        }
        else if (selectedCard1.style.backgroundColor === selectedCard2.style.backgroundColor && count > 0 && 
          selectedCard2 !== selectedCard1) {
            match = true;
            count = 0;
            maxClickCounter = 0;
        }
        else {
          setTimeout(function() {
            selectedCard1.style.backgroundColor = "";
            selectedCard2.style.backgroundColor = "";
            count = 0;
            maxClickCounter = 0;
          }, 1000);
        }
      }  
      else {
        selectedCard1.style.backgroundColor = event.target.classList.value;
        count += 1;
        maxClickCounter += 1;
      }
    }
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);

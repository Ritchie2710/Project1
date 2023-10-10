const happy = document.getElementById("buttonHappy");
const sad = document.getElementById("buttonSad");
const action = document.getElementById("buttonAction");
const horror = document.getElementById("buttonHorror");
const drama = document.getElementById("buttonDrama");
const comedy = document.getElementById("buttonComedy");
const qText = document.getElementById("qText");

//let q1Ans = q1;

// document.getElementById(happyText).hidden = true;
// document.getElementById(sadText).hidden = true;

let buttonContainer = document.getElementById("buttonContainer");

function q1(mood) {
  if (mood === "happy") {
    // show the action/horror buttons
  } else {
    // show the comedy/drama buttons
  }
}

// putting our q1 in an annonmous prevents the call back from running on page load
happy.addEventListener("click", function () {
  q1("happy");
});

function q2(happyGenre) {
  if (happyGenre === "action") {
    return optionsAction[i];
  } else {
    return optionsHorror[i];
  }
}

function q3(sadGenre) {
  if (sadGenre === "drama") {
    return optionsDrama[i];
  } else {
    return optionsComedy[i];
  }
}

q1();

// [
//   ({
//     name: "Step Brothers",
//     genre: "BroCom",
//   },
//   {
//     name: "Definitely Maybe",
//     genre: "RomCom",
//   })
// ];

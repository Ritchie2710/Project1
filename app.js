const happy = document.getElementById("buttonHappy");
const sad = document.getElementById("buttonSad");
const action = document.getElementById("buttonAction");
const horror = document.getElementById("buttonHorror");
const drama = document.getElementById("buttonDrama");
const comedy = document.getElementById("buttonComedy");
const qText = document.getElementById("qText");
//
const filmOneAction = document.getElementById("filmOneAction");
const filmtwoAction = document.getElementById("filmTwoAction");
const filmOneHorror = document.getElementById("filmOneHorror");
const filmtwoHorror = document.getElementById("filmTwoHorror");
const filmOneDrama = document.getElementById("filmOneDrama");
const filmtwoDrama = document.getElementById("filmTwoDrama");
const filmOneComedy = document.getElementById("filmOneComedy");
const filmtwoComedy = document.getElementById("filmTwoComedy");
//
// const allAction = []
// //
// const allHorror =[]
// //
// const allDrama = []
// //
// const allComedy = []
// //
// function randomAllAction() {
//   return Math.floor(Math.random() * allAction.length);
// //
// function randomAllHorror() {
//   return Math.floor(Math.random() * allHorror.length);
// //
// function randomAllDrama() {
//   return Math.floor(Math.random() * allDrama.length);
// //
// function randomAllComedy() {
//   return Math.floor(Math.random() * allComedy.length);
// //
// function renderAllAction() {
//   // get 2 indexs from our products array
//   let filmOneAction = randomAllAction();
//   let filmTwoAction = randomAllAction();

//   // make sure they aren't the same
//   while (filmOneAction === filmTwoAction) {
//     filmTwoAction = randomAllAction();

//   }

//   function renderAllHorror() {
//     // get 2 indexs from our products array
//     let filmOneHorror = randomAllHorror();
//     let filmTwoHorror = randomAllHorror();

//     // make sure they aren't the same
//     while (filmOneHorror === filmTwoHorror) {
//       filmTwoHorror = randomAllHorror();

//     }

//     function renderAllDrama() {
//       // get 2 indexs from our products array
//       let filmOneDrama = randomAllDrama();
//       let filmTwoDrama = randomAllDrama();

//       // make sure they aren't the same
//       while (filmOneDrama === filmTwoDrama) {
//         filmTwoDrama = randomAllDrama();

//       }

//       function renderAllComedy() {
//         // get 2 indexs from our products array
//         let filmOneComedy = randomAllComedy();
//         let filmTwoComedy = randomAllComedy();

//         // make sure they aren't the same
//         while (filmOneComedy === filmTwoComedy) {
//           filmTwoComedy = randomAllComedy();
//               }

// let buttonContainer = document.getElementById("buttonContainer");

function handleAnswer(ans) {
  if (ans === "happy") {
    action.classList.remove("hidden");
    horror.classList.remove("hidden");
    happy.classList.add("hidden");
    sad.classList.add("hidden");
    qText.textContent = "Great, what genre would you prefer?";
    // show the action/horror buttons
  } else if (ans === "sad") {
    drama.classList.remove("hidden");
    comedy.classList.remove("hidden");
    happy.classList.add("hidden");
    sad.classList.add("hidden");
    qText.textContent = "Oh no!  What genre would you prefer?";
    // show the comedy/drama buttons
  } else if (ans === "action") {
    action.classList.add("hidden");
    horror.classList.add("hidden");
    filmOneAction.classList.remove("hidden");
    filmtwoAction.classList.remove("hidden");
    qText.textContent = "How about feasting your eyes on one of these?";
    //
  } else if (ans === "horror") {
    action.classList.add("hidden");
    horror.classList.add("hidden");
    filmOneHorror.classList.remove("hidden");
    filmtwoHorror.classList.remove("hidden");
    qText.textContent = "How about feasting your eyes on one of these?";
    //
  } else if (ans === "drama") {
    drama.classList.add("hidden");
    comedy.classList.add("hidden");
    filmOneDrama.classList.remove("hidden");
    filmtwoDrama.classList.remove("hidden");
    qText.textContent = "Maybe these can cheer you up?";
    //
  } else if (ans === "comedy") {
    drama.classList.add("hidden");
    comedy.classList.add("hidden");
    filmOneComedy.classList.remove("hidden");
    filmtwoComedy.classList.remove("hidden");
    qText.textContent = "Maybe these can cheer you up?";
  }
}

// putting our handleAnswer in an annonmous prevents the call back from running on page load
happy.addEventListener("click", function () {
  handleAnswer("happy");
});
sad.addEventListener("click", function () {
  handleAnswer("sad");
});
action.addEventListener("click", function () {
  handleAnswer("action");
});
horror.addEventListener("click", function () {
  handleAnswer("horror");
});
drama.addEventListener("click", function () {
  handleAnswer("drama");
});
comedy.addEventListener("click", function () {
  handleAnswer("comedy");
});
filmOneAction.addEventListener("click", function () {
  handleAnswer("filmOneAction");
});
filmTwoAction.addEventListener("click", function () {
  handleAnswer("filmTwoAction");
});
filmOneHorror.addEventListener("click", function () {
  handleAnswer("filmOneHorror");
});
filmTwoHorror.addEventListener("click", function () {
  handleAnswer("filmTwoHorror");
});
filmOneDrama.addEventListener("click", function () {
  handleAnswer("filmOneDrama");
});
filmTwoDrama.addEventListener("click", function () {
  handleAnswer("filmTwoDrama");
});
filmOneComedy.addEventListener("click", function () {
  handleAnswer("filmOneComedy");
});
filmTwoComedy.addEventListener("click", function () {
  handleAnswer("filmTwoComedy");
});

// renderAllAction()
// renderAllHorror()
// renderAllDrama()
// renderAllComedy()

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
    getMovie("Action");
    qText.textContent = "How about feasting your eyes on this?";
    //
  } else if (ans === "horror") {
    action.classList.add("hidden");
    horror.classList.add("hidden");
    getMovie("Horror");
    qText.textContent = "How about feasting your eyes on this?";
    //
  } else if (ans === "drama") {
    drama.classList.add("hidden");
    comedy.classList.add("hidden");
    getMovie("Drama");
    qText.textContent = "Maybe these can cheer you up?";
    //
  } else if (ans === "comedy") {
    drama.classList.add("hidden");
    comedy.classList.add("hidden");
    getMovie("Comedy");
    qText.textContent = "Maybe these can cheer you up?";
  }
}

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
  let prevMovies = JSON.parse(localStorage.getItem("prevMovies")) || [];

  let movie = getMovie("comedy");

  function getMovie(genre) {
    let gmovies = [];
    for (i = 0; i < movies.length; i++) {
      if (
        movies[i].genre === genre &&
        prevMovies.includes(movies[i].name) == false
      ) {
        gmovies.push(movies[i]);
      }
    }

    if (gmovies.length === 0) {
      return null;
    }

    const random = Math.floor(Math.random() * gmovies.length);
    const movie = gmovies[random];
    prevMovies.push(movie.name);

    localStorage.setItem("prevMovies", JSON.stringify(prevMovies));

    return movie;
  }
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

let prevMovies = JSON.parse(localStorage.getItem("prevMovies")) || [];

let movie = getMovie("comedy");

function getMovie(genre) {
  let gmovies = [];
  for (i = 0; i < movies.length; i++) {
    if (
      movies[i].genre === genre &&
      prevMovies.includes(movies[i].name) == false
    ) {
      gmovies.push(movies[i]);
    }
  }

  if (gmovies.length === 0) {
    return null;
  }

  const random = Math.floor(Math.random() * gmovies.length);
  const movie = gmovies[random];
  prevMovies.push(movie.name);

  localStorage.setItem("prevMovies", JSON.stringify(prevMovies));

  return movie;
}

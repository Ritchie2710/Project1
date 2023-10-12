const happy = document.getElementById("buttonHappy");
const sad = document.getElementById("buttonSad");
const action = document.getElementById("buttonAction");
const horror = document.getElementById("buttonHorror");
const drama = document.getElementById("buttonDrama");
const comedy = document.getElementById("buttonComedy");
const qText = document.getElementById("qText");

const resultMovie = document.getElementById("resultMovie");
const resultMovieTitle = document.getElementById("resultMovieTitle");
const resultMovieImage = document.getElementById("resultMovieImage");
const resultMovieDescrip = document.getElementById("resultMovieDescrip");
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
    qText.textContent = "Maybe this will make you feel better?";
    //
  } else if (ans === "comedy") {
    drama.classList.add("hidden");
    comedy.classList.add("hidden");
    getMovie("Comedy");
    qText.textContent = "Maybe this can cheer you up?";
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

function getMovie(genre) {
  let gmovies = [];
  for (i = 0; i < movies.length; i++) {
    // console.log(movies);
    if (movies[i].genre === genre && prevMovies.includes(movies[i]) == false) {
      gmovies.push(movies[i]);
    }
  }

  if (gmovies.length === 0) {
    return null;
  }

  const random = Math.floor(Math.random() * gmovies.length);
  const movie = gmovies[random];
  prevMovies.push(movie);

  localStorage.setItem("prevMovies", JSON.stringify(prevMovies));

  resultMovieTitle.textContent = movie.name;
  resultMovieImage.src = movie.image;
  resultMovieDescrip.textContent = movie.desc;
  resultMovie.classList.remove("hidden");
  return;

  //OR

  // const resultMovie = document.getElementById("resultMovie");

  // const article = document.createElement("article");

  // const h2 = document.createElement("h2");
  // h2.textContent = movie.name;
  // article.appendChild(h2);

  // const img = document.createElement("img");
  // img.src = movie.image;
  // img.setAttribute("alt", movie.name);
  // article.appendChild(img);

  // const p = document.createElement("p");
  // p.textContent = movie.desc;
  // article.appendChild(p);

  // resultMovie.appendChild("article");

  // instead of returing the movie

  // use DOM manipulation to add a title, image and dectiption of your movie to the page
  // return movie;
}
getMovie();

// retrieve the prevMovies array from local storage
// loop through that array and console log the name of the movie
console.log("hello");
let prevMovies = JSON.parse(localStorage.getItem("prevMovies")) || [];
console.log(prevMovies);
//1. find the place in the html where the info will go
// let variable1 = document.getElementById(...)
//2. create a new element
// let variable2 = document.createElement( 'li' )
//3. add info to that element
// variable2.textContent = " .... "
//4. add that element to the place in the html
// variable1.appendChild(variable2)

for (let i = 0; i < prevMovies.length; i++) {
  let variable1 = document.getElementById("images");
  let variable2 = document.createElement("img");

  variable2.src = prevMovies[i].image;

  variable1.appendChild(variable2);
}
for (let i = 0; i < prevMovies.length; i++) {
  console.log(i, prevMovies[i]);
}

function getMovie(genre) {
  let gmovies = [];
  for (i = 0; i < movies.length; i++) {
    if (
      movies[i].genre === genre &&
      prevMovies.includes(movies[i].name) == false
    ) {
      gmovies.push(movies[i]);
    }
    console.log;
  }

  if (gmovies.length === 0) {
    return null;
  }
}

const movies = [
  {
    name: "Step Brothers",
    genre: "Comedy",
  },
  {
    name: "Austin Powers",
    genre: "Comedy",
  },
  ,
  {
    name: "Borat",
    genre: "Comedy",
  },
  {
    name: "Click",
    genre: "Comedy",
  },
  {
    name: "Free Guy",
    genre: "Comedy",
  },
  {
    name: "Hot Fuzz",
    genre: "Comedy",
  },
  {
    name: "Minions",
    genre: "Comedy",
  },
  {
    name: "Mrs Doubtfire",
    genre: "Comedy",
  },
  {
    name: "No hard feelings",
    genre: "Comedy",
  },
  {
    name: "Red notice",
    genre: "Comedy",
  },
  {
    name: "Sing",
    genre: "Comedy",
  },
  {
    name: "The Hangover",
    genre: "Comedy",
  },
  {
    name: "Wedding Crashers",
    genre: "Comedy",
  },
  {
    name: "Yes Man",
    genre: "Comedy",
  },
  {
    name: "Ace Ventura",
    genre: "Comedy",
  },
  {
    name: "Central Intelligence",
    genre: "Comedy",
  },
  {
    name: "Coming to America",
    genre: "Comedy",
  },
  {
    name: "Deadpool",
    genre: "Comedy",
  },
  {
    name: "Alexander",
    genre: "Action",
  },
  {
    name: "Baby Driver",
    genre: "Action",
  },
  {
    name: "Brightburn",
    genre: "Action",
  },
  {
    name: "Bullet Train",
    genre: "Action",
  },
  {
    name: "Inside Man",
    genre: "Action",
  },
  {
    name: "John Wick",
    genre: "Action",
  },
  {
    name: "Kingsman",
    genre: "Action",
  },
  {
    name: "Oblivion",
    genre: "Action",
  },
  {
    name: "Kingsman",
    genre: "Action",
  },
  {
    name: "Tenet",
    genre: "Action",
  },
  {
    name: "The Gentlemen",
    genre: "Action",
  },
  {
    name: "The Goonies",
    genre: "Action",
  },
  {
    name: "Die Hard",
    genre: "Action",
  },
  {
    name: "End Game",
    genre: "Action",
  },
  {
    name: "Gladiator",
    genre: "Action",
  },
  {
    name: "Jurassic Park",
    genre: "Action",
  },
  {
    name: "Lord of the rings",
    genre: "Action",
  },
  {
    name: "Matrix",
    genre: "Action",
  },
  {
    name: "Pulp Fiction",
    genre: "Action",
  },
  {
    name: "Star Wars",
    genre: "Action",
  },
  {
    name: "The Terminator",
    genre: "Action",
  },
  {
    name: "The Dark Knight",
    genre: "Action",
  },
  {
    name: "Argo",
    genre: "Drama",
  },
  {
    name: "Big Fish",
    genre: "Drama",
  },
  {
    name: "Bohemian Rhapsody",
    genre: "Drama",
  },
  {
    name: "Dunkirk",
    genre: "Drama",
  },
  {
    name: "Friends ith benefits",
    genre: "Drama",
  },
  {
    name: "Grease",
    genre: "Drama",
  },
  {
    name: "Imitation Game",
    genre: "Drama",
  },
  {
    name: "JoJo Rabbit",
    genre: "Drama",
  },
  {
    name: "Pursuit of Happiness",
    genre: "Drama",
  },
  {
    name: "Last Christmas",
    genre: "Drama",
  },
  {
    name: "Imitation Game",
    genre: "Drama",
  },
  {
    name: "The Greatest Showman",
    genre: "Drama",
  },
  {
    name: "Yesterday",
    genre: "Drama",
  },
  {
    name: "101 Dalmations",
    genre: "Drama",
  },
  {
    name: "Forrest Gump",
    genre: "Drama",
  },
  {
    name: "Harry Potter",
    genre: "Drama",
  },
  {
    name: "Pretty women",
    genre: "Drama",
  },
  {
    name: "The fault in our stars",
    genre: "Drama",
  },
  {
    name: "The nightmare before christmas",
    genre: "Drama",
  },
  {
    name: "Seven",
    genre: "Horror",
  },
  {
    name: "Shutter Island",
    genre: "Horror",
  },
  {
    name: "Sinister",
    genre: "Horror",
  },
  {
    name: "Split",
    genre: "Horror",
  },
  {
    name: "World War Z",
    genre: "Horror",
  },
  {
    name: "Wrong Turn",
    genre: "Horror",
  },
  {
    name: "Alien",
    genre: "Horror",
  },
  {
    name: "Halloween",
    genre: "Horror",
  },
  {
    name: "Nightmare on Elm street",
    genre: "Horror",
  },
  {
    name: "Silence of the lambs",
    genre: "Horror",
  },
];

// function getMovie(genre) {
//   const gmovies = movies.filter(
//     (x) => x.genre.toLowerCase() === genre.toLowerCase()
//   );

//   const random = Math.floor(Math.random() * gmovies.length);
//   return gmovies[random];
// }

// let prevMovies = [];

// function getMovie(genre) {
//   const gmovies = movies.filter(
//     (movie) =>
//       movie.genre.toLowerCase() == genre.toLowerCase() &&
//       prevMovies.includes(movie.name) == false
//   );
//   if (gmovies.length === 0) {
//     return null;
//   }

//   const random = Math.floor(Math.random() * gmovies.length);
//   const movie = gmovies[random];
//   // console.log(prevMovies);
//   prevMovies.push(movie.name);
//   return gmovies[random];
// }

// const movie = console.log(getMovie("comedy"));

// localStorage.setItem('prevMovies', JSON.stringify(prevMovies));

// write a function that accepts a paremeter of a string
// based on whether that string is "comedy" or "thriller", return a random movie that has that genre

/** 

For example, if I run:

getMovie("comedy")

I will either get:
{name: "Elf", genre: "comedy"}
or
{name: "American Pie", genre: "comedy"}

*/

let prevMovies = JSON.parse(localStorage.getItem("prevMovies")) || [];

const movie = getMovie("comedy");

function getMovie(genre) {
  // const gmovies = movies.filter( function (movie) {
  //     movie.genre.toLowerCase() == genre.toLowerCase() &&
  //     prevMovies.includes(movie.name) == false
  // });

  // let type = 'comedy'

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

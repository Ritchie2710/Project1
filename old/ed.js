// get a random item from the movies array
// use the random index function from our lab
console.log("linked");
// filtering an array of objects by the genre property
let question = document.getElementById("q1");
let questiontext = document.createElement("p");
questiontext.textContent = movies[0].name;
console.log(questiontext);
question.appendChild(questiontext);

let question2 = document.getElementById("q2");
let questiontext2 = document.createElement("p");
questiontext2.textContent = movies[1].name;
console.log(questiontext2);
question.appendChild(questiontext2);

function randomProdIdx() {
  return Math.floor(Math.random() * products.length);
}

// let text = localStorage.getItem("movies");
// let obj = JSON.parse(text);
// document.getElementById("movies").innerHTML = p.name;

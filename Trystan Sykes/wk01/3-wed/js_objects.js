var favoriteRecipe = {
  title: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"]
}

console.log(favoriteRecipe.title);
console.log("Serves: " + favoriteRecipe.servings);
for ( var i = 0; i < favoriteRecipe.ingredients.length; i++) {
  console.log(favoriteRecipe.ingredients[i])
}

var books = [{
title: "Magician",
author: "Raymond E Feist",
alreadyRead: true},
{
title: "Silverthorn",
author: "Raymond E Feist",
alreadyRead: true},
{
title: "Magician's End",
author: "Raymond E Feist",
alreadyRead: false}];

for (var i = 0; i < books.length; i++) {
  console.log(books[i].title + " by " + books[i].author)
  if (books[i].alreadyRead === true) {
    console.log("You already read " + books[i].title + " by " + books[i].author)}
    else {
      console.log("You still need to read " + books[i].title + " by " + books[i].author)
    }
  
}

var favoriteMovie = {
title:  "Inception",
duration: 30,
stars: ["Puff", "Jackie", "Living Sneezes"]
}

function favoriteMovieDetails() {
  console.log(favoriteMovie.title + " runs for " + favoriteMovie.duration + " minutes." + " Stars: " + favoriteMovie.stars.join() + ".")
      };

favoriteMovieDetails();





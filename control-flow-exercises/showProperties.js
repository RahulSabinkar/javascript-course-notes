const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 7.5,
  director: "a",
};

showProperties(movie);

function showProperties(obj) {
  for (let index in obj) {
    if (typeof obj[index] === "string")
      console.log(index, obj[index]);
  }
}
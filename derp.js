const express = require("express");
const fs = require("fs");
let app = express();
let movies = JSON.parse(fs.readFileSync("./data/movies.json"));

app.use(express.json());

//GET - api/v1/movies/id
app.get("/api/v1/movies/:id", (request, response) => {
  const id = request.params.id * 1;
  let movie = movies.find((el) => el.id === id);

  if (!movie) {
    return response.status(404).json({
      status: "fail",
      message: "Movie with ID " + id + " was not found",
    });
  }
  response.status(200).json({
    status: "success",
    data: {
      movie: movie,
    },
  });
});

app.get("/api/v1/movies", (request, response) => {
  response.status(200).json({
    status: "success",
    count: movies.length,
    data: {
      movies: movies,
    },
  });
});
app.patch("/api/v1/movies/:id", (request, response) => {
  let id = request.params.id * 1;
  let movieToUpdate = movies.find((el) => el.id === id);
  let index = movies.indexOf(movieToUpdate);

  Object.assign(movieToUpdate, request.body);
  movies[index] = movieToUpdate;

  fs.writeFile("./data/movies.json", JSON.stringify(movies), (err) => {
    response.status(200).json({
      status: "success",
      data: {
        movie: movieToUpdate,
      },
    });
  });
});

//CREATE A SERVER
const port = 3000;
app.listen(port, () => {
  console.log("Server has started");
});

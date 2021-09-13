function filterMovies(movies, query) {
  let filteredMovies = [];

  if (movies) {
    // console.log(movies);
    filteredMovies = movies.filter((movie) => {
      console.log(movie);
      return movie.nameRU.toUpperCase().includes(query.toUpperCase());
    });
    return filteredMovies;
  }
}

function getTimeFromMins(mins) {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return hours + "ч " + minutes + "м";
}

export { filterMovies, getTimeFromMins };

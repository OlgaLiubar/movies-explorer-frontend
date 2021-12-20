export default function filterMovies(localMoviesArr, query, shortFilms) {
  let filteredMovies = [];

  if (localMoviesArr) {
    filteredMovies = localMoviesArr.filter((movie) => {
      return movie.nameRU.toUpperCase().includes(query.toUpperCase());
    });
  }
  if (shortFilms) {
    filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40);
  }
  return filteredMovies;
}

// function filterMovies(movies, query) {
//   let filteredMovies = [];

//   if (movies) {
//     // console.log(movies);
//     filteredMovies = movies.filter((movie) => {
//       console.log(movie);
//       return movie.nameRU.toUpperCase().includes(query.toUpperCase());
//     });
//     return filteredMovies;
//   }
// }

function filterMovies(localMoviesArr, query, checkedForShortFilms) {
  let filteredMovies = [];

  //возьми массив с фильмами, запиши в новый массив только отфильтрованные по запросу
  if (localMoviesArr) {
    // console.log(movies);
    filteredMovies = localMoviesArr.filter((movie) => {
      // console.log(movie);
      return movie.nameRU.toUpperCase().includes(query.toUpperCase());
    });
  }
  //если мы знаем, что нужны короткие, то возьми массив, отфильтрованный по слову, и отфильтруй
  //его по длительности
  if (checkedForShortFilms) {
    filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40);
  }
  //верни отфильтрованный массив
  return filteredMovies;
}

function getTimeFromMins(mins) {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return hours + "ч " + minutes + "м";
}

export { filterMovies, getTimeFromMins };

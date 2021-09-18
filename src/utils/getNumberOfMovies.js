function getNumberOfMovies(width) {
    let maxNumberOfMovies;
    let step;
  
    if (width > 1200) {
        maxNumberOfMovies = 12;
      step = 3;
    } else if (width >= 500 && width <= 850) {
        maxNumberOfMovies = 8;
      step = 2;
    } else if (width < 500) {
        maxNumberOfMovies = 5;
      step = 2;
    }
    return { maxNumberOfMovies, step };
  }
  
  export default getNumberOfMovies;
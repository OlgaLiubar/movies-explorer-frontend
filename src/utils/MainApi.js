import { IMG_BASE_URL, TRAILER, REGEX } from "../utils/constants";

class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getUserData() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  saveMovieCard(movie) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        country: `${
          movie.country !== (undefined || "" || null)
            ? movie.country
            : "no info"
        }`,
        director: `${
          movie.director !== (undefined || "" || null)
            ? movie.director
            : "no info"
        }`,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${IMG_BASE_URL}${movie.image.url}`,
        trailer: `${
          movie.trailerLink === null || "" || !movie.trailerLink.match(REGEX)
            ? TRAILER
            : movie.trailerLink
        }`,
        thumbnail: `${IMG_BASE_URL}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: `${movie.nameRU === ("" || null) ? "no info" : movie.nameRU}`,
        nameEN: `${movie.nameEN === ("" || null) ? "no info" : movie.nameEN}`,
      }),
    }).then(this._checkResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: "DELETE",
      credentials: "include",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  uploadUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }
}

const api = new Api({
  url: "https://api.olgaliubar.nomoredomains.club",
  // url: "http://localhost:3001",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    // authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default api;

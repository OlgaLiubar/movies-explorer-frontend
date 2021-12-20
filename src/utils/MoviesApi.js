class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._url}`, {
      method: "GET",
      // credentials: 'include',
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

const moviesApi = new Api({
  url: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default moviesApi;

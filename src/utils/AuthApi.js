class Auth {
  constructor() {
    this._baseUrl = "https://api.olgaliubar.nomoredomains.club";
    // this._baseUrl = "http://localhost:3005";
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    console.log(res.json());
    return Promise.reject(`Error: ${res.status}`);
  }

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    }).then(this._checkResponse);
  }

  signIn({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    })
      .then(this._checkResponse)
      .then((data) => {
        localStorage.setItem("token", data.token);
        return data;
      });
  }

  getContent(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }
}

export const auth = new Auth();

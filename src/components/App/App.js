import React from "react";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./App.css";

import moviesApi from "../../utils/MoviesApi";
import { auth } from "../../utils/AuthApi";
import api from "../../utils/MainApi";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Sidebar from "../Sidebar/Sidebar";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import { filterMovies } from "../../utils/functions";
// import Preloader from "../Preloader/Preloader";

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [serverErrMsg, setServerErrMsg] = React.useState("");
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const [foundMovies, setFoundMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);

  function handleBurgerClick() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  function handleServerError(err) {
    setServerErrMsg(err);
  }

  React.useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUserData(), api.getSavedMovies()])
        .then(([userData, savedMovies]) => {
          setCurrentUser(userData);
          // console.log(currentUser);
          if (savedMovies) {

            console.log("Есть сохраненные фильмы");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    function checkToken() {
      const jwt = localStorage.getItem("token");
      if (jwt) {
        auth
          .getContent(jwt)
          .then((res) => {
            // console.log("Есть контакт");
            // console.log(res);
            if (res) {
              setLoggedIn(true);
            }
          })
          .catch((err) => console.log(err));
      }
    }

    checkToken();
  }, [loggedIn, history]);

  // function handleLogin() {
  //   setLoggedIn(true);
  // }

  //Обработчик сабмита формы регистрации
  function handleRegister({ name, email, password }) {
    setIsLoading(true);
    auth
      .register(name, email, password)
      .then(() => {
        handleLoginFormSubmit({ email, password });
      })
      .catch((err) => {
        handleServerError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //Обработчик сабмита формы входа
  function handleLoginFormSubmit({ email, password }) {
    setIsLoading(true);
    auth
      .signIn({ email, password })
      .then((res) => {
        console.log(res);
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        handleServerError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //Обработчик обновления данных пользовател
  function handleUpdateUser({ name, email }) {
    setIsLoading(true);
    api
      .uploadUserInfo({ name, email })
      .then((user) => {
        // console.log(user)
        setCurrentUser(user);
      })
      .catch((err) => handleServerError(err))
      .finally(() => setIsLoading(false));
  }

  function handleLogOut() {
    setLoggedIn(false);
    localStorage.clear();
    history.push("/");
  }

  //запись объекта карточек в local storage

  React.useEffect(() => {
    if (!localStorage.movies) {
      moviesApi
        .getMovies()
        .then((moviesData) => {
          // console.log("Получили фильмы");
          localStorage.setItem("movies", JSON.stringify(moviesData));
          // console.log(localStorage.movies);
        })
        .catch((err) => console.log(err))
        .finally(() => console.log("good job!"));
    }
  }, [loggedIn]);

  function handleMovieSearch(query) {
    const filteredMovies = filterMovies(JSON.parse(localStorage.movies), query);
    return setFoundMovies(filteredMovies);
  }

  //Обработчик сохранения найденного фильма
  function handleSaveMovie(movie) {
    // setIsLoading(true);
    api
      .saveMovieCard(movie)
      .then((savedMovie) => {
        console.log(savedMovie);
        setSavedMovies((state) => [savedMovie, ...state]);
        console.log(savedMovies);
      })
      .catch((err) => console.log(`Добавление карточки: ${err}`))
      .finally(() => console.log("Уф, сохранили!"));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route path="/" exact>
            <Main loggedIn={loggedIn} />
          </Route>

          <ProtectedRoute
            path="/movies"
            component={Movies}
            findMovies={handleMovieSearch}
            handleBurgerClick={handleBurgerClick}
            cards={foundMovies}
            loggedIn={loggedIn}
            onSaveMovie={handleSaveMovie}
          />

          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            findMovies={handleMovieSearch}
            handleBurgerClick={handleBurgerClick}
            cards={foundMovies}
            loggedIn={loggedIn}
          />

          <ProtectedRoute
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            handleBurgerClick={handleBurgerClick}
            handleLogOut={handleLogOut}
            handleUpdateUser={handleUpdateUser}
            isLoading={isLoading}
            serverErrMsg={serverErrMsg}
          />

          <Route path="/signup">
            {loggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Register
                isLoading={isLoading}
                onSubmit={handleRegister}
                serverErrMsg={serverErrMsg}
              />
            )}
          </Route>

          <Route path="/signin">
            {loggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Login
                isLoading={isLoading}
                onSubmit={handleLoginFormSubmit}
                serverErrMsg={serverErrMsg}
              />
            )}
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

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

// const MOVIES_API_URL = "https://api.nomoreparties.co";

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [serverErrMsg, setServerErrMsg] = React.useState("");
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  // const [movies, setMovies] = React.useState([]);
  //Карточки с найденными по запросу фильмами
  const [foundMovies, setFoundMovies] = React.useState([]);
  //Карточки с сохраненными фильмами
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

  // //Получаем данные пользователя

  // function getUserData() {
  //   api
  //     .getUserData()
  //     .then((userData) => {
  //       setCurrentUser(userData);
  //       getSavedMovies();
  //       // setLoggedIn(true);
  //     })
  //     .catch((err) => {
  //       handleServerError(err);
  //     });
  // }

  // //Получаем сохраненные фильмы
  // function getSavedMovies() {
  //   api
  //     .getSavedMovies()
  //     .then((res) => {
  //       if (!res) {
  //         throw new Error("Ошибка при получении сохраненных фильмов");
  //       }
  //       //записываем сохраненные фильмы(с апи) в сохраненные фильмы
  //       setSavedMovies(res.data);
  //       // setSavedFilteredMovies(res.data);
  //     })
  //     .catch((err) => {
  //       handleServerError(err);
  //     });
  // }

  //Получаем данные пользователя и сохраненные фильмы
  React.useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUserData(), api.getSavedMovies()])
        .then(([userData, savedMovies]) => {
          setCurrentUser(userData);
          // console.log('карент юзер');
          // console.log(currentUser);
          if (savedMovies) {
            //записываем сохраненные фильмы(с апи) в сохраненные фильмы
            setSavedMovies(savedMovies);
            //записываем сохраненные фильмы(с апи) в локальное хранилище
            localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
          }
        })
        .catch((err) => {
          handleServerError(err);
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

  //запись объекта карточек с сервера БитФильмз в local storage

  // React.useEffect(() => {
  //   if (!localStorage.movies) {
  //     moviesApi
  //       .getMovies()
  //       .then((moviesData) => {
  //         // console.log("Получили фильмы");
  //         localStorage.setItem("movies", JSON.stringify(moviesData));
  //         // console.log(localStorage.movies);
  //       })
  //       .catch((err) => console.log(err))
  //       .finally(() => console.log("good job!"));
  //   }
  // }, [loggedIn]);

  //Обработчик поиска фильма по ключевому слову: записываем фильмы по запросу в стейт и в локальное хранилище
  // function handleMovieSearch(query) {
  //   const filteredMovies = filterMovies(JSON.parse(localStorage.movies), query);
  //   const newFilteredMovies = filteredMovies.map((movie) => {
  //     return { ...movie, img: `${MOVIES_API_URL}${movie.image.url}` };
  //   });
  //   setFoundMovies(newFilteredMovies);
  //   localStorage.setItem("foundMovies", JSON.stringify(newFilteredMovies));
  // }

  function handleMovieSearch(query) {
    getMovies(query);
  }

  function getMovies(query) {
    setIsLoading(true);
    const localMovies = JSON.parse(localStorage.getItem('movies'));
    if (localMovies) {
      setFoundMovies(filterMovies(localMovies, query));
      localStorage.setItem('foundMovies', JSON.stringify(filterMovies(localMovies, query)));
      setIsLoading(false);
    } else {
      moviesApi.getMovies()
        .then((moviesData) => {
          if (moviesData) {
            localStorage.setItem('movies', JSON.stringify(moviesData));
            setFoundMovies(filterMovies(moviesData, query));
            localStorage.setItem('foundMovies', JSON.stringify(filterMovies(moviesData, query)));
            setIsLoading(false);
          } else {
            setIsLoading(false);
            throw new Error('Ошибка при получении фильмов');
          }
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    }
  }

  //Обработчик сохранения найденного фильма
  function handleSaveMovie(movie) {
    // setIsLoading(true);
    api
      .saveMovieCard(movie)
      .then((savedCard) => {
        // console.log("я ответ от апи");
        // console.log(savedCard);
        setSavedMovies([...savedMovies, savedCard]);
        // console.log("а мы - стейт");
        // console.log(savedMovies);
      })
      .catch((err) => console.log(`Добавление карточки: ${err}`))
      .finally(() => console.log("Уф, сохранили!"));
  }

  //обновляем локальное хранилище при добавлении сохраненной карточки
  React.useEffect(() => {
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  }, [savedMovies]);

  //Проверяем по id, есть ли фильм в сохраненных
  function isSavedMovie(card) {
    return savedMovies.find((item) => item.id === card.id);
  }

  //Обработчик удаления карточки из сохраненных
  function handleRemoveSavedMovie(movieId) {
    api.deleteMovie(movieId)
      .then((deletedMovie) => {
        if (!deletedMovie) {
          throw new Error('При удалении фильма произошла ошибка');
        } else {
          const newSavedMoviesArr = savedMovies.filter((mov) => mov.id !== deletedMovie.data.id);
          setSavedMovies(newSavedMoviesArr);
          // setSavedFilteredMovies(newSavedMoviesArr);
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
            isSavedMovie={isSavedMovie}
          />

          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            findMovies={handleMovieSearch}
            handleBurgerClick={handleBurgerClick}
            savedCards={savedMovies}
            loggedIn={loggedIn}
            setSavedMovies={setSavedMovies}
            isSavedMovie={isSavedMovie}
            onDeleteMovie={handleRemoveSavedMovie}
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

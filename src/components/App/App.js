import React, { useLayoutEffect } from "react";
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
import getNumberOfMovies from "../../utils/getNumberOfMovies";
// import Preloader from "../Preloader/Preloader";

// const MOVIES_API_URL = "https://api.nomoreparties.co";

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [serverErrMsg, setServerErrMsg] = React.useState("");
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  //Карточки с найденными по запросу фильмами
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [foundSavedMovies, setFoundSavedMovies] = React.useState([]);

  //Карточки с сохраненными фильмами
  const [savedMovies, setSavedMovies] = React.useState([]);

  //для ширины окна
  const [width, setWidth] = React.useState(window.innerWidth);
  const [isResizing, setIsResizing] = React.useState(false);
  const [maxNumberOfMovies, setMaxNumberOfMovies] = React.useState(0);
  const [step, setStep] = React.useState(0);

  //для короткометражек
  const [isCheckedForShortFilms, setIsCheckedForShortFilms] = React.useState(
    false
  );
  const [isShortFilm, setIsShortFilm] = React.useState(false);

  function handleBurgerClick() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  function handleServerError(err) {
    setServerErrMsg(err);
  }

  //Получаем данные пользователя и сохраненные фильмы
  React.useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUserData(), api.getSavedMovies()])
        .then(([userData, savedMovies]) => {
          setCurrentUser(userData);
          if (savedMovies) {
            //записываем сохраненные фильмы(с апи) в сохраненные фильмы
            setSavedMovies(savedMovies);
            setFoundSavedMovies(savedMovies);
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
            if (res) {
              setLoggedIn(true);
            }
          })
          .catch((err) => console.log(err));
      }
    }

    checkToken();
  }, [loggedIn, history]);

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

  function handleMovieSearch(query) {
    getMovies(query);
  }

  function handleSavedMovieSearch(query) {
    setFoundSavedMovies(filterMovies(savedMovies, query));
  }

  function resetShownMovies() {
    setFoundSavedMovies(savedMovies);
    setFoundMovies([]);
  }

  function getMovies(query) {
    setIsLoading(true);
    const localMovies = JSON.parse(localStorage.getItem("movies"));
    if (localMovies) {
      setFoundMovies(filterMovies(localMovies, query));
      localStorage.setItem(
        "foundMovies",
        JSON.stringify(filterMovies(localMovies, query))
      );
      setIsLoading(false);
    } else {
      moviesApi
        .getMovies()
        .then((moviesData) => {
          if (moviesData) {
            localStorage.setItem("movies", JSON.stringify(moviesData));
            setFoundMovies(filterMovies(moviesData, query));
            localStorage.setItem(
              "foundMovies",
              JSON.stringify(filterMovies(moviesData, query))
            );
            setIsLoading(false);
          } else {
            setIsLoading(false);
            throw new Error("Ошибка при получении фильмов");
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
        setFoundSavedMovies([...savedMovies, savedCard]);
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
    api
      .deleteMovie(movieId)
      .then((deletedMovie) => {
        if (!deletedMovie) {
          throw new Error("При удалении фильма произошла ошибка");
        } else {
          const newSavedMovies = savedMovies.filter(
            (movie) => movie.id !== deletedMovie.data.id
          );
          setSavedMovies(newSavedMovies);
          setFoundSavedMovies(newSavedMovies);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //если чекбокс отмечен, ищем в массиве с фильмами короткометражки
  function filterShortFilms(moviesArr) {
    return moviesArr.filter((movie) =>
      isShortFilm ? movie.duration <= 40 : true
    );
  }

  function handleCheck() {
    setIsCheckedForShortFilms(true);
    setIsShortFilm(!isShortFilm);
  }

  //для изменения ширины окна
  //Если мы меняем размер окна, запиши в setWidth новую ширину
  useLayoutEffect(() => {
    function updateWidth() {
      if (!isResizing) {
        setIsResizing(true);
        setTimeout(() => {
          setWidth(window.innerWidth);
          setIsResizing(false);
        }, 700);
      }
    }
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  //получаем лимит для рендера фильмов и шаг

  React.useEffect(() => {
    const { maxNumberOfMovies, step } = getNumberOfMovies(width);
    setMaxNumberOfMovies(maxNumberOfMovies);
    setStep(step);
  }, [width]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route path="/" exact>
            <Main loggedIn={loggedIn} handleBurgerClick={handleBurgerClick}/>
          </Route>

          <ProtectedRoute
            path="/movies"
            component={Movies}
            handleMovieSearch={handleMovieSearch}
            handleBurgerClick={handleBurgerClick}
            cards={foundMovies}
            loggedIn={loggedIn}
            isLoading={isLoading}
            onSaveMovie={handleSaveMovie}
            isSavedMovie={isSavedMovie}
            setIsCheckedForShortFilms={setIsCheckedForShortFilms}
            isCheckedForShortFilms={isCheckedForShortFilms}
            isShortFilm={isShortFilm}
            setIsShortFilm={setIsShortFilm}
            filterShortFilms={filterShortFilms}
            handleCheck={handleCheck}
            resetShownMovies={resetShownMovies}
            width={width}
            setMaxNumberOfMovies={setMaxNumberOfMovies}
            maxNumberOfMovies={maxNumberOfMovies}
            setStep={setStep}
            step={step}
          />

          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            handleSavedMovieSearch={handleSavedMovieSearch}
            handleBurgerClick={handleBurgerClick}
            savedCards={foundSavedMovies}
            loggedIn={loggedIn}
            isLoading={isLoading}
            setSavedMovies={setSavedMovies}
            isSavedMovie={isSavedMovie}
            onDeleteMovie={handleRemoveSavedMovie}
            setIsCheckedForShortFilms={setIsCheckedForShortFilms}
            isCheckedForShortFilms={isCheckedForShortFilms}
            isShortFilm={isShortFilm}
            setIsShortFilm={setIsShortFilm}
            filterShortFilms={filterShortFilms}
            handleCheck={handleCheck}
            resetShownMovies={resetShownMovies}
            width={width}
            setMaxNumberOfMovies={setMaxNumberOfMovies}
            maxNumberOfMovies={maxNumberOfMovies}
            setStep={setStep}
            step={step}
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

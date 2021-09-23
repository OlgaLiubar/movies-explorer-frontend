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

import filterMovies from "../../utils/filterMovies";
import getNumberOfMovies from "../../utils/getNumberOfMovies";
import { SUCCESS_MSG } from "../../utils/constants";
import { FETCH_MOVIES_ERR } from "../../utils/constants";

export default function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const [foundMovies, setFoundMovies] = React.useState([]);
  const [foundSavedMovies, setFoundSavedMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);

  const [width, setWidth] = React.useState(window.innerWidth);
  const [isResizing, setIsResizing] = React.useState(false);
  const [maxNumberOfMovies, setMaxNumberOfMovies] = React.useState(0);
  const [step, setStep] = React.useState(0);

  const [isCheckedForShortFilms, setIsCheckedForShortFilms] = React.useState(
    false
  );
  const [
    isCheckedForSavedShortFilms,
    setIsCheckedForSavedShortFilms,
  ] = React.useState(false);

  const [customErr, setCustomErr] = React.useState("");
  const [serverErrMsg, setServerErrMsg] = React.useState("");
  const [isError, setIsError] = React.useState(false);

  const [isNotFound, setIsNotFound] = React.useState(false);
  const [isNotFoundSaved, setIsNotFoundSaved] = React.useState(false);

  const [successMsg, setSuccessMsg] = React.useState("");
  const [fetchErrMsg, setFetchErrMsg] = React.useState("");

  function handleBurgerClick() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  function handleServerError(err) {
    setServerErrMsg(err);
  }

  function resetServerError() {
    setServerErrMsg("");
    setCustomErr("");
  }

  function getUserData() {
    api
      .getUserData()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }

  React.useEffect(() => {
    if (loggedIn) {
      api
        .getSavedMovies()
        .then((savedMovies) => {
          const mySavedMovies = savedMovies.filter(
            (movie) => movie.owner == currentUser._id
          );
          setSavedMovies(mySavedMovies);
          setFoundSavedMovies(mySavedMovies);
          localStorage.setItem("savedMovies", JSON.stringify(mySavedMovies));
        })
        .catch((err) => {
          setFetchErrMsg(FETCH_MOVIES_ERR);
          console.log(`${err}`);
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    setIsLoading(true);
    if (loggedIn) {
      api
        .getUserData()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, [loggedIn]);

  console.log(loggedIn);

  React.useEffect(() => {
    if(loggedIn){
      auth
      .getContent()
      .then((res) => {
        if (res) {
          setLoggedIn(true);
        }
      })
      .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  function handleRegister({ name, email, password }) {
    setIsLoading(true);
    auth
      .register(name, email, password)
      .then(() => {
        handleLogin({ email, password });
        resetServerError();
      })
      .catch((err) => {
        handleServerError(err);
        setCustomErr("При регистрации пользователя произошла ошибка.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogin({ email, password }) {
    setIsLoading(true);
    auth
      .signIn({ email, password })
      .then(() => {
        getUserData();
        setLoggedIn(true);
        resetServerError();
        history.push("/movies");
      })
      .catch((err) => {
        handleServerError(err);
        setCustomErr("При авторизации произошла ошибка.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateUser({ name, email }) {
    setIsLoading(true);
    api
      .uploadUserInfo({ name, email })
      .then((user) => {
        resetServerError();
        setSuccessMsg(SUCCESS_MSG);
        setCurrentUser(user);
      })
      .catch((err) => {
        handleServerError(err);
        setCustomErr("При обновлении профиля произошла ошибка.");
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  }

  function clearData() {
    setLoggedIn(false);
    localStorage.clear();
  }

  function handleLogOut() {
    setIsLoading(true);
    auth
      .signOut()
      .then(() => {
        setFoundMovies([]);
        setFoundSavedMovies([]);
        clearData();
        history.push("/");
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => setIsLoading(false));
  }

  function handleMovieSearch(query, localArr) {
    if (localArr === localStorage.movies) {
      const filteredMovies = filterMovies(
        JSON.parse(localArr),
        query,
        isCheckedForShortFilms
      );
      handleNoFoundMovies(filteredMovies);
      setFoundMovies(filteredMovies);
    } else {
      const filteredMovies = filterMovies(
        JSON.parse(localArr),
        query,
        isCheckedForSavedShortFilms
      );
      handleNoFoundSavedMovies(filteredMovies);
      setFoundSavedMovies(filteredMovies);
    }
  }

  function handleNoFoundMovies(filteredMovies) {
    if (filteredMovies.length == 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }

  function handleNoFoundSavedMovies(filteredMovies) {
    if (filteredMovies.length == 0) {
      setIsNotFoundSaved(true);
    } else {
      setIsNotFoundSaved(false);
    }
  }

  React.useEffect(() => {
    if (localStorage.movies && localStorage.queryM) {
      const filteredMovies = filterMovies(
        JSON.parse(localStorage.movies),
        localStorage.queryM,
        isCheckedForShortFilms
      );
      handleNoFoundMovies(filteredMovies);
      setFoundMovies(filteredMovies);
    }
    return;
  }, [isCheckedForShortFilms]);

  React.useEffect(() => {
    if (localStorage.savedMovies && localStorage.querySM) {
      const filteredMovies = filterMovies(
        JSON.parse(localStorage.savedMovies),
        localStorage.querySM,
        isCheckedForSavedShortFilms
      );
      handleNoFoundSavedMovies(filteredMovies);
      setFoundSavedMovies(filteredMovies);
    }
    return;
  }, [isCheckedForSavedShortFilms]);

  React.useEffect(() => {
    if (localStorage.savedMovies) {
      if (isCheckedForSavedShortFilms == true) {
        const filteredMovies = JSON.parse(localStorage.savedMovies).filter(
          (movie) => movie.duration <= 40
        );
        setFoundSavedMovies(filteredMovies);
      } else {
        setFoundSavedMovies(savedMovies);
      }
    }
    return;
  }, [isCheckedForSavedShortFilms]);

  React.useEffect(() => {
    setIsLoading(true);
    if (!localStorage.movies) {
      moviesApi
        .getMovies()
        .then((res) => {
          const movies = res.map((movie) => {
            return {
              ...movie,
              movieId: movie.id,
            };
          });
          localStorage.setItem("movies", JSON.stringify(movies));
        })
        .catch((err) => {
          setFetchErrMsg(FETCH_MOVIES_ERR);
          console.log(`${err}`);
        })
        .finally(() => setIsLoading(false));
    }
  }, [loggedIn]);

  // function getSavedMovies() {
  //   setIsLoading(true);
  //   api
  //     .getSavedMovies()
  //     .then((savedMovies) => {
  //       setSavedMovies(savedMovies);
  //       localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  //     })
  //     .catch((err) => {
  //       setFetchErrMsg(FETCH_MOVIES_ERR);
  //       console.log(`${err}`);
  //     })
  //     .finally(() => setIsLoading(false));
  // }

  function getSavedMovies() {
    setIsLoading(true);
    api
      .getSavedMovies()
      .then((savedMovies) => {
        const mySavedMovies = savedMovies.filter(
          (movie) => movie.owner == currentUser._id
        );
        setSavedMovies(mySavedMovies);
        localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
      })
      .catch((err) => {
        setFetchErrMsg(FETCH_MOVIES_ERR);
        console.log(`${err}`);
      })
      .finally(() => setIsLoading(false));
  }

  function handleSaveMovie(movie) {
    api
      .saveMovieCard(movie)
      .then((savedCard) => {
        getSavedMovies();
        setFoundSavedMovies([...foundSavedMovies, savedCard]);
      })
      .catch((err) => console.log(`Добавление карточки: ${err}`))
      .finally(() => console.log("Уф, сохранили!"));
  }

  function isSavedMovie(card) {
    const savedMovie = savedMovies.find((item) => item.movieId === card.id);
    return savedMovie;
  }

  function handleRemoveSavedMovie(movieId) {
    api
      .deleteMovie(movieId)
      .then((deletedMovie) => {
        const newSavedMovies = foundSavedMovies.filter(
          (movie) => movie._id !== deletedMovie.data._id
        );
        setFoundSavedMovies(newSavedMovies);
        getSavedMovies();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCheckMovies() {
    setIsCheckedForShortFilms(!isCheckedForShortFilms);
  }

  function handleCheckSavedMovies() {
    setIsCheckedForSavedShortFilms(!isCheckedForSavedShortFilms);
  }

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

  React.useEffect(() => {
    const { maxNumberOfMovies, step } = getNumberOfMovies(width);
    setMaxNumberOfMovies(maxNumberOfMovies);
    setStep(step);
  }, [width]);

  React.useEffect(() => {
    setTimeout(() => {
      setSuccessMsg("");
    }, 2000);
  }, [successMsg]);

  React.useEffect(() => {
    setTimeout(() => {
      setSuccessMsg("");
    }, 2000);
  }, [fetchErrMsg]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route path="/" exact>
            <Main loggedIn={loggedIn} handleBurgerClick={handleBurgerClick} />
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
            isCheckedForShortFilms={isCheckedForShortFilms}
            handleCheck={handleCheckMovies}
            setMaxNumberOfMovies={setMaxNumberOfMovies}
            maxNumberOfMovies={maxNumberOfMovies}
            setStep={setStep}
            step={step}
            savedMovies={savedMovies}
            notFound={isNotFound}
            onDeleteMovie={handleRemoveSavedMovie}
            fetchErrMsg={fetchErrMsg}
          />

          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            handleMovieSearch={handleMovieSearch}
            handleBurgerClick={handleBurgerClick}
            foundSavedMovies={foundSavedMovies}
            savedMovies={savedMovies}
            loggedIn={loggedIn}
            isLoading={isLoading}
            onDeleteMovie={handleRemoveSavedMovie}
            isCheckedForSavedShortFilms={isCheckedForSavedShortFilms}
            handleCheck={handleCheckSavedMovies}
            isSavedMovie={isSavedMovie}
            notFound={isNotFoundSaved}
            fetchErrMsg={fetchErrMsg}
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
            customErr={customErr}
            isError={isError}
            resetServerError={resetServerError}
            successMsg={successMsg}
          />

          <Route path="/signup">
            {loggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Register
                isLoading={isLoading}
                onSubmit={handleRegister}
                serverErrMsg={serverErrMsg}
                customErr={customErr}
                isError={isError}
                resetServerError={resetServerError}
              />
            )}
          </Route>

          <Route path="/signin">
            {loggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Login
                isLoading={isLoading}
                onSubmit={handleLogin}
                serverErrMsg={serverErrMsg}
                customErr={customErr}
                isError={isError}
                resetServerError={resetServerError}
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

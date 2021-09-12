import React from "react";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Sidebar from "../Sidebar/Sidebar";
import moviesApi from "../../utils/MoviesApi";
import { auth } from "../../utils/auth";
// import api from "../../utils/MainApi";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleBurgerClick() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  const history = useHistory();

  //Обработчик сабмита формы регистрации
  function handleRegisterFormSubmit({ name, email, password }) {
    setIsLoading(true);
    return auth
      .register(name, email, password)
      .then(() => {
        history.push("/signin");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  //Обработчик сабмита формы входа
  function handleLoginFormSubmit({password, email}) {
    console.log(password)
    console.log(email)
    auth
      .signIn(password, email)
      .then(() => {
        handleLogin();
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    if (isLoggedIn) {
      moviesApi
        .getMovies()
        .then((cardData) => {
          console.log(cardData);
          setCards(cardData);
        })
        .catch((err) => console.log(err))
        .finally(() => console.log("good job!"));
    }
  }, [isLoggedIn]);

  // const query = "Город";

  //   cards.map((card) => {
  //     card.card.nameRU.includes(query);
  //  });

  // const b = cards.filter(function (card) {
  //   return card.nameRU.includes(query);
  // });

  // console.log(b); // [9, 7, 8, 9]

  return (
    <div className="page">
      <Switch>
        <Route path="/" exact>
          <Main isLoggedIn={isLoggedIn} />
        </Route>

        <Route path="/movies">
          <Movies handleBurgerClick={handleBurgerClick} cards={cards} />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies handleBurgerClick={handleBurgerClick} />
        </Route>

        <Route path="/profile">
          <Profile handleBurgerClick={handleBurgerClick} />
        </Route>

        <Route path="/signin">
        {isLoggedIn ? (
            <Redirect to="/movies" />
          ) : (
            <Login
              isLoading={isLoading}
              onSubmit={handleLoginFormSubmit}
            />
          )}
        </Route>

        <Route path="/signup">
          {isLoggedIn ? (
            <Redirect to="/movies" />
          ) : (
            <Register
              isLoading={isLoading}
              onSubmit={handleRegisterFormSubmit}
            />
          )}
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
}

export default App;

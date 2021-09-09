import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Sidebar from "../Sidebar/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  function handleBurgerClick() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <div className="page">
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>

        <Route path="/movies">
          <Movies handleBurgerClick={handleBurgerClick} />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies handleBurgerClick={handleBurgerClick} />
        </Route>

        <Route path="/profile">
          <Profile handleBurgerClick={handleBurgerClick} />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/signup">
          <Register />
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

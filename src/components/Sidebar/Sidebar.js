import React from "react";
import { NavLink } from "react-router-dom";
import AccountButton from "../AccountButton/AccountButton";

export default function Sidebar({ isOpen, onClose }) {
  const handleOverlayClose = (event) => {
    if (event.target === event.currentTarget && isOpen) {
      onClose();
    }
  };

  return (
    <div
      className={`sidebar__overlay ${isOpen ? "sidebar__overlay_opened" : ""}`}
      onMouseDown={handleOverlayClose}
    >
      <div className="sidebar">
        <button
          type="button"
          className="sidebar__close-btn"
          onClick={onClose}
        ></button>
        <nav className="sidebar__menu">
          <ul className="sidebar__menu-list">
            <li className="sidebar__menu-item">
              <NavLink
                to={`/`}
                className="sidebar__menu-link"
                onClick={onClose}
              >
                Главная
              </NavLink>
            </li>
            <li className="sidebar__menu-item">
              <NavLink
                to={`/movies`}
                className="sidebar__menu-link"
                activeClassName="sidebar__menu-link_active"
                onClick={onClose}
              >
                Фильмы
              </NavLink>
            </li>
            <li className="sidebar__menu-item">
              <NavLink
                to={`/saved-movies`}
                className="sidebar__menu-link"
                activeClassName="sidebar__menu-link_active"
                onClick={onClose}
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <div onClick={onClose}>
            <AccountButton />
          </div>
        </nav>
      </div>
    </div>
  );
}

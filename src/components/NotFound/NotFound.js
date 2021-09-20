import React from "react";
import { useHistory } from 'react-router-dom';

export default function NotFound() {
  const history = useHistory();
  const back = () => history.goBack();

  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button type="button" onClick={back} className="not-found__button">
          Назад
        </button>
    </section>
  );
}

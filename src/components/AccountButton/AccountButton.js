import React from "react";
import { Link } from "react-router-dom";

export default function AccountButton() {
  return (
    <Link to="/profile" className="account-btn">
      Аккаунт
      <span className="account-btn__icon" />
    </Link>
  );
}

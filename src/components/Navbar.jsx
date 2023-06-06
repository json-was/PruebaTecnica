import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.style.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <Link className="link-item" to="/*">
          Inicio
        </Link>
        <Link className="link-item" to="/crud">
          Agregar dato
        </Link>
        <Link className="link-item" to="/tabla">
          Ver tabla
        </Link>
      </ul>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/*">Inicio</Link>
      </li>
      <li>
        <Link to="/crud">Crud</Link>
      </li>
      <li>
        <Link to="/tabla">Ver tabla</Link>
      </li>
    </ul>
  );
};

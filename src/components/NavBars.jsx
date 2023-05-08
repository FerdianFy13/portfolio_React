import React from "react";
import { Link } from "react-router-dom";
const NavBars = () => {
  return (
    <div>
      <li>
        <Link to="/">Dogs</Link>
      </li>
      <li>
        <Link to="/cats">Cats</Link>
      </li>
    </div>
  );
};
export default NavBars;

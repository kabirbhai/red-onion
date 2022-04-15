import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../images/logo.png";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="logo">{Logo}</div>
        <div>
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;

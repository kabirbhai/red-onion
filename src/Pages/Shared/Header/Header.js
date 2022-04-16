import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/">
            {" "}
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/cart">
            {" "}
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;

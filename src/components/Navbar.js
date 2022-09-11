import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let history = useNavigate();
  let location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history("/login");
  };
  useEffect(() => {}, [location]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          iNotebook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                } `}
                to="/"
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                } `}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>{" "}
          {!localStorage.getItem('token')?<form className="d-flex">
            <Link className="btn btn-primary mx-1" to="/login" role="button">
              Login
            </Link>
            <Link className="btn btn-primary mx-1" to="/signup" role="button">
              Signup
            </Link>  
          </form>: <button className="btn btn-primary mx-1" onClick={handleLogout}>Logout</button>}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

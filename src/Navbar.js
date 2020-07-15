import React from "react";
import { NavLink } from "react-router-dom";
const isActivefunc = (match, location) => {
  console.log(match, location);
  return match;
};
const Navbar = () => {
  return (
    <>
      <div className="container nav_bg">
        <div className="row">
          <div className="col-12 mx-auto pt-3">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="container-fluid">
                <NavLink className="header-brand-name" to="/">
                  GraphMe
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        isActive={isActivefunc}
                        exact
                        activeClassName="menu_active"
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link active"
                        aria-current="page"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link active"
                        aria-current="page"
                        to="/graph"
                      >
                        Graph
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link active"
                        aria-current="page"
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;

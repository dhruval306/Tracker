import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <section id="header" className="header bg-light">
        <div className="container-fluid shadow-sm">
          <div className="row">
            <div className="col-10 mx-auto">
              <nav className="navbar  navbar-expand-lg navbar-light">
                <div className="container-fluid">
                  <NavLink to="/home" className="navbar-brand fw-bold brand">
                    <span className="fs-1">t</span>racker
                  </NavLink>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav  text-uppercase header_ul mb-2 mb-lg-0">
                      <li className="nav-item li_item">
                        <NavLink
                          to="/home"
                          activeClassName="header_li  fw-bold"
                          className="nav-link "
                        >
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item li_item">
                        <NavLink
                          to="/acm"
                          activeClassName="header_li fw-bold"
                          className="nav-link"
                        >
                          ACM
                        </NavLink>
                      </li>
                      <li className="nav-item li_item">
                        <NavLink
                          to="/controller"
                          activeClassName="header_li fw-bold"
                          className="nav-link"
                        >
                          controller
                        </NavLink>
                      </li>
                      {/* <li className="nav-item li_item">
                        <NavLink
                          to="/aboutUs"
                          activeClassName="header_li fw-bold"
                          className="nav-link"
                        >
                          about us
                        </NavLink>
                      </li> */}
                      <li className="nav-item li_item">
                        <NavLink
                          to="/userlogin"
                          activeClassName="header_li fw-bold"
                          className="nav-link"
                        >
                          login
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default NavBar;

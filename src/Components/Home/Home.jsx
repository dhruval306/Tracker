import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section id="home" className="home">
        <div className="container-fluid align-items-center  navitem">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row d-flex">
                <div className="col-lg-6 col-12 my-auto order-lg-1 order-2 d-flex flex-column justify-content-center">
                  <h1 className="text-uppercase text-left py-5 fs-1">
                    <span className="heading_1">time</span> isn't the main thing
                    but it's the only <span className="heading_1"> thing</span>
                  </h1>
                  <h4 className="text-uppercase text-left py-2">
                    we provide you the best service
                  </h4>
                  <NavLink
                    to="/controller"
                    className="btn col-3 py-2 btn-outline-primary"
                  >
                    let's go
                  </NavLink>
                </div>

                <div className="col-lg-6 pt-3  col-12 order-lg-2 order-1  justify-content-center">
                  <figure>
                    <img
                      className="img-fluid img_div "
                      src="./photo/clock.svg"
                      alt="_photo"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;

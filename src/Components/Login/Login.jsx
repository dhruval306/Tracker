import React from "react";

const Login = () => {
  return (
    <>
      <div className="container-fluid align-items-center">
        <div className="row">
          <div className="col-8 shadow-sm mx-auto my-5 ">
            <div className="row d-flex">
              <h1 className="text-uppercase text-center py-2 fs-3 bg-light">
                log in
              </h1>
              <div className="col-lg-6 col-12 my-auto order-lg-1 order-2 d-flex flex-column justify-content-center">
                <div className="col-lg-8 col-12 mx-auto bg-white py-5">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                      placeholder="Username"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <input
                      type="password"
                      class="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                      placeholder="Password"
                    />
                  </div>
                  <div class="input-group justify-content-center mb-3">
                    <button className="btn px-3 btn-dark">Continue</button>
                  </div>

                  <div class="input-group justify-content-center pt-5">
                    <p className="text-capitalize px-1 fs">new to tracker? </p>
                    <a className="fw-bold text-capitalize text-decoration-none">
                      sign in
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 pt-3  col-12 order-lg-2 order-1  justify-content-center">
                <figure>
                  <img
                    className="img-fluid img_div "
                    src="./photo/login2.svg"
                    alt="_photo"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;

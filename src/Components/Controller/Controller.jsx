import React from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Table from "./Table";

const Controller = () => {
  const data = useSelector((state) => state.EmployeeReducer);
  console.log(data);
  return (
    <>
      <section>
        <div className="container-fluid align-items-center">
          <div className="row d-flex">
            <div className="col-10 mx-auto">
              <div className="row d-flex flex-row justify-content-center align-items-center">
                <div className="col-lg-6 col-6">
                  <h2 className="text-capitalize title text-left pt-3">
                    employee data
                  </h2>
                </div>
                <div className="col-lg-6 col-4 abc">
                  <input className="form-control" placeholder="Search" />
                </div>
                <hr />
              </div>
              <Table content={data} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Controller;

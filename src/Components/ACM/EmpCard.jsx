import React from "react";

const EmpCard = (prop) => {
  return (
    <>
      <div className="row d-flex flex-row justify-content-center align-items-center">
        {prop.emp.map((val, index) => {
          return (
            <>
              <div className=" col-xl-4  col-lg-6 col-12 mx-auto" key={index}>
                <div className="card mb-3 card">
                  <div className="row g-0">
                    <div className="col-md-4 overflow-hidden">
                      <img
                        className="img-fluid  img_emp"
                        src={val.image}
                        alt="Employee_photo"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title title text-left text-uppercase">
                          {val.name}
                          <small className="role px-2"> ~( {val.role} )</small>
                        </h5>
                        <hr />

                        <p className="text-muted mb-2 font-13">
                          <strong>Mobile :</strong>
                          <span className="ml-2 px-1">{val.number}</span>
                        </p>
                        <p className="text-muted mb-2 font-13">
                          <strong>Email :</strong>
                          <span className="ml-2 px-1">{val.email}</span>
                        </p>

                        <p className="text-muted mb-2 font-13">
                          <strong>Salary :</strong>{" "}
                          <span className="ml-2 ">{val.salary}</span>
                        </p>

                        <p className="text-muted mb-1 font-13">
                          <strong>Arriving Time :</strong>{" "}
                          <span className="ml-2">{val.time}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default EmpCard;

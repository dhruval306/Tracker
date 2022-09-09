import React from "react";
const Form = (prop) => {
  console.log(prop.data);
  return (
    <>
      {prop.formvalue ? (
        <div className="col-10 mx-auto">
          <div className="row d-flex flex-row">
            <div className="col-xl-3 col-lg-6 col-12 mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                value={prop.data.name}
                onChange={prop.onselect}
                autoComplete="off"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Full Name"
              />
            </div>
            <div className="col-xl-3 col-lg-6 col-12 mb-3">
              <input
                type="password"
                className="form-control"
                name="password"
                value={prop.data.password}
                onChange={prop.onselect}
                autoComplete="off"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Password"
              />
            </div>
            <div className="col-xl-3 col-lg-6 col-12 mb-3">
              <select
                type="password"
                class="form-select "
                aria-label=".form-select-sm example"
                name="role"
                value={prop.data.role}
                onChange={prop.onselect}
                autoComplete="off"
              >
                <option value="employer" defaultValue>
                  select role
                </option>
                <option value="employer">employer</option>
              </select>
            </div>
            <div className="col-xl-3 col-lg-6 col-12 mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                value={prop.data.email}
                onChange={prop.onselect}
                autoComplete="off"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Email"
              />
            </div>
            <div className="col-xl-3 col-lg-6 col-12 mb-3">
              <input
                type="number"
                className="form-control"
                name="number"
                value={prop.data.number}
                onChange={prop.onselect}
                autoComplete="off"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Phone Number"
              />
            </div>
            <div className="col-xl-3 col-lg-6 col-12 mb-3">
              <input
                type="number"
                className="form-control"
                name="salary"
                value={prop.data.salary}
                onChange={prop.onselect}
                autoComplete="off"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Salary"
              />
            </div>
            <div className="col-xl-3 col-lg-6 col-12 mb-3">
              <input
                type="text"
                className="form-control"
                name="time"
                value={prop.data.time}
                onChange={prop.onselect}
                autoComplete="off"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Ariving time"
              />
            </div>
            <hr className="w-75 mx-auto" />
            <div className="col-lg-12 text-center col-12 mb-3">
              <button
                onClick={prop.onsave}
                className="btn btn-success px-3 mx-1"
              >
                Save
              </button>
              <button className="btn btn-secondary px-2 mx-1">Reset</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Form;

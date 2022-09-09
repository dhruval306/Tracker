import React, { useState } from "react";
import EmpCard from "./EmpCard";
import { useDispatch } from "react-redux";
import Form from "./Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const Acm = () => {
  const dispatch = useDispatch();

  const employee = useSelector((state) => state.EmployeeReducer);
  console.log(employee);
  const [form, setForm] = useState(false);
  const [id, setId] = useState(3);
  const [empForm, setEmpForm] = useState({
    id: id + 1,
    name: "",
    role: "",
    image: "./photo/e1.svg",
    email: "",
    number: "",
    salary: "",
    time: "",
  });

  const formEvent = () => {
    {
      form ? setForm(false) : setForm(true);
    }
  };
  const EmpEvent = (event) => {
    const { name, value } = event.target;
    setEmpForm((olddata) => {
      return { ...olddata, [name]: value };
    });
  };
  const addEmpData = () => {
    if (
      empForm.name === "" ||
      empForm.password === "" ||
      empForm.email === "" ||
      empForm.number === "" ||
      empForm.role === "" ||
      empForm.salary === null ||
      empForm.time === ""
    ) {
      toast.warn("Invalid Information", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      dispatch({ type: "ADD_EMPLOYEE", payload: empForm });
      setForm(false);
      setEmpForm({
        id: id + 1,
        name: "",
        role: "",
        image: "./photo/e1.svg",
        email: "",
        number: "",
        salary: null,
        time: "",
      });
    }
    // console.log(empForm.name);
  };
  return (
    <>
      <div className="container-fluid align-items-center">
        <div className="row d-flex">
          <div className="col-10 mx-auto">
            <div className="row d-flex flex-row justify-content-center align-items-center">
              <div className="col-lg-6 col-4">
                <h2 className="text-capitalize title text-left pt-3">
                  employee data
                </h2>
              </div>
              <div className="col-lg-4 col-4 abc">
                <input className="form-control" placeholder="Search" />
              </div>
              <div className="col-lg-2 col-4">
                <button
                  onClick={formEvent}
                  className="btn btn-outline-secondary text-uppercase"
                >
                  add new
                </button>
              </div>
              <hr />
            </div>
            <Form
              formvalue={form}
              data={empForm}
              onsave={addEmpData}
              onselect={EmpEvent}
            />
            <EmpCard emp={employee} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Acm;

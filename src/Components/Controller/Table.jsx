import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { useDispatch } from "react-redux";

const Table = (prop) => {
  const dispatch = useDispatch();
  const DeatailEvent = (id) => {
    dispatch({ type: "detail", payload: 1 });
  };
  return (
    <>
      <table className="table table-wrap table-borderless text-uppercase text-center table-centered mb-0 ">
        <thead className="bg-light text-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {prop.content.map((value, index) => {
            return (
              <>
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td className="fs-6 text-uppercase ">{value.name}</td>
                  <td className="text-uppercase"> {value.role}</td>
                  <td className="">
                    <BsArrowRightShort
                      onClick={DeatailEvent}
                      className="fs-3 enter"
                    />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;

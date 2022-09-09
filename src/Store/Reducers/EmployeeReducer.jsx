import React from "react";

const initialEmployee = [
  {
    id: 1,
    name: "Dhruval soni",
    role: "owner",
    image: "./photo/profile.jpeg",
    email: "dhruval@gmail.com",
    number: "7878787478",
    salary: 100000,
    time: "5:30",
  },
  {
    id: 2,
    name: "Jaymin patel",
    role: "CEO",
    image: "./photo/manager.jpeg",
    email: "jaymin@gmail.com",
    number: "6587585965",
    salary: 70000,
    time: "8:30",
  },
  {
    id: 3,
    name: "Lehri abhishek",
    role: "manager",
    image: "./photo/ceo.png",
    email: "abhishek@gmail.com",
    number: "8788852578",
    salary: 70000,
    time: "9:30",
  },
];

const EmployeeReducer = (state = initialEmployee, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default EmployeeReducer;

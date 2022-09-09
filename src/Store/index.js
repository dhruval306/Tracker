import { combineReducers, createStore } from "redux";
import EmployeeReducer from "./Reducers/EmployeeReducer";

const root = combineReducers({
  EmployeeReducer,
});
const store = createStore(root);
export default store;

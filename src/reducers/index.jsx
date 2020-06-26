import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

/* ES6 syntax sugar */
// const allReducers = combineReducers({
//   counterReducer, logedReducer
// })


// calling it Counter & isLogged so it shows up like that in state
const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer
});

export default allReducers;

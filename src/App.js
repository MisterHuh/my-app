import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from "redux";
import { useSelector } from "react-redux";

import { increment, decrement } from "./actions/index";
import { useDispatch } from "react-redux";

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">

    <h1>Counter {counter} </h1>
    <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

    {isLogged ? <h3>Valuable Information I shouldn't See</h3> : "" }

    </div>
  );
}

// STORE = globalized state
// variable declared after counter for this practice purpose

// ACTION = describes what i'm doing
// const increment = () => {
//   return {
//     type: "INCREMENT",
//     payload: 10
//   };
// }

// const decrement = () => {
//   return {
//     type: "DECREMENT",
//     payload: 1
//   };
// }

// REDUCER = describe what your action transforms the state into next state
// const counter = (state = 1, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + action.payload;
//     case "DECREMENT":
//       return state - action.payload;
//     default:
//       return state;
//   }
// }

// const store = createStore(counter);


// this is to console log
// store.subscribe(() => console.log(store.getState()));

// DISPATCH = where we execute the action
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(increment());





export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from "redux";

// STORE = globalized state
// variable declared after counter for this practice purpose

// ACTION = describes what i'm doing
const increment = () => {
  return {
    type: "INCREMENT",
    payload: 10
  };
}

const decrement = () => {
  return {
    type: "DECREMENT",
    payload: 1
  };
}

// REDUCER = describe what your action transforms the state into next state
const counter = (state = 1, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
}

const store = createStore(counter);


// this is to console log
store.subscribe(() => console.log(store.getState()));

// DISPATCH = where we execute the action
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        hello
      </header>
    </div>
  );
}



export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from "redux";

// STORE = globalized state

// ACTION = describes what i'm doing

const increment = () => {
  return {
    type: "INCREMENT"
  }
};

const decrement = () => {
  return {
    type: "DECREMENT"
  }
}

// REDUCER =
const counter = (state = 0, action) => {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);

// this is to console log
store.subscribe(() => console.log(store.getState()));

// DISPATCH
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

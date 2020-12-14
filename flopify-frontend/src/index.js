import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./navigation/Navbar";
import genreReducer from "./reducers/genreReducer";
import App from "./App";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(genreReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <App />
      </div>
    </Router>
  </Provider>,

  document.getElementById("root")
);

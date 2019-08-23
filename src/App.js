import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducer from "./store";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(reducer, applyMiddleware(logger, thunk));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;

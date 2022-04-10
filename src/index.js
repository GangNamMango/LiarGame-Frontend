import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { Router } from "react-router-dom";
import rootReducer from "./useRedux/rootReducer";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
    <Router history={customHistory}>
      <Provider
        store={createStore(
          rootReducer,
          composeWithDevTools(
            applyMiddleware(
              ReduxThunk.withExtraArgument({ history: customHistory }, logger)
            )
          )
        )}
      >
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

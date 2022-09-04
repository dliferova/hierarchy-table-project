import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./store/root-reducer";
import App from "./components/app/app";
import {recordsLoaded} from "./store/actions";
import recordsDate from "./data";

const store  = configureStore({
  reducer: rootReducer
})

store.dispatch(recordsLoaded(recordsDate));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

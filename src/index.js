import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import './assets/scss/main.scss';
import { App } from './root-cmp';
import configureStore from './configure-store'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';


// import reportWebVitals from './reportWebVitals';

const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './reportWebVitals'
// import bootstrap from 'bootstrap/dist/css/bootstrap.css'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
// serviceWorker.register(); // unregister(); para trabajar offline, va guardando en memoria cache las rutas 


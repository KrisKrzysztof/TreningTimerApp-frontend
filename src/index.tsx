import './index.css';
import './fonts/Gruppo-Regular.woff2';
import './fonts/digital-7.woff2';
import './fonts/Orbitron.woff2'
import './fonts/RacingSansOne-Regular.woff2'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

      <BrowserRouter>
          <App />
      </BrowserRouter>

);

reportWebVitals();

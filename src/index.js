import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router";
import Second from "./Second";
import Third from "./Third";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <div>
          Links

          <nav>
              <li>              <a href={"/second"}> Second</a></li>
              <li><a href={"/third"}> Thirds</a></li>
<li>              <a href={"/"}> Home</a></li>
          </nav>

      </div>

      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/second" element={<Second />} />
              <Route path="/third" element={<Third />} />
          </Routes>
      </BrowserRouter>a
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

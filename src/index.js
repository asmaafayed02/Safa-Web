import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from 'react-bootstrap'
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider
      dir="rtl"
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

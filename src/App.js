import React from "react";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
  
  return (
      <>
        <Header/>
        <HomePage/>
        <Footer/>
      </>
  );
}

export default App;

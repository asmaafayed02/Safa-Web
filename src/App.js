import React from "react";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Lectures from "./components/Lecturers/Lectures";

function App() {
  
  return (
      <>
        <Header/>
        <Lectures/>
      </>
  );
}

export default App;

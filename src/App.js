import "./App.css";
import Demo from "./components/Demo";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";
import React, { useEffect } from "react";
function App() {
  return (
    <div>
      <NavBar />
      <Demo />
    </div>
  );
}

export default App;

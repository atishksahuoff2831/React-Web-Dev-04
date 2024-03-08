import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";
import Header from "./Components/Welcome/Header";
import About from "./Components/About/About";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Welcome />} />
      </Routes>
      <Routes>
          <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}
export default App;
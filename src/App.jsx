import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";
import Header from "./Components/Welcome/Header";
import About from "./Components/About/About";
import MaleProducts from "./Components/Products/MaleProducts";
import Cart from "./Components/Welcome/Cart";
import View from "./Components/View/View";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/About" element={<About />} />
          <Route path="/Male" element={<MaleProducts />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/View/:id" element={<View />} />
      </Routes>
    </>
  );
}
export default App;
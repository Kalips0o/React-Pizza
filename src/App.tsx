import React from "react";
import "./scss/app.scss";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";
import MainLayout from "./components/layouts/MainLayout";
import FullPizza from "./Pages/FullPizza";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="pizza" element={<Home />} />
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<FullPizza/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

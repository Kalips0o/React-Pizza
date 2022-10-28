import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/*" element={<NotFound />}/>
            <Route path="/Cart" element={<Cart />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

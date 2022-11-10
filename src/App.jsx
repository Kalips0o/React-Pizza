import React, {useState} from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";




export const SearchContext = React.createContext('');


function App() {
    const [searchValue, setSearchValue]=useState('')

  return (
    <div className="wrapper">
     <SearchContext.Provider value={{searchValue, setSearchValue}}>
         <Header />
         <div className="content">
             <div className="container">
                 <Routes>
                     <Route path="/" element={<Home searchValue={searchValue} />} />
                     <Route path="/cart" element={<Cart />} />
                     <Route path="*" element={<NotFound />} />
                 </Routes>
             </div>
         </div>
     </SearchContext.Provider>
    </div>
  );
}

export default App;

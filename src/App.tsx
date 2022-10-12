import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            {/*{Categories()}*/}
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title={"Мексиканская"} price={500}/>
            <PizzaBlock title={"Гавайская"} price={350}/>
            <PizzaBlock title={"Бургер"} price={350}/>
            <PizzaBlock title={"Охотничья"} price={400}/>
            <PizzaBlock title={"Ананасовая"} price={435}/>
            <PizzaBlock title={"Копченая"} price={765}/>


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

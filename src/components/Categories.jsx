import React, { useState } from "react";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            onClick={() => {
              onClickCategory(index);
            }}
            className={activeIndex === index ? "active" : ""}
          >
            {value}
          </li>
        ))}

        {/*<li onClick={()=>{onClickCategory(0)}} className={activeIndex=== 0 ? 'active' : ''}>Все</li>*/}
      </ul>
    </div>
  );
}

export default Categories;

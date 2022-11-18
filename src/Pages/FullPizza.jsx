import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const FullPizza = () => {
  const [pizza, setPizza] = useState();

  const { id } = useParams();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://6356aacb2712d01e14f9c705.mockapi.io/items/`+id
        );
        setPizza(data);
      } catch (error) {
        alert("ошибка при получении пиццы");
      }
    }

    fetchPizza();
  }, []);
  if (!pizza) {
    return "loading...";
  }

    return (
        <div className="container">
            <img src={pizza.imageUrl} />
            <h2>{pizza.title}</h2>
            <h3>{pizza.description}</h3>
            <h4>{pizza.price} BYN</h4>
            <Link to="/">
                <button className="button button--outline button--add">
                    <span>Назад</span>
                </button>
            </Link>
        </div>
    );
};

export default FullPizza;
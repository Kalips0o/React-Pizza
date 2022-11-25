import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import s from './FullPizza.module.css';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
    description: string;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://6356aacb2712d01e14f9c705.mockapi.io/items/` + id
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении пиццы!");
        navigate("/");
      }
    }

    fetchPizza();
  }, []);
  if (!pizza) {
    return <>Loading...</>;
  }

  return (
    <div className={s.content}>
      <img className={s.picture} src={pizza.imageUrl} />
      <div>
        <h2>{pizza.title}</h2>
        <h3>{pizza.description}</h3>
        <h4>{pizza.price} BYN</h4>
      </div>

      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;

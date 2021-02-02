import React from "react";
import { Link } from "react-router-dom";
import "../styles/Cards.scss";

const Cards = ({ dataResults }) => {
  const handleClick = (data) => {
    const id = localStorage.setItem("id", data);
  };
  return (
    <main className="main">
      {dataResults.map((data) => {
        return (
          <form className="Cards">
            <img className="Cards__img" src={data.thumbnail} alt="imagen" />
            <div className="Cards__info">
              <Link to="/main" onClick={() => {handleClick(data.id);}} className="Cards__info--titulo">
                {data.title}
              </Link>
              <p className="Cards__info--precio">
                ${data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
            </div>
          </form>
        );
      })}
    </main>
  );
};

export default Cards;

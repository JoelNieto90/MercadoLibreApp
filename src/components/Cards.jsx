import React from "react";
import { Link } from "react-router-dom";
import '../styles/Cards.scss'

const Cards = ({ dataResults }) => {
  return (
    <main className="main">
      {dataResults.map((data) => {
        return (
          <form className="Cards">
            <img className="Cards__img" src={data.thumbnail} alt="imagen" />
            <div className="Cards__info">
              <Link
                to={`/main/${data.id}`}
                value={data.id}
                className="Cards__info--titulo"
              >
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

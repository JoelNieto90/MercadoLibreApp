import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ dataResults }) => {
  return (
    <main className="main">
          <form className="Cards">
            <img className="Cards__img" src='' alt="imagen" />
            <div className="Cards__info">
              <Link to="/main" value='value' className="Cards__info--titulo">
                Titulo
              </Link>
              <p className="Cards__info--precio">
                Precio
              </p>
              <p className="Cards__info--installments">
                en 12 x $
              </p>
            </div>
          </form>
    </main>
  );
};

export default Cards;

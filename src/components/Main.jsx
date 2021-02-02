import React, { Component } from "react";
import '../styles/Main.scss'

export default class Main extends Component {

  render() {
    return (
      <section className="Main">
        <div className="Main__Pictures">
              <img
                className="Main__Pictures--img"
                src=''
                alt='imagen'
              />
        </div>
        <div className="Main__Image">
          <img className="Main__Image--img" src='' />
        </div>
        <div className="Main__Info">
          <small className="Main__Info--small">Nuevo | 6927 vendidos</small>
          <p className="Main__Info--title">Titulo</p>
          <p className="Main__Info--price">$Precio</p>
          <a href='' className="Main__Info--button">
            Comprar ahora
          </a>
          <ul className="Main__Info--list">
                <li className="Main__Info--list--li">
                  Atributo : Valor
                </li>
          </ul>
        </div>
      </section>
    );
  }
}

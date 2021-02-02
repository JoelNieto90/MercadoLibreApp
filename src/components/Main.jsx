import React, { Component } from "react";
import axios from "axios";
import "../styles/Main.scss";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: [],
      pictures: [],
      atributes: [],
      currentId: 0,
    };
  }

  componentDidMount() {
    const id = "MLM828343192";
    axios.get(`https://api.mercadolibre.com/items/${id}`).then(
      (res) => {
        const data = res.data;
        const pictures = res.data.pictures;
        const atributes = res.data.attributes;
        this.setState({
          index: data,
          pictures: pictures,
          atributes: atributes,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
  render() {
    return (
      <section className="Main">
        <div className="Main__Pictures">
          <img className="Main__Pictures--img" src="" alt="imagen" />
        </div>
        <div className="Main__Image">
          <img className="Main__Image--img" src="" />
        </div>
        <div className="Main__Info">
          <small className="Main__Info--small">Nuevo | 6927 vendidos</small>
          <p className="Main__Info--title">Titulo</p>
          <p className="Main__Info--price">$Precio</p>
          <a href="" className="Main__Info--button">
            Comprar ahora
          </a>
          <ul className="Main__Info--list">
            <li className="Main__Info--list--li">Atributo : Valor</li>
          </ul>
        </div>
      </section>
    );
  }
}

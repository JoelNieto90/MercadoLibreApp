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
    const id = localStorage.getItem("id");
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
          {this.state.pictures.map((picture) => {
            return (
              <img
                className="Main__Pictures--img"
                src={picture.url}
                alt={this.state.index.title}
              />
            );
          })}
        </div>
        <div className="Main__Image">
          <img className="Main__Image--img" src={this.state.index.thumbnail} />
        </div>
        <div className="Main__Info">
          <small className="Main__Info--small">Nuevo | 6927 vendidos</small>
          <p className="Main__Info--title">{this.state.index.title}</p>
          <p className="Main__Info--price">${this.state.index.price}</p>
          <a href={this.state.index.permalink} className="Main__Info--button">
            Comprar ahora
          </a>
          <ul className="Main__Info--list">
            {this.state.atributes.map((atribute) => {
              return (
                <li className="Main__Info--list--li">
                  {atribute.name} : {atribute.value_name}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

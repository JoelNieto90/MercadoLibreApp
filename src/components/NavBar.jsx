import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../Assets/logo.png";
import "../styles/NavBar.scss";
import location from "../Assets/location.svg";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const valueState = this.state.search;

    const api = `https://api.mercadolibre.com/sites/MLM/search?q=${valueState}&limit=5`;

    axios.get(api).then(
      (res) => {
        const data = res.data.results;
        this.props.getDataResults(data);
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  componentDidMount() {
    axios
      .get("https://api.mercadolibre.com/sites/MLM/search?category=MLM1648")
      .then(
        (res) => {
          const data = res.data.results;
          console.log(data);
          this.props.getDataResults(data);
        },
        (err) => {
          console.log(err);
        }
      );
  }
  render() {
    return (
      <nav className="NavBar">
        <form onSubmit={this.handleSubmit} className="NavBar__search">
          <Link to="/">
            <img src={Logo} className="NavBar__search--img" alt="Logo" />
          </Link>
          <input
            className="NavBar__search--input"
            type="text"
            placeholder="Buscar productos, marcas y más..."
            onChange={this.handleChange}
            value={this.state.search}
          />
          <button
            type="submit"
            className="NavBar__search--input--button"
          ></button>
          <img
            className="NavBar__search--meses"
            src="https://http2.mlstatic.com/resources/deals/exhibitors_resources/mlm-menu-desktop-notification-picture-6f262c0a-9fe6-4a7a-9075-a0ab43d5b202.png"
            alt="Mercado Credito"
          />
        </form>
        <section className="NavBar__menu">
          <ul className="NavBar__menu--list">
            <li className="NavBar__menu--item">
              <img
                src={location}
                alt="Ubicación"
                className="NavBar__menu--item--img"
              />
              <div className="NavBar__menu--item--span">
                <span className="NavBar__menu--item--cp">Enviar a </span>
                <span className="NavBar__menu--item--link">
                  Capital Federal 1431
                </span>
              </div>
            </li>

            <li className="NavBar__menu--item">
              <p className="NavBar__menu--item--p">Categorias </p>
              <p className="NavBar__menu--item--p">Ofertas</p>
              <p className="NavBar__menu--item--p">Historial</p>
              <p className="NavBar__menu--item--p">Supermercado</p>
              <p className="NavBar__menu--item--p">Tiendas oficiales</p>
              <p className="NavBar__menu--item--p">Vender</p>
              <p className="NavBar__menu--item--p">Ayuda</p>
            </li>

            <li className="NavBar__menu--item">
              <p className="NavBar__menu--item--p2">Crea tu cuenta</p>
              <p className="NavBar__menu--item--p2">Ingresá</p>
              <p className="NavBar__menu--item--p2">Mis compras</p>
            </li>
          </ul>
        </section>
      </nav>
    );
  }
}

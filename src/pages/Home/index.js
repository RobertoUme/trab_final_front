import React from "react";

import logo from "../../assets/logo.png";
import { Container } from "./style.js";
import { Link } from "react-router-dom";
import cadu from "../../assets/icones/plus.svg";
import cadc from "../../assets/icones/cadu.svg";
import cads from "../../assets/icones/relatorios.svg";
import rel from "../../assets/icones/grafico.svg";
export default function Menu({ history }) {
  async function handleSubmit(event) {
    event.preventDefault();
    localStorage.removeItem("@CESTA/token");
    history.push("/");
  }
  return (
    <Container>
      <div className="Tela">
        <nav className="Box_1">
          <img src={logo} className="image" />
          <form onSubmit={handleSubmit}>
            <button>sair do sistema</button>
          </form>
        </nav>
        <div className="Box">
          <section className="se1">
            <Link className="lugar" to="../Cadastro">
              <div className="a">
                <img src={cadu} className="icon" />
                <h1>Cadastrar Usuario</h1>
              </div>
            </Link>
            <Link className="lugar" to="../Clientes">
              <div className="a">
                <img src={cadc} className="icon" />
                <h1>Cadastrar Cliente</h1>
              </div>
            </Link>
            <Link className="lugar" to="../Servicos">
              <div className="a">
                <img src={cads} className="icon" />
                <h1>Cadastrar Serviço</h1>
              </div>
            </Link>
            <Link className="lugar" to="../Relatorio">
              <div className="a">
                <img src={rel} className="icon" />
                <h1>Exibir Relatórios</h1>
              </div>
            </Link>
          </section>
        </div>
      </div>
    </Container>
  );
}

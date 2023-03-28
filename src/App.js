import React, { Component } from "react";
import axios from "axios";

const Api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character"
});
class App extends Component {
  state = {
    informacoes: []
  };
  componentDidMount() {
    this.PegarPersonagem();
  }
  PegarPersonagem = async () => {
    const resposta = await Api.get();

    console.log(resposta.data.results);

    const itens = resposta.data.results.map((item) => {
      return {
        ...item
      };
    });
    this.setState({
      informacoes: itens
    });
  };
  render() {
    return (
      <div>
        {this.state.informacoes.map((item ) =>(
          <div>
          <img src={item.image} alt={item.name} />
          <h1>{item.name}</h1>
          <h2>{item.species}</h2>
        </div>
        )
          
        )}
      </div>
    );
  }
}

export default App;

import React from "react";
/**
 * JSX -html integrado dentro do js
 * Componente - e uma função que retorna html, e funcionalidades css e js
 */

/**
 * Conceito de Estado no react.
 *  -uma informação que vai ser mantida pelo componente.
 *  toda vez  que o estado e alterado o componente e remontado, exibindo as informações emtela
 */

/**
 * conceito de imutabilidade.
 */
import "./global.css";
import Routes from "./routes";

function App() {
  /**Propriedade */
  // const [counter, setCounter] = useState(0);
  // //retona um array [valor, funcaoDeAtualizacao do valor].

  // // função em react
  // function increment() {
  //   setCounter(counter + 1);
  // }
  return (
    <div>
      <Routes />
      {/* <Header>Semana OminiStack</Header>
      <Header>Contador :{counter}</Header>
      {/* chamando uma função no react onClick={} 
      <button onClick={increment}>Incrementa</button> */}
    </div>
  );
}

export default App;

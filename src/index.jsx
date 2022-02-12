import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/* import App from "./components/App/index"; */

function App(props) {
  return (
    <h1 style={{ color: "black" }}>
      ¡{props.saludo}, {props.nombre}!
    </h1>
  );
}

function withSaludo(WrappedComponent) {
  return function WrappedComponentWithSaludo(saludo) {
    return function ComponenteDeVerdad(props) {
      return (
        <>
          <WrappedComponent {...props} saludo={saludo} />
          <p style={{ color: "black" }}>
            Estamos acompañando al WrappedComponent
          </p>
        </>
      );
    };
  }
}

const AppWithSaludo = withSaludo(App)('Wenas');

ReactDOM.render(
  <AppWithSaludo nombre="juanita"/>,
  //<App saludo="Buenas" nombre="Nath"/>,
  document.getElementById("root")
);

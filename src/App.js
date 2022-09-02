import React from "react";
import Inicio from "./Components/Início.js";
import Music from "./Components/Music.js";

export default class Color extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      document.body.style.backgroundColor = "orange";
    }, 4000);
  }

  render() {
    return (
      <>
        <Inicio />
        <Music />
        <p>Monitoria</p>
      </>
    );
  }
}

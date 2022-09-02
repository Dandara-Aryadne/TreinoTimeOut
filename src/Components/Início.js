import React from "react";

export default class Color extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      document.body.style.backgroundColor = "blue";
    }, 4000);
  }

  render() {
    return (
      <>
        <h1>Monitoria com Leonardo</h1>
      </>
    );
  }
}

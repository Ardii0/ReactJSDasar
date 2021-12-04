import React from "react";
// import Operan from "./Operan";

export default class StateProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Mobil: "Ferari, Lamborgini, Tesla",
    };
  }

  gantiMobil = (Mobil_baru) => {
    this.setState({
      Mobil: Mobil_baru,
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.Mobil}</h2>
        <button onClick={() => this.gantiMobil("Ferari, Tesla")}>
          Ganti Mobil
        </button>
      </div>
    );
  }
}

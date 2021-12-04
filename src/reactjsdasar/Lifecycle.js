import React from "react";
import Sublifecycle from "./Sublifecycle";

export default class Lifecycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      makanan: "Bakso",
      data: {},
      tampilHalamanSub: false,
    };
  }
  //1
  //   componentDidMount() {
  //     fetch("https://jsonplaceholder.typicode.com/todos/1")
  //       .then((response) => console.log("Hasil: ", response.json()))
  //       .then((json) => console.log("Json: ", json));
  //   }
  //Then 2
  //   componentDidMount() {
  //     fetch("https://jsonplaceholder.typicode.com/todos/1")
  //       .then((response) => response.json())
  //       .then((json) => console.log("Simpan Then 2 : ", json));
  //   }
  //State Data
  //   componentDidMount() {
  //     fetch("https://jsonplaceholder.typicode.com/todos/1")
  //       .then((response) => response.json())
  //       .then((json) => {
  //         this.setState({ data: json });
  //       });
  //   }
  //   render() {
  //     console.log("Data : ", this.state.data);
  //     return (
  //       <div>
  //         <h2>{this.state.makanan}</h2>
  //       </div>
  //     );
  //   }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      });
  }
  ubahMakanan(value) {
    this.setState({
      makanan: value,
    });
  }
  render() {
    return (
      <div>
        <h2>{this.state.makanan}</h2>

        {this.state.tampilHalamanSub && (
          <Sublifecycle ubahMakanan={(value) => this.ubahMakanan(value)} />
        )}

        <button
          onClick={() =>
            this.setState({ tampilHalamanSub: !this.state.tampilHalamanSub })
          }
        >
          Tamplikan Halaman Sub
        </button>
      </div>
    );
  }
}

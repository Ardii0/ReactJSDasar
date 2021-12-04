import React from "react";
import Navbar from "./Navbar";
import TugasTable from "./TugasTable";
import Form from "./Form";

export default class Crud extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mt-4">
          <TugasTable />
          <Form />
          {/* <h2>Bakso</h2> */}
        </div>
      </div>
    );
  }
}

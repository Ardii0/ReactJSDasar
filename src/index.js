import React from "react";
import ReactDOM from "react-dom";
// import App from "./reactjsdasar/App";
// import Variabel from "./reactjsdasar/Variabel";
// import StateProps from "./reactjsdasar/StateProps";
// import StatePropsCar from "./reactjsdasar/Tugas_StatePropsCar";
// import Map from "./reactjsdasar/Map";
// import TugasMapTokoHandphone from "./reactjsdasar/TugasMapTokoHandphone";
// import Lifecycle from "./reactjsdasar/Lifecycle";
// import Sublifecycle from "./reactjsdasar/Sublifecycle";
// import Crud from "./crud";
// import Tugas from "./Tugas/index";
import TugasDua from "./TugasKeDua";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from 'react-bootstrap/Button';

// or less ideally
// import { Button } from 'react-bootstrap';

ReactDOM.render(
  <React.StrictMode>
    {/* <Lifecycle /> */}
    {/* <StatePropsCar /> */}
    {/* <TugasMapTokoHandphone /> */}
    {/* <Crud /> */}
    <TugasDua />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

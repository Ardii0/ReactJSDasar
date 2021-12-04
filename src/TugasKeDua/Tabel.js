import React from "react";
import { Table, Placeholder, Button, Card } from "react-bootstrap";

const Tabel = ({ handphones, editData, hapusData }) => {
  return (
    <div>
      <Card style={{ backgroundColor: " #373B3E" }}>
        <Card.Header>
          <Placeholder as="p" animation="glow">
            <Placeholder style={{ backgroundColor: "silver" }} xs={12} />
          </Placeholder>
          <h2 style={{ color: "white", textAlign: "center" }}>
            Tabel Data Handphone
          </h2>
          <Placeholder as="p" animation="glow">
            <Placeholder style={{ backgroundColor: "silver" }} xs={12} />
          </Placeholder>
        </Card.Header>
      </Card>
      <br />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Handphone</th>
            <th>Jumlah</th>
            <th>Harga</th>
            <th>Total Harga</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {handphones.map((handphone, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{handphone.nama}&emsp;&emsp;&emsp;&emsp;</td>
                <td>{handphone.qtt}</td>
                <td>Rp {handphone.harga}</td>
                <td>Rp {handphone.harga * handphone.qtt}</td>
                <td>
                  <Button
                    variant="outline-light"
                    type="submit"
                    style={{ width: "100px" }}
                    onClick={() => editData(handphone.id)}
                  >
                    Edit
                  </Button>
                  &emsp;
                  <Button
                    variant="outline-light"
                    type="submit"
                    style={{ width: "100px" }}
                    onClick={() => hapusData(handphone.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default Tabel;

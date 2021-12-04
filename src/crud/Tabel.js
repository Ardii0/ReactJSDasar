import React from "react";
import { Table, Button } from "react-bootstrap";

const Tabel = ({ bukus, editData, hapusData }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Buku</th>
          <th>Deskirpsi</th>
          <th>Harga Buku</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {bukus.map((buku, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{buku.nama}</td>
              <td>{buku.deskripsi}</td>
              <td>{buku.harga}</td>
              <td>
                <Button
                  variant="light"
                  type="submit"
                  onClick={() => editData(buku.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="light"
                  type="submit"
                  onClick={() => hapusData(buku.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default Tabel;

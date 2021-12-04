import React from "react";
import { Table, Placeholder, Button, Card } from "react-bootstrap";

const handphones = [
  {
    nama: "Vivo X70 Pro",
    quantity: "3",
    harga: 10999000,
  },
  {
    nama: "Oppo Reno6 Pro 5G",
    quantity: "2",
    harga: 10999100,
  },
  {
    nama: "Realme GT Neo2",
    quantity: "6",
    harga: 6499000,
  },
  {
    nama: "Samsung Galaxy Z Flip3 5G 8/256 GB",
    quantity: "8",
    harga: 15999000,
  },
  {
    nama: "Samsung Galaxy Z Flip3 5G 8/128 GB",
    quantity: "9",
    harga: 14999000,
  },
  {
    nama: "Xiaomi Mi 11 Ultra 12/256 GB",
    quantity: "4",
    harga: 18675000,
  },
  {
    nama: "Asus ROG Phone 5 12/256 GB",
    quantity: "3",
    harga: 16999000,
  },
  {
    nama: "Walkman Sony NW-ZX300",
    quantity: "7",
    harga: 6299000,
  },
  {
    nama: "Apple Iphone 13 256 GB",
    quantity: "3",
    harga: 17499000,
  },
  {
    nama: "Apple Iphone 13 128 GB",
    quantity: "5",
    harga: 14999000,
  },
];

const total_bayar = handphones.reduce(
  (total_harga, handphone) => total_harga + handphone.harga,
  0
);

const Tabel = () => {
  return (
    <div>
      <h2>Toko Kehancuran Abad Kekosongan</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Handphone</th>
            <th>QTT</th>
            <th>Harga</th>
            <th>Total Harga</th>
            <th>Beli</th>
          </tr>
        </thead>
        {handphones.map((handphone, index) => (
          <tbody>
            <tr>
              <td>
                <span>{index + 1}.</span>
              </td>
              <td>
                <span>{handphone.nama}</span>
              </td>
              <td>
                <span>{handphone.quantity}</span>
              </td>
              <td>
                <span>Rp {handphone.harga}</span>
              </td>
              <td>
                <span>Rp {handphone.harga * handphone.quantity}</span>
              </td>
              <td>
                <Button variant="outline-light">Beli</Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
      <Card>
        <Card.Header>
          <h2>Flagship Recommended dari kami di atas Rp 10.000.000</h2>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Placeholder as="p" animation="glow">
              <Placeholder xs={12} />
            </Placeholder>

            <ul>
              {handphones
                .filter((handphone) => handphone.harga > 10000000)
                .map((handphone, index) => (
                  <p>
                    {index + 1}. {handphone.nama} = Rp {handphone.harga}
                  </p>
                ))}
            </ul>
            <Placeholder as="p" animation="glow">
              <Placeholder xs={12} />
            </Placeholder>
            <h3>Total : {total_bayar}</h3>
            <Placeholder as="p" animation="glow">
              <Placeholder xs={12} />
            </Placeholder>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Tabel;

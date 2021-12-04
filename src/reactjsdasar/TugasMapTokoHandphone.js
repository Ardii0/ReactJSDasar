import React from "react";

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

const Map = () => {
  return (
    <div>
      <h2>Toko Kehancuran Abad Kekosongan</h2>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Handphone</th>
            <th>QTT</th>
            <th>Harga</th>
            <th>Total Harga</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {handphones.map((handphone, index) => (
                <p>{index + 1}.</p>
              ))}
            </td>
            <td>
              {handphones.map((handphone, index) => (
                <p>{handphone.nama}</p>
              ))}
            </td>
            <td>
              {handphones.map((handphone, index) => (
                <p>{handphone.quantity}</p>
              ))}
            </td>
            <td>
              {handphones.map((handphone, index) => (
                <p>Rp {handphone.harga}</p>
              ))}
            </td>
            <td>
              {handphones.map((handphone, index) => (
                <p>Rp {handphone.harga * handphone.quantity}</p>
              ))}
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Flagship Recommended dari kami di atas Rp 10.000.000</h2>
      <ul>
        {handphones
          .filter((handphone) => handphone.harga > 10000000)
          .map((handphone, index) => (
            <p>
              {index + 1}. {handphone.nama} = Rp {handphone.harga}
            </p>
          ))}
      </ul>

      <h3>Total Bayar : {total_bayar}</h3>

      <h2>Handphone MidRange Recommended di Bawah Rp 8.000.000</h2>
      <ul>
        {handphones
          .filter((handphone) => handphone.harga < 8000000)
          .map((handphone, index) => (
            <p>
              {index + 1}. {handphone.nama} = Rp {handphone.harga}
            </p>
          ))}
      </ul>

      <h3>Total Bayar : Rp {6499000 + 6299000}</h3>
    </div>
  );
};
export default Map;

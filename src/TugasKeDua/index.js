import React from "react";
import Navbar from "./Navbar";
import Tabel from "./Tabel";
import Form from "./Form";

export default class Crud extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      handphones: [
        {
          nama: "Vivo X70 Pro",
          qtt: "3",
          harga: 10999000,
        },
        {
          nama: "Oppo Reno6 Pro 5G",
          qtt: "2",
          harga: 10999100,
        },
        {
          nama: "Realme GT Neo2",
          qtt: "6",
          harga: 6499000,
        },
        {
          nama: "Samsung Galaxy Z Flip3 5G 8/256 GB",
          qtt: "8",
          harga: 15999000,
        },
        {
          nama: "Samsung Galaxy Z Flip3 5G 8/128 GB",
          qtt: "9",
          harga: 14999000,
        },
        {
          nama: "Xiaomi Mi 11 Ultra 12/256 GB",
          qtt: "4",
          harga: 18675000,
        },
        {
          nama: "Asus ROG Phone 5 12/256 GB",
          qtt: "3",
          harga: 16999000,
        },
        {
          nama: "Walkman Sony NW-ZX300",
          qtt: "7",
          harga: 6299000,
        },
        {
          nama: "Apple Iphone 13 256 GB",
          qtt: "3",
          harga: 17499000,
        },
        {
          nama: "Apple Iphone 13 128 GB",
          qtt: "5",
          harga: 14999000,
        },
      ],
      nama: "",
      qtt: "",
      harga: "",
      id: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        handphones: [
          ...this.state.handphones,
          {
            id: this.state.handphones.length + 1,
            nama: this.state.nama,
            qtt: this.state.qtt,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const handphoneYangSelainDiPilih = this.state.handphones
        .filter((handphone) => handphone.id !== this.state.id)
        .map((filterhandphone) => {
          return filterhandphone;
        });

      this.setState({
        handphones: [
          ...handphoneYangSelainDiPilih,
          {
            id: this.state.handphones.length + 1,
            nama: this.state.nama,
            qtt: this.state.qtt,
            harga: this.state.harga,
          },
        ],
      });
      this.setState({
        nama: "",
        qtt: "",
        harga: "0",
        id: "",
      });
    }
  };
  editData = (id) => {
    // console.log("10: ", id);
    const handphoneYangDiPilih = this.state.handphones
      .filter((handphone) => handphone.id === id)
      .map((filterHandphone) => {
        return filterHandphone;
      });
    this.setState({
      nama: handphoneYangDiPilih[0].nama,
      qtt: handphoneYangDiPilih[0].qtt,
      harga: handphoneYangDiPilih[0].harga,
      id: handphoneYangDiPilih[0].id,
    });
  };
  hapusData = (id) => {
    const handphoneBaru = this.state.handphones
      .filter((handphone) => handphone.id !== id)
      .map((filterHandphone) => {
        return filterHandphone;
      });
    this.setState({
      handphones: handphoneBaru,
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mt-4">
          <Form
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <Tabel
            handphones={this.state.handphones}
            editData={this.editData}
            hapusData={this.hapusData}
          />
        </div>
        <footer>
          <div style={{ backgroundColor: "#f1f1f1", height: "61px" }}>
            <div
              className="container mt-4"
              style={{
                fontSize: "12px",
                paddingTop: "25px",
                fontFamily: "effra, Helvetica, Arial, sans-serif",
              }}
            >
              <p style={{ float: "left" }}>
                Toko Kehancuran Abad Kekosongan © 290SM | Toko Electronic dengan
                sensasi belanja dijaman Nyepi.
              </p>
              <p style={{ float: "right" }}>
                <p>Syarat & Ketentuan</p>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

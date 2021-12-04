import React from "react";
import { Row, Col, Form, Button, FloatingLabel } from "react-bootstrap";

const Formulir = ({
  nama,
  deskripsi,
  harga,
  handleChange,
  handleSubmit,
  id,
}) => {
  return (
    <div className="container mt-5">
      <Row>
        <Col>
          <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nama">
              {/* <Form.Label>Nama Buku</Form.Label>
              <Form.Control type="text" name="nama" /> */}

              <FloatingLabel controlId="nama" label="Nama Buku">
                <Form.Control
                  type="text"
                  placeholder="nama"
                  name="nama"
                  value={nama}
                  onChange={(event) => handleChange(event)}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="deskripsi">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="deskripsi"
                value={deskripsi}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="harga">
              <Form.Label>Harga Buku</Form.Label>
              <Form.Control
                type="number"
                name="harga"
                value={harga}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

            <Button variant="dark" type="submit">
              Beli
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default Formulir;

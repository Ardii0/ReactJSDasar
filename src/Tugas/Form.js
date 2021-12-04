import React from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";

const Formulir = () => {
  return (
    <div className="container mt-5">
      <Card body>
        <Row>
          <Col>
            <h4>Tambah Data</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="nama">
                <Form.Label>Nama handphone</Form.Label>
                <Form.Control type="text" name="nama" />

                {/* <FloatingLabel controlId="nama" label="Nama Buku">
                  <Form.Control type="text" placeholder="name@example.com" />
                </FloatingLabel> */}
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="deskripsi">
                <Form.Label>Deskripsi</Form.Label>
                <Form.Control as="textarea" rows="3" name="deskripsi" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="harga">
                <Form.Label>Harga Handphone</Form.Label>
                <Form.Control type="number" name="harga" />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

              <Button style={{ width: "77rem" }} variant="dark" type="submit">
                Beli
              </Button>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
export default Formulir;

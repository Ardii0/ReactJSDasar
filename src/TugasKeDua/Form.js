import React from "react";
import {
  Card,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
  Placeholder,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const Formulir = ({ nama, harga, qtt, handleChange, handleSubmit, id }) => {
  return (
    <div className="container mt-5">
      <Card body>
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

                <FloatingLabel controlId="nama" label="Nama Handphone">
                  <Form.Control
                    type="text"
                    placeholder="nama"
                    name="nama"
                    value={nama}
                    required
                    onChange={(event) => handleChange(event)}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Label>Jumlah Handphone</Form.Label>
              <InputGroup className="mb-2" controlId="qtt">
                <FormControl
                  type="number"
                  name="qtt"
                  value={qtt}
                  required
                  onChange={(event) => handleChange(event)}
                />
              </InputGroup>

              <Form.Label>Harga Handphone</Form.Label>
              <InputGroup className="mb-3" controlId="harga">
                <InputGroup.Text>Rp</InputGroup.Text>
                <FormControl
                  type="number"
                  name="harga"
                  value={harga}
                  placeholder="..."
                  id="inlineFormInputGroup"
                  required
                  onChange={(event) => handleChange(event)}
                />
              </InputGroup>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

              <Button style={{ width: "66rem" }} variant="dark" type="submit">
                <span>{id ? "Edit" : "Tambahkan"}</span>
              </Button>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={12} />
              </Placeholder>
            </Form>
          </Col>
        </Row>
      </Card>
      <br></br>
    </div>
  );
};
export default Formulir;

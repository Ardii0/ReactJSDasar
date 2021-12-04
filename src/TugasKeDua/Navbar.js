import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          Toko Kehancuran Abad Kekosongan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Iphone</Nav.Link>
            <Nav.Link href="#link">Samsung</Nav.Link>
            <Nav.Link href="#link">Xiaomy</Nav.Link>
            <NavDropdown title="Daftar" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Iphone</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Samsung</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Xiaomy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">About Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarComponent;

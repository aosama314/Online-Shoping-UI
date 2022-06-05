import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import Logo from "../../../assets/logo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";

const Navbar = () => {
  const currActive = window.location.pathname;

  return (
    <Container className="mt-4 mb-4 navContainer">
      <Row>
        <Col md={3}>
          <img src={Logo} />
        </Col>
        <Col md={8} className="pt-3">
          <Nav className="justify-content-end" activeKey={currActive}>
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/aboutUs">About Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Products</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>SHOP</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Our Service</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contactUs">Contact Us</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col md={1} className="pt-4 d-flex justify-content-between">
          <SearchOutlinedIcon />
          <ShoppingBagRoundedIcon />
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;

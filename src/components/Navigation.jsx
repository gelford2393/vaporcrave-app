import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { TITLE, navMenu } from "../config/navMenu.js";
import brandLogo from "../assets/LOGO.png";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="brand">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <div className="brandTitle">
            <span  className="brand-logo">
              <Image src={brandLogo} alt="BrandLogo" height="75px" />
            </span>
            {TITLE}
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navMenu.map((item) => {
              return (
                <Nav.Link as={Link} to={item.path}>
                  <div className="brandMenu">{item.title.toUpperCase()}</div>
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

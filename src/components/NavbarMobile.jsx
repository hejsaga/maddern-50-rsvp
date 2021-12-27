import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "./css/Navbar.module.css";

const NavbarMobile = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <div className={styles.kurbitMobile}>
              <img src="/curbitskull.png" alt="kurbit" />
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link href="/">Hem</Nav.Link>
              <Nav.Link href="/fest">Fest</Nav.Link>
              <Nav.Link href="/boende">Boende</Nav.Link>
              <Nav.Link href="/om-gammelgarden">Gammelgården</Nav.Link>
              <Nav.Link href="/gora-i-ludvika">Aktiviteter</Nav.Link>
              <Nav.Link href="/carpool">Samåkning</Nav.Link>
              <Nav.Link href="/osa">O.S.A</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarMobile;

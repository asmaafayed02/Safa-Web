import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import { Container,Nav } from 'react-bootstrap';
import LinksData from '../Shared/Links';
const NavbarLinks = () => {
  return (
    <>
      <Container className="mt-3 rounded-3">
        <Navbar expand="lg" variant="dark" bg="white" className="rounded-3 ">
          <Container>
            <Nav >
              <LinksData/>
     
            </Nav>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}

export default NavbarLinks
import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import { Container,Nav } from 'react-bootstrap';
import { links } from './data';
const NavbarLinks = () => {
  return (
    <>
      <Container className="mt-3 rounded-3 ">
        <Navbar expand="lg" variant="" bg="white" className="rounded-3">
          <Container>
            <Nav>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <Nav.Link href={url} key={id}>
                    {text}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}

export default NavbarLinks
import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import {Nav,Container,Form,FormControl} from "react-bootstrap/"
import logo from "../../assets/logo.svg"
import { VscCalendar } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import NavbarLinks from './NavbarLinks';

const SafaNavbar = () => {
  return (
    <Navbar bg="transparent" variant="light" expand="lg" className="d-block">
      <Container className="">
        <Navbar.Brand href="/">
          <img src={logo} alt="safa logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 flex-grow-1 justify-content-end gap-2"
            style={{ maxHeight: "" }}
            navbarScroll
          >
            <Nav.Link href="#action1">en</Nav.Link>

            <BiSearch style={{ marginTop: "1rem" }} />

            <Form className="d-flex ">
              <FormControl
                type="search"
                placeholder="بحث …"
                className="me-1 bg-transparent border-0 border-bottom"
                aria-label="Search"
              />
            </Form>

            <Nav.Link href="#action1">
              <VscCalendar /> الأجندة
            </Nav.Link>
            <Nav.Link href="#action1">
              <CgProfile style={{ fontSize: "2em" }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div>
        <Navbar.Collapse className="navbarScroll">
          <NavbarLinks />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default SafaNavbar
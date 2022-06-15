import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import bgImage from '../../assets/headerBg.png'
import SafaNavbar from '../Navbar/SafaNavbar'
import PageHero from './PageHero'
import { VscCalendar } from "react-icons/vsc";
import groupImage from '../../assets/Group 2.png'
const Header = () => {
  return (
    <header
      style={{
        minHeight: "100vh",
        backgroundImage: "url(" + bgImage + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="white"
    >
      <SafaNavbar />
      <Container className="py-5 my-3 ">
        <Row>
          <Col xs={12} md={6}>
            <PageHero title="الندوات" />
            <div>
              <p>
                <VscCalendar
                  style={{
                    color: "#51BFAD",
                    fontSize: "1.5em",
                    marginLeft: "1rem",
                  }}
                />
                <span className="white">يوم الخميس ١٦ يوليو ٢٠٢٠ م من ٤ - ٦ مساءاً</span>
              </p>
            </div>
            <h1 className='h1 fw-bold fs-2'>
              ندعوكم في الجمعية المالية  <br/>السعودية صفا لحضور المساحة الخاصة
              بمناقشة الميزانية العامة والاقتصاد المحلي، ننتظركم غدًا
            </h1>
            <button
              className="btn my-3 w-25"
              style={{ backgroundColor: "#51BFAD" }}
            >
              <a href="/service" className="white text-decoration-none">
                حجز الان
              </a>
            </button>
          </Col>
          <Col xs={12} md={6}>
            <img src={groupImage} alt="safa group" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header
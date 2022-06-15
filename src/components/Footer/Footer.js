import React from 'react'
import { Col, Container, Row ,FormControl,InputGroup, Button} from 'react-bootstrap'
import logo from "../../assets/Group 170.png";
import LinksData from '../Shared/Links';
import SociolIcons from '../Shared/SociolIcons';

const Footer = () => {
  return (
    <footer className="my-5">
      <Container>
        <Row>
          <Col md={3}>
            <h4>
              <img src={logo} alt="safa logo" />
            </h4>
            <div className="py-4">
              <a href="mailto:Safa@gmail.com">Safa@gmail.com</a>
              <br />
              <span dir="ltr">+757 699-4478</span>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <p className="h4">الروابط</p>
            </div>
            <div className="row row-cols-2 ">
              <LinksData />
            </div>
          </Col>
          <Col md={4}>
            <div>
              <p className="h4">تابعنا </p>
            </div>
            <div className="py-4 my-2">
              <SociolIcons color="dark opacity p-1" />
            </div>
            <div className="py-4 my-3">
              <p className="h4">لمتابعة الاخبار </p>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button
                  variant="outline-secondary blueBg white"
                  id="button-addon2"
                >
                  اشترك
                </Button>
              </InputGroup>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="text-center mt-4 p-3">الحقوق محفوظة لصفا</div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer
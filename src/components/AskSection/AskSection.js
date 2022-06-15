import React from 'react'
import askBg from '../../assets/ask.png'
import { RiQuestionMark } from "react-icons/ri";
import { Row, Col,Container,Button} from 'react-bootstrap';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
const AskSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${askBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        // backgroundSize: "cover",
        minHeight: "100vh",
      }}
      className="align-items-center d-flex"
    >
      <Container className="col-8 col-lg-5 bg-white shadow rounded d-flex flex-column p-5">
        <Row>
          <Col lg={2}>
            <RiQuestionMark className="fs-1 fw-bold greenColor" />
          </Col>
          <Col>
            <h3>ارسل سؤالك للمحاضر</h3>
            <span className="opacity">يجب عليك التسجيل و حضور الندوة</span>
          </Col>
        </Row>
        <div>
          <FloatingLabel controlId="floatingTextarea2" label="السؤال">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <span className="text-danger">
            لابد من حجز الندوة اولا حتي تتمكن من ترك سؤالك
          </span><br/>
          <Button type="submit" disabled className="btn btn-primary my-3 w-50">
            ارسل
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default AskSection
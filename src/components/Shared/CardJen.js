import React from 'react'
import { Row , Col} from 'react-bootstrap';
import Card from "react-bootstrap/Card";

const CardJen = (props) => {
  const {imgSrc, title , text ,bgColor, style } = props
  return (
    <Card style={style} className={`border-0  ${bgColor}`}>
      <Row>
        <Col xs={2} className="align-item-center justify-content-center pt-2 g-0">
          <Card.Img variant="top" src={imgSrc} className="rounded-circle " />
        </Col>
        <Col xs={9}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text className="fs-6 fw-light" style={{ color: "#5260AB" }}>
              {text}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default CardJen
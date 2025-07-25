import { Col, Container, Row, InputGroup, Form } from "react-bootstrap";

const MySetting = () => {
  return (
    <>
      <Container className="text-center">
        <Row>
          <Col xs={6}>
            <h2>Edit Profile</h2>
            <Row>
              <Col xs={4}>
                <img
                  src="../public/avatar.png"
                  alt=""
                  style={{ width: "150px" }}
                />
              </Col>
              <Col xs={8}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    Default
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </InputGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MySetting;

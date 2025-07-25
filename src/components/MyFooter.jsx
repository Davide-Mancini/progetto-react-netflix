import { Card, Button, ListGroup, Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <>
      <Card className="text-center border-0 p-0 ">
        <Card.Header>Domande? Chiama il numero 800 931 413</Card.Header>
        <Card.Body>
          <Card.Title>AGGIUNGI ICONE</Card.Title>
          <Container>
            <Row>
              <Col className="border-0">
                <ListGroup>
                  <ListGroup.Item className="border-0">
                    Audio and Subtitles
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0">
                    Media Center
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0">Privacy</ListGroup.Item>
                  <ListGroup.Item className="border-0">
                    Contact Us
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col>
                <ListGroup>
                  <ListGroup.Item className="border-0">
                    Audio Description
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0">
                    Investor Relation
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0">
                    Legal Notices{" "}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col>
                <ListGroup>
                  <ListGroup.Item className="border-0">
                    Help Center
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0">Jobs</ListGroup.Item>
                  <ListGroup.Item className="border-0">
                    Cookie Preferences
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col>
                <ListGroup>
                  <ListGroup.Item className="border-0">
                    Gift Cards
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0">
                    Terms of Use
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0">
                    {" "}
                    Corporate Information
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Container>
          <Button variant="secondary">Service Code</Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          © 1997-2019 Netflix, Inc. i-020050d0fx1d20de
        </Card.Footer>
      </Card>
    </>
  );
};
export default MyFooter;

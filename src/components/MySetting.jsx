import {
  Col,
  Container,
  Row,
  InputGroup,
  Form,
  Dropdown,
  Button,
} from "react-bootstrap";

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
                <p>Language:</p>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    English
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <hr />
                <p>Maturity Ratings</p>
                <Button>ALL MATURITY RATINGS</Button>
                <small>
                  Show title of all maturities ratings for this profile
                </small>
                <Button>EDIT</Button>
                <hr />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MySetting;

import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyHero = (props) => {
  console.log(props);
  const navigate = useNavigate();
  return (
    <>
      <Container className="hero bg-danger-subtle rounded-5 p-5 mb-5">
        <Row className="row flex-lg-row-reverse align-items-center g-5 py-5  ">
          <Col className="col-10 col-sm-8 col-lg-6">
            <img
              src={props.foto[0]}
              className="d-block  img-fluid"
              alt="Bootstrap Themes"
              loading="lazy"
            />
          </Col>
          <Col className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">{props.titolo[0]}</h1>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Button
                type="button"
                className="btn btn-danger btn-lg px-4 me-md-2"
                onClick={() => {
                  navigate("/movie-details/" + props.imdbID[0]);
                }}
              >
                Guarda ora!
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MyHero;

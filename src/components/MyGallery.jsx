import { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import "../styles/myGallery.css";
import MyCarousel from "./MyCarousel";
import MyHero from "./MyHero";

class MyGallery extends Component {
  state = {
    film: [],
    caricamento: true,
    errore: false,
  };

  getFilm = () => {
    fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=901d7262&s=" +
        this.props.nomefilm
    )
      .then((res) => {
        if (res.ok === true) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then((arrayFilm) => {
        console.log(arrayFilm.Search);
        this.setState({
          film: arrayFilm.Search,
          caricamento: false,
        });
      })
      .catch((err) => {
        console.log("ERRORE", err);
        this.setState({
          caricamento: false,
          errore: true,
        });
      });
  };
  componentDidMount() {
    this.getFilm();
  }

  render() {
    console.log("RENDER FATTO");
    return (
      <>
        <MyHero
          titolo={this.state.film.map((film) => {
            return film.Title;
          })}
          foto={this.state.film.map((film) => {
            return film.Poster;
          })}
        />
        <Container>
          <Row>
            {" "}
            {this.state.caricamento && (
              <div className="text-center">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            )}
            {this.state.errore && (
              <Alert variant="danger">
                <Alert.Heading>
                  Errore nel caricamento di Film e Serie!
                </Alert.Heading>
                <p>
                  Ci dispiace per l'inconveniente, risolveremo al più presto
                </p>
              </Alert>
            )}
            <Col>
              <h1>{this.props.nomefilm}</h1>
            </Col>
          </Row>
          <Row>
            {this.state.film.map((film) => {
              return (
                <Col xs={12} md={4} lg={3} key={film.imdbID}>
                  {" "}
                  <Card className="filmPoster p-0 mb-3 border-0">
                    <Card.Img
                      variant="top"
                      src={film.Poster}
                      onClick={() => {
                        <Card.Body>
                          <Card.Title>{film.Title}</Card.Title>
                          <Card.Text className="grow-1">{film.Year}</Card.Text>
                          <Button variant="danger" className="w-100">
                            PLAY
                          </Button>
                        </Card.Body>;
                      }}
                    />
                    <Card.Body>
                      <Card.Title>{film.Title}</Card.Title>
                      <Card.Text className="grow-1">{film.Year}</Card.Text>
                      <Button variant="danger" className="w-100">
                        PLAY
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}
export default MyGallery;

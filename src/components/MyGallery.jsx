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
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const MyGallery = (props) => {
  const navigate = useNavigate();
  // state = {
  //   film: [],
  //   caricamento: true,
  //   errore: false,
  // };
  const [film, setFilm] = useState([]);
  const [caricamento, setCaricamento] = useState(true);
  const [errore, setErrore] = useState(false);
  const getFilm = () => {
    fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=901d7262&s=" + props.nomefilm
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
        setFilm(arrayFilm.Search);
        setCaricamento(false);
      })
      .catch((err) => {
        console.log("ERRORE", err);
        setCaricamento(false);
        setErrore(true);
      });
  };
  useEffect(() => {
    getFilm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("RENDER FATTO");
  return (
    <>
      {/* <MyCarousel
          fotocar={this.state.film.map((film) => {
            return film.Poster;
          })}
        /> */}
      <MyHero
        titolo={film.map((film) => {
          return film.Title;
        })}
        foto={film.map((film) => {
          return film.Poster;
        })}
      />
      <Container>
        <Row>
          {" "}
          {/* aggiungo spinner  */}
          {caricamento && (
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          {/* aggiungo errore di caricamento */}
          {errore && (
            <Alert variant="danger">
              <Alert.Heading>
                Errore nel caricamento di Film e Serie!
              </Alert.Heading>
              <p>Ci dispiace per l'inconveniente, risolveremo al più presto</p>
            </Alert>
          )}
          <Col>
            <h1>{props.nomefilm}</h1>
          </Col>
        </Row>
        <Row>
          {film.map((film) => {
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
                    <Button
                      variant="danger"
                      className="w-100"
                      onClick={() => {
                        navigate("/movie-details/" + film.imdbID);
                      }}
                    >
                      GUARDA ORA!
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
};

export default MyGallery;

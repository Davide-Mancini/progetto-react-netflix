import { useEffect, useState } from "react";
import { Card, Button, Spinner, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errore, setErrore] = useState(false);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=901d7262&i=${movieId}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then((filmDettaglio) => {
        setFilm(filmDettaglio);
        setLoading(false);
      })
      .catch((err) => {
        console.log("ERRORE", err);
        setErrore(true);
        setLoading(false);
      });
  }, [movieId]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  if (errore || !film) {
    return (
      <Alert variant="danger" className="text-center mt-5">
        Errore nel caricamento dei dettagli del film.
      </Alert>
    );
  }

  return (
    <Card style={{ width: "18rem", margin: "auto", marginTop: "3rem" }}>
      <Card.Img variant="top" src={film.Poster} />
      <Card.Body>
        <Card.Title>{film.Title}</Card.Title>
        <Card.Text>{film.Plot}</Card.Text>
        <Card.Text>
          <strong>Anno:</strong> {film.Year}
        </Card.Text>
        <Card.Text>
          <strong>Genere:</strong> {film.Genre}
        </Card.Text>
        <Button variant="primary">Guarda Ora</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieDetails;

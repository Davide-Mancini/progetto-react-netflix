import Carousel from "react-bootstrap/Carousel";

const MyCarousel = (props) => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <h1 className="text-center">TITOLI DA NON PERDERE!</h1>
          <div className="d-flex justify-content-center">
            <img src={props.fotocar[7]} alt="" className="me-1" />
            <img src={props.fotocar[1]} alt="" className="me-1" />
            <img src={props.fotocar[2]} alt="" className="me-1" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <h1 className="text-center">DISPONIBILI ANCORA PER POCO</h1>
          <div className="d-flex justify-content-center">
            <img src={props.fotocar[3]} alt="" className="me-1" />
            <img src={props.fotocar[4]} alt="" className="me-1" />
            <img src={props.fotocar[5]} alt="" className="me-1" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <h1 className="text-center">NUOVE USCITE!</h1>
          <div className="d-flex justify-content-center">
            <img src={props.fotocar[6]} alt="" className="me-1" />
            <img src={props.fotocar[9]} alt="" className="me-1" />
            <img src={props.fotocar[5]} alt="" className="me-1" />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default MyCarousel;

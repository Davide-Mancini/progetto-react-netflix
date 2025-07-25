import { Dropdown, ButtonGroup, Container } from "react-bootstrap";
const SottoNav = () => {
  return (
    <>
      <Container className="mb-5 d-flex ">
        <h2 className="text-light p-3">TV Shows</h2>
        <Dropdown className="p-3" as={ButtonGroup}>
          <Dropdown.Toggle id="dropdown-custom-1" className="">
            Genres
          </Dropdown.Toggle>
          <Dropdown.Menu className="super-colors">
            <Dropdown.Item eventKey="1">Anime</Dropdown.Item>
            <Dropdown.Item eventKey="2">Action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Drama</Dropdown.Item>

            <Dropdown.Item eventKey="4">Horror</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </>
  );
};
export default SottoNav;

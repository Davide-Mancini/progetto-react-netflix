import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-dark w-100 mb-3 " data-bs-theme="dark">
        <Container className="p-0">
          <Navbar.Brand href="#home">
            <img
              src="../public/netflix_logo.png"
              alt=""
              style={{ width: "150px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" active>
                Home
              </Nav.Link>
              <Nav.Link href="#link">TV Shows</Nav.Link>
              <Nav.Link href="#link">Rcently Added</Nav.Link>
              <NavDropdown title="My List" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Star Wars
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  SpiderMan
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Batman</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Harry Potter
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MyNavbar;

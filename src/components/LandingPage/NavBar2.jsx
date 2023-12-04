import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function NavBar2() {
  return (
    <Navbar bg="light" text="white" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse  id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/juego-ppt">Como funciona</Nav.Link>
            <Nav.Link href="#action2">Opcion 2</Nav.Link>
            <Nav.Link href="#action2">Opcion 3</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Juegos</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Link a PPT
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Link a This ot That
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Login
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

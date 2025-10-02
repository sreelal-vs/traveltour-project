import { Button, Col, Container, Nav, Navbar, Offcanvas, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/Header.css"


const Header = () => {
  return (
    <Container className="py-0  px-4 px-md-0">
      <Navbar expand="lg" className=" mt-3">
        <Container fluid className="p-0">
          <Navbar.Brand as={Link}>Travel <span className="tour-text-color">Tour</span></Navbar.Brand>
          <Row>
            <Col className=" d-block d-lg-none p-0"
            ><Button className="log-btn">Login</Button></Col>
            <Col>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                    Travel Tour
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-center flex-grow-1 pe-3 ">
                    
                    <Nav.Link >Home</Nav.Link>
                    <Nav.Link >Pages</Nav.Link>
                    <Nav.Link >Tour List</Nav.Link>
                    <Nav.Link >Tour Search</Nav.Link>
                    <Nav.Link >Blog</Nav.Link>

                  </Nav>



                </Offcanvas.Body>

              </Navbar.Offcanvas>
            </Col>

          </Row>

          <Button className="log-btn d-none d-lg-block">Login</Button>
        </Container>

      </Navbar>
    </Container>
  )
}

export default Header;
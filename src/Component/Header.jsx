import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/Header.css"


const Header = ()=>{
    return(
        <Container className="p-0">
            <Navbar expand="lg" className=" mt-3">
          <Container fluid className="p-0">
            <Navbar.Brand as={Link}>Travel <span className="tour-text-color">Tour</span></Navbar.Brand>
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
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Pages</Nav.Link>
                  <Nav.Link href="#action1">Tour List</Nav.Link>
                  <Nav.Link href="#action2">Tour Search</Nav.Link>
                  <Nav.Link href="#action2">Blog</Nav.Link>
                  
                </Nav>
                
                  <Button classnam>="log-btn"Login</Button>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </Container>
    )
}

export default Header;
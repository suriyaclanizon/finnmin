import {Container, Nav, Navbar} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./images/logo.jpg.png"


function Header() {
  return (
    <div className="header">
<Navbar bg="light" expand="lg">
  <Container>
  <Navbar.Brand href="#home">
      <img src={logo}


        width="150"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
    <Nav.Link href="#home">Home</Nav.Link>

    <Nav.Link href="#features">Explore</Nav.Link>
    <Nav.Link href="#pricing">About Us</Nav.Link>
    <Nav.Link href="#pricing">Contact Us</Nav.Link>

    
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
}

export default Header;
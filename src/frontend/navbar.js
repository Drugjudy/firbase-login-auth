import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"

import Container from "react-bootstrap/Container"


export default function Nab() {
    return(
<Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Connect&Study</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
   
    </Nav>
    <Nav>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/google">google</Nav.Link>
       <Nav.Link href="/data">data</Nav.Link>
        <Nav.Link href="/dataentry">post</Nav.Link>
         <Nav.Link href="/search">search</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Contacts
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
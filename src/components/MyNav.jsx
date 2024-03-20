import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const MyNav = () => (
  <Navbar expand="lg" className="bg-dark text-light" >
    <Container fluid>
      <Navbar.Brand href="#home">
        <img src={Logo} alt="logo" className="logNavBar"  style={{width:"100px",height:"55px"}} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto fw-semibold text-secondary">
          <Link className="nav-link  text-light" to="/">
                Home
              </Link>
            
           
              <Link className="nav-link  text-light " to="/TvShow">
                Tv Shows
              </Link> 
          

          <Nav.Link className="text-light"     href="#link">Recently Added</Nav.Link>
          <Nav.Link className="text-light"     href="#link">My List</Nav.Link>
        </Nav>
        <Nav className="d-flex align-items-center ">
          <Nav.Link href="#link">
            <i className="bi bi-search icons text-light"></i>
          </Nav.Link>
          <Nav.Link href="#link">
            <div id="kids" className="fw-bold text-light">
              KIDS
            </div>
          </Nav.Link>
          <Nav.Link href="#">
            <i className="bi bi-bell icons text-light"></i>
          </Nav.Link>
          <Nav.Link href="#">
            <i className="bi bi-person-circle icons text-light"></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
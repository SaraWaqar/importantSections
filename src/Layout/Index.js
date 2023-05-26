import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {  Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/">LOGO</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <NavDropdown title="More Actions" id="basic-nav-dropdown">
                <Link to="/javascripts">Javascripts</Link>
                <Link to="#action/3.2">
                  Another action
                </Link>
                <Link to="#action/3.3">
                  Something
                </Link>
                <NavDropdown.Divider />
                <Link to="#action/3.4">
                  Separated link
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Layout;

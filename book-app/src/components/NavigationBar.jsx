import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';

const NavigationBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">📚 Book Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user ? (
              <>
                <Nav.Link as={Link} to="/books">Books</Nav.Link>
                <Button variant="outline-light" onClick={logoutUser} className="ms-2">Logout</Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Sign Up</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;

import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => { 
    const{user, logOut}=useAuth();
    return (
        <>
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
          <Container>
          <Navbar.Brand href="#home">Genius Car Mechanics</Navbar.Brand>
          <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
            <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
            <Nav.Link as={HashLink} to="/addservice">Add Service</Nav.Link>
            <Nav.Link as={HashLink} to="/manageServices">Manage Services</Nav.Link>
            {
                user?.email ? <Button onClick={logOut} variant="light">Log Out</Button> :<Nav.Link  as={Link} to="/login">Login</Nav.Link>
            }
      <Navbar.Text>
        {
            user?.email && <div>Signed in as: <a href="#login">{user.displayName}</a></div>
        }
      </Navbar.Text>
    </Navbar.Collapse>
          
          </Container>
        </Navbar>
      </>
    );
};

export default Header;
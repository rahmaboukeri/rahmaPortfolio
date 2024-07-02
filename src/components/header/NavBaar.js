import React from 'react'
import './Navbar.css'

// import logo from "../../assets/me-cercle.png";
import logo from "../../assets/logo-couver-5.png";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbaar = () => {
  return (
      <div className='div-navbar' >
      
            <Navbar  className='barNav' collapseOnSelect expand="lg" data-bs-theme="dark" fixed='top' >
              <Container>
                <Navbar.Brand href="#home">
                <Image src={logo} className='lgo' fluid />
                
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    {/* <Nav.Link href="#features">HOME</Nav.Link>
                    <Nav.Link href="#pricing">ABOUT</Nav.Link>
                    <Nav.Link href="#pricing">MES TRAVAILS</Nav.Link>
                    <Nav.Link href="#pricing">CONTACT</Nav.Link> */}
                  </Nav>
                  <Nav className='navb'>
                    <Nav.Link href="/Navbaar" className='navtitle'>HOME</Nav.Link>
                    <Nav.Link href="/About" className='navtitle'>ABOUT</Nav.Link>
                    <Nav.Link href="/works" className='navtitle'>WORKS</Nav.Link>
                    <Nav.Link href="/contact" className='navtitle'>CONTACT</Nav.Link>
                    {/* <Nav.Link eventKey={2} href="#memes">
                      Dank memes
                    </Nav.Link> */}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
  
      </div>
  )
}

export default Navbaar
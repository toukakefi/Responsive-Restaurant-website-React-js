
import React from "react";
import {Navbar ,Nav , container ,NavDropdown ,Form } from "react-bootstrap"
import './Navs.css'
import logo from '../../Assets/logo.png'
function Navs() {
  return (
    <Navbar  expand="lg">
  <Navbar.Brand href="#home"><img src={logo}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About us</Nav.Link>
      <Nav.Link href="#link">Explore Foods</Nav.Link>
      <Nav.Link href="#link">Reviews</Nav.Link>
      <Nav.Link href="#link">FAQ</Nav.Link>
      <Nav.Link href="#"  id="lastnav">
     2532164979
      </Nav.Link>
    
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
  
  );
}

export default Navs;

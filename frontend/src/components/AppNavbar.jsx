import React from 'react'
import { Navbar,Container, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink, Link } from "react-router-dom";

const AppNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand>
    <NavLink style={{textDecoration:"none",color:"rgb(49, 49, 49)"}} to="/">
        <img
          alt=""
          src="https://cdn.icon-icons.com/icons2/2474/PNG/512/education_books_library_icon_149685.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Biblioteka
      </NavLink>
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link><NavLink style={{textDecoration:"none",color:"rgb(49, 49, 49)"}} to="/books">Książki</NavLink></Nav.Link>
      <Nav.Link><NavLink style={{textDecoration:"none",color:"rgb(49, 49, 49)"}} to="/borrows">Wypożyczenia</NavLink></Nav.Link>
      <Nav.Link><NavLink style={{textDecoration:"none",color:"rgb(49, 49, 49)"}} to="/adminpanel">Panel admina</NavLink></Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link><NavLink style={{textDecoration:"none",color:"rgb(49, 49, 49)"}} to="/login">Login</NavLink></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default AppNavbar
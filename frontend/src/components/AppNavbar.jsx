import React, { useContext } from 'react'
import { Navbar,Container, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import AuthContext from '../contexts/AuthContext';

const AppNavbar = () => {

  const {user,logoutUser} = useContext(AuthContext)

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
      <NavDropdown title="Informacje" id="collasible-nav-dropdown">
        <NavDropdown.Item><NavLink style={{textDecoration:"none",color:"rgb(49, 49, 49)"}} to="/statue">Regulamin</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink style={{textDecoration:"none",color:"rgb(49, 49, 49)"}} to="/contact">Kontakt</NavLink></NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      {user ? 
            <Nav.Link onClick={logoutUser} >Wyloguj się</Nav.Link>
      :
      <Nav.Link><NavLink style={{textDecoration:"none",color:"rgb(49, 49, 49)"}} to="/login">Zaloguj się</NavLink></Nav.Link>
    }
      </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default AppNavbar
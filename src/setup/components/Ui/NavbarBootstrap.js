import React from "react";
import logo from '../../img/rsz_firma-74.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, NavDropdown, FormControl, Button, Form, Navbar} from "react-bootstrap";
// import {FaSearch, FaSignInAlt} from "react-icons/all";

const NavbarBootstrap =()=>{


return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="Home">
            <img src={logo} alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar">
            <Nav className="mr-auto">
                <Nav.Link href="/InscriereFirma">Inscriere Firma</Nav.Link>
                <Nav.Link href="Localizare">Localizare</Nav.Link>
                <NavDropdown title="Informatii Utile" id="basic-nav-dropdown">
                    <NavDropdown.Item href="InformatiiUtile">InformatiiUtile</NavDropdown.Item>
                    <NavDropdown.Item href="ParerileClientilor">Parerile Clientilor</NavDropdown.Item>
                    <NavDropdown.Item href="DespreNoi">Despre Noi</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/Test">Test</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/CautaFirma">Cauta Firma</Nav.Link>
                <Nav.Link href="Contact">Contact</Nav.Link>
            </Nav>
            <Form inline>
                {/*<FaSearch className="blue-color" size="22"/>*/}
                <FormControl type="text" placeholder="Search" className="search" />
                <Button className="blue-color butn">Log In</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
)
}
export default NavbarBootstrap;
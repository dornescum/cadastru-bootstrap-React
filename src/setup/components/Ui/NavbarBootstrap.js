import React from "react";
import logo from '../../img/rsz_firma-74.png'
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Nav, NavDropdown, Button, Form, Navbar} from "react-bootstrap";
import {Nav, NavDropdown, Button, Form, Navbar} from "react-bootstrap";
import {FaSearch} from "react-icons/all";

const NavbarBootstrap =()=>{


return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="Home">
            <img src={logo} alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar">
            <Nav className="mr-auto">
                <Nav.Link href="/inscriereFirma">Inscriere Firma</Nav.Link>
                <Nav.Link href="Localizare">Localizare</Nav.Link>
                <NavDropdown title="Informatii Utile" id="basic-nav-dropdown">
                    <NavDropdown.Item href="InformatiiUtile">InformatiiUtile</NavDropdown.Item>
                    <NavDropdown.Item href="ParerileClientilor">Parerile Clientilor</NavDropdown.Item>
                    <NavDropdown.Item href="DespreNoi">Despre Noi</NavDropdown.Item>
                    <NavDropdown.Item href="CumFunctioneaza">Cum Functioneaza</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/Test">Test</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/CautaFirma">Cauta Firma</Nav.Link>
                <Nav.Link href="Contact">Contact</Nav.Link>
            </Nav>
            <Form inline>
                <FaSearch className="blue-color" size="22"/>
                {/*<FormControl type="text" placeholder="Search" className="search" />*/}
                <Button className="butn" id="logBtn">Log In</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
)
}
export default NavbarBootstrap;
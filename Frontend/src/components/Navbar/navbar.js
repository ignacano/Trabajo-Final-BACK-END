import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css"

function navbar() {
return (
    <div className='menuNavbar'>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
        <Navbar.Brand href="/landing">TrabajosYA®</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="/home">Inicio</Nav.Link>
            <Nav.Link href="/aboutUs">Sobre nosotros</Nav.Link>
            <NavDropdown title="Próximamente" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#" className=''>Features</NavDropdown.Item>
            <NavDropdown.Item href="#">Mejores calificados</NavDropdown.Item>
            <NavDropdown.Item href="#">Aportes de la comunidad</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">TrabajosYA PRO®</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <Nav>
            <Nav.Link eventKey={2} href="/legal">
            Legales
            </Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </div>
);
}

export default navbar;
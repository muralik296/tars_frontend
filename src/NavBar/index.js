import { Navbar, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/tars-logo.png';

export default function DocDiveNavbar() {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>

                <Navbar.Brand>
                    <NavLink to='/' style={{ textDecoration: 'none', color: 'green', fontWeight: '700' }}>
                        <img title={'TARS'} src={Logo} height={80}/>
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    {/* Upload Button */}
                    <NavLink to='/upload' style={{ textDecoration: 'none' }}>
                        <Button variant="outline-light">
                            Upload
                        </Button>
                    </NavLink>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
};
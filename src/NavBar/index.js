import { Navbar, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/piedpiper.png';

export default function DocDiveNavbar() {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>

                <Navbar.Brand>
                    <NavLink to='/' style={{ textDecoration: 'none', color: 'green', fontWeight: '700' }}>
                        <img src={Logo} height={50}/>
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
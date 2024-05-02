import { Navbar, Container, Button, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/tars-logo.png';
import Row from 'react-bootstrap/Row';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';


export default function DocDiveNavbar() {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <NavLink to='/' style={{ textDecoration: 'none', color: 'green', fontWeight: '700' }}>
                            <img title={'TARS'} src={Logo} height={80} />
                        </NavLink>
                    </Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <NavLink to='/about' style={{ textDecoration: 'none', marginRight: '10px' }}>
                            <Button variant="light">
                                About
                            </Button>
                        </NavLink>

                        {/* Upload Button */}
                        <NavLink to='/upload' style={{ textDecoration: 'none' }}>
                            <Button variant="outline-light">
                                Upload
                            </Button>
                        </NavLink>
                    </Navbar.Collapse>
                </Container >
            </Navbar >
            {
                !(location.search == '' && location.pathname == '/') ? (<Container fluid className="bg-light py-2">
                    <Row>
                        <Col xs={12}>
                            <Button variant="secondary" onClick={() => navigate(-1)}>
                                <FontAwesomeIcon title={'Go Back'} icon={faBackward} />
                            </Button>
                        </Col>
                    </Row>
                </Container>) : null
            }

        </>
    );
};
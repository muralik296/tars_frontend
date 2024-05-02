import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import TARS_LOGO from '../assets/tars_about.png';
import ELASTIC_LOGO from '../assets/elastic_cloud.png'
import GOOGLE_VISON_LOGO from '../assets/google_vision.png'
import DJANGO_LOGO from '../assets/django_python_logo.png'
import REACT_LOGO from '../assets/react_logo.png'

export default function About() {
    return (
        <Container style={{ marginTop: '40px' }}>
            <Row>
                <Col lg={4}>
                    <Image src={TARS_LOGO} alt="TARS Logo" fluid />
                </Col>

                <Col lg={8}>
                    <h2>About Us</h2>
                    <h5>
                        TARS
                    </h5>
                    <p>
                        The name <a href="https://interstellarfilm.fandom.com/wiki/TARS">
                            TARS</a> comes from a character from the movie Interstellar, a smart tactical robot
                    </p>
                    <p>
                        TARS is a text search engine allowing to index/search across images, text documents, pdfs, word documents, and HTML files.
                        It can also provide support for URL uploads where user is able to uplaod url links.
                    </p>
                    <p>
                        The text information from the different types of documents is gathered and indexed and stored.

                        When user searches for a query, it searches using the positional index and retrieves the results to the user.
                    </p>
                    <p>
                        Technologies used: Python (Django), React.js, Elastic Search Cloud, Google Vision API
                    </p>
                    <hr />
                    <Row>
                        <Col xs={3}><Image src={DJANGO_LOGO} alt="Django" fluid /></Col>
                        <Col xs={3}><Image src={REACT_LOGO} alt="React.js" fluid /></Col>
                        <Col xs={3}><Image src={ELASTIC_LOGO} alt="Elastic Search" fluid /></Col>
                        <Col xs={3}><Image src={GOOGLE_VISON_LOGO} alt="Google Vision API" fluid /></Col>
                    </Row>



                </Col>
            </Row>
        </Container >
    );
};
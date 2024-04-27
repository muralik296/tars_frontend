import tars from '../../assets/tars.gif'
import { Container, Row, Col, Image } from 'react-bootstrap'
import styles from './title.module.css';

export default function Title() {
    return (
        <Container className="d-flex">
            <Row className="m-auto justify-content-center">
                <Col xs={12} md={8} lg={6} className="text-center">
                    <Image className={styles.tars_gif} src={tars} roundedCircle />
                    <h4 className="mt-2">T.A.R.S</h4>
                    <p>A Powerful Text-Based Search Engine</p>
                </Col>
            </Row>
        </Container>
    )
}
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import styles from './styles.module.css';

export default function ImageComp(props) {

    const { element } = props;

    const keywords = element.content.split(' '); // gives me the keywords referencing the image

    return (
        <div className={styles.full_screen_center}>
            <Container className={`${styles.content_container} my-3`}>
                <Row className="justify-content-center">
                    <Col xs={12}>
                        <h2 className="text-center">{element.file_name}</h2>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col xs={12} md={8} lg={6}>
                        <div className="d-flex justify-content-center">
                            <Image src={`${process.env.REACT_APP_BACKEND}${element.file_loc}`} alt="Descriptive alt text" fluid />
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12}>
                        <hr />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12}>
                        <div className="d-flex flex-wrap justify-content-center">
                            {keywords.map((keyword, index) => (
                                <Badge key={index} bg="secondary" className="m-1" pill>
                                    {keyword}
                                </Badge>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}
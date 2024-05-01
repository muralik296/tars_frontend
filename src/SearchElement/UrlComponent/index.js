import { useSearchParams } from 'react-router-dom';

import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import KeyWords from '../KeyWords';


export default function UrlComp(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const list_of_search_words = query ? query.split(',') : null;
    const { element } = props;

    return (
        <Container style={{ marginTop: '40px' }}>
            <Row>
                <Col lg={10}>
                    <h4>
                        {element.file_name}
                    </h4>
                    <p>
                        Created At: {new Date(element.created_at).toDateString()}
                    </p>
                    <Card style={{ marginTop: '45px' }}>
                        <Card.Body>
                            <hr />
                            <a href={`${element.file_name}`} target='_blank' style={{ width: '100%', height: '400px' }}>
                                {element.file_name}
                            </a>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={2}>
                    {list_of_search_words ? <KeyWords element={element} listOfSearchWords={list_of_search_words} /> : null}
                </Col>
            </Row>
        </Container>
    )
}
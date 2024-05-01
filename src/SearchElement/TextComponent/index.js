import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useSearchParams } from 'react-router-dom';
import styles from './styles.module.css'
import KeyWords from '../KeyWords';

export default function TextComp(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const list_of_search_words = query ? query.split(',') : null;
    const { element } = props;


    function renderAndHighlightWords(text) {
        if (!list_of_search_words || list_of_search_words.length === 0) {
            return <p>{text}</p>;
        } else {
            const regexPattern = list_of_search_words
                .filter(term => term)
                .map(term => term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
                .join('|');

            const regex = new RegExp(`(${regexPattern})`, 'gi');
            const parts = text.split(regex);

            return (
                <>
                    <p>
                        <br />
                        {parts.map((part, index) =>
                            regex.test(part) ?
                                <span key={index} className={styles.highlight_word}>{part}</span> :
                                part
                        )}
                    </p>
                </>

            )
        }
    }

    return (
        <Container style={{ marginTop: '40px' }}>
            <Row>

                <Col lg={10}>
                    <h4>{element.file_name}(<a href={`${process.env.REACT_APP_BACKEND}${element.file_loc}`} target="_blank">file</a>)</h4>
                    <p>
                        Created At: {new Date(element.created_at).toDateString()}
                    </p>
                    <Card style={{ marginTop: '45px' }}>
                        <Card.Body>
                            <hr />
                            {renderAndHighlightWords(element.content)}
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
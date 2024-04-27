import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faFileLines, faFilePdf, faFileImage, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

export default function SearchResults(props) {
    const { query } = props;

    const [isLoading, setLoading] = useState(true);

    const [isError, setError] = useState(false);

    const [data, setData] = useState(null)


    useEffect(() => {
        const fetchSearchResults = async () => {
            const res = await axios.post(`${process.env.REACT_APP_BACKEND}/search/`, { query })
            const data = res?.data?.data
            // console.log(data,'from call')
            setData(data);
            setLoading(false);
        }
        fetchSearchResults()
    }, [query])

    if (isLoading) return 'Loading.. '
    function renderIcon(fileType) {
        if (fileType == 'image') {
            return <FontAwesomeIcon title={'image'} icon={faFileImage} />
        } else if (fileType == 'url') {
            return <FontAwesomeIcon title={'url'} icon={faGlobe} />
        } else if (fileType == 'pdf') {
            return <FontAwesomeIcon title={'pdf'} icon={faFilePdf} />
        } else if (fileType == 'plain') {
            return <FontAwesomeIcon title={'text file'} icon={faFileLines} />
        }

    }
    if (data.length == 0) {
        return `No results for ${query}`
    }
    return (
        <Container>
            <Row>

                {data.map((element, i) => {
                    return <Col md={6} lg={12} key={i}>
                        <Card className="my-3">
                            <Card.Body>
                                <NavLink to={`/search/${element._source.documentid}`}>
                                    <Card.Title>
                                        {element?._source?.file_name}
                                        <span style={{ marginLeft: '10px' }}>{renderIcon(element._source.type)}</span>
                                    </Card.Title>
                                </NavLink>
                                {['plain', 'pdf', 'url'].includes(element._source.type) ?
                                    <Card.Text>
                                        {`${element?._source?.content.substring(0, 100)}....`}
                                    </Card.Text> : null
                                }
                            </Card.Body>
                        </Card>
                    </Col >
                })
                }
            </Row>
        </Container >)
}
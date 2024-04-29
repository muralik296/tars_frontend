import { Card } from 'react-bootstrap';

export default function WordComp(props) {
    const { element } = props;
    return (
        <Card style={{ marginTop: '45px' }}>
            <Card.Header>{element.file_name}</Card.Header>
            <Card.Body>
                <hr />
                <a href={`${process.env.REACT_APP_BACKEND}${element.file_loc}`}>
                    {element.file_name}
                </a>
            </Card.Body>
        </Card>
    )
}